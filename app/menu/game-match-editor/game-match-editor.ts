/**
 * Created by josecullen on 11/09/16.
 */

import { Component, OnInit } from "@angular/core";
import { GameConfig, GameMatesInstance, GameMatch, User } from "../../models";
import { GameInstance, GameControl } from "torbi.ng2-choices-game/components";
import { MatesServices } from "../../mates-commons/mates-game.service";
import { GameMatchServices } from "../../mates-commons/game-match.service";

import { UserServices } from "../../mates-commons/users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MdIconRegistry } from "@angular/material";
import { MatesExchangeServices } from "../../mates-commons/mates-exchange.service";
import { AuthService } from "../../auth.service";

@Component({
  moduleId: module.id,
  templateUrl: 'game-match-editor.html',
  styleUrls: ['game-match-editor.css'],
  viewProviders: [MdIconRegistry]
})
export class GameMatchEditor implements OnInit{
  type:string = 'create'
  title:string = 'Crear Juego'
  tabIndex: number = 0
  originalName:string = ''
  gameConfigs: Array<GameConfig>;
  users: Array<User>;
  gameConfigName:string = ''
  newMatch: GameMatch = new GameMatch()  

  validations = {
    name:{
       valid: false,
       dirty: false,
       message: ""
    }
  }

  constructor(
    private matesServices: MatesServices,
    private usersServices: UserServices,
    private matesExchanges: MatesExchangeServices,
    private gameMatchServices: GameMatchServices,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private mdIconRegistry: MdIconRegistry
  ) {

    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');

  }

  ngOnInit() {
    this.newMatch.author = this.authService.getUser()
    let id = this.route.snapshot.params['id'];
    if(id){
      this.type = 'edit'
      this.title = 'Editar Juego'
      this.validations.name.valid = true
      this.gameMatchServices
        .byId(id)
        .subscribe(
          gameMatch => {
            this.newMatch = gameMatch
            this.gameConfigName = this.newMatch.gameId.name
            this.originalName = JSON.parse(JSON.stringify(this.newMatch.name))
          },
          err => console.log('err',err)
        )
    }

    this.matesServices.getAllPublicGameConfigs().subscribe(
      gameConfigs => this.gameConfigs = gameConfigs,
      error => console.log(error));
    
    this.usersServices.getUsersByNameFragment('').subscribe(
      users => this.users = users,
      error => console.log(error));
    console.log('type', this.type)
  }

  onTabChange(tab) {
    this.tabIndex = tab.index
  }

  isPublic(){
    this.newMatch.isPublic = this.newMatch.users.length === 0
    return this.newMatch.isPublic 
  }

  validateName(){
    this.validations.name.dirty = true
    let validLength = this.newMatch.name.length >= 6
    if(validLength && (this.type === 'create' || this.originalName !== this.newMatch.name)){
      this.matesServices
          .gameMatchExists(this.newMatch.name)
          .subscribe(
            exists => {
              this.validations.name.valid = !exists
              this.validations.name.valid
                ? this.validations.name.message = ''
                : this.validations.name.message = 'El nombre ya existe'
            } 
          )
    }else{
      this.validations.name.valid = false
      this.validations.name.message = 'El nombre debe tener entre 6 y 20 caracteres'
    }
  }

  findConfigs(name:string){
    this.matesServices.getConfigsByNameMatching(name)
        .subscribe(
          gameConfigs => this.gameConfigs = gameConfigs
        )
  }

  findUsers(name:string){
    this.usersServices.getUsersByNameFragment(name)
        .subscribe(
          users => this.users
        )
  }

  

  resolveUserColor(user:User):string{
    let result = this.isUserSelected(user)
            ? 'accent' 
            : ''
    return result
  }

  isUserSelected(user:User):boolean{
    return this.newMatch.users.length > 0 &&
      this.newMatch.users.some(u => u._id === user._id)
  }

  selectUser(user:User){ 
    if(this.isUserSelected(user)){
      this.newMatch.users = this.newMatch.users.filter(u => u._id !== user._id)
    }else{
      this.newMatch.users.push(user) 
    }
  }

  create() {
    this
      .gameMatchServices
      .create(this.newMatch)
      .subscribe(gameMatch => {
        this.matesExchanges.setSelectedGameMatch(gameMatch)
        this.router.navigate(['../room', {}], { relativeTo: this.route })
      })
  }




}
