/**
 * Created by josecullen on 11/09/16.
 */

import { Component } from "@angular/core";
import { GameConfig, GameMatesInstance, GameMatch, User } from "../../../models";
import { GameInstance, GameControl } from "torbi.ng2-choices-game/components";
import { MatesServices, CreateGameBody } from "../../../mates-commons/mates-game.service";
import { UserServices } from "../../../mates-commons/users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MdIconRegistry } from "@angular/material";
import { MatesExchangeServices } from "../../../mates-commons/mates-exchange.service";

@Component({
  moduleId: module.id,
  selector: 'create-multiplayer-game',
  templateUrl: 'create-multiplayer-game.component.html',
  styleUrls: ['create-multiplayer-game.component.css'],
  viewProviders: [MdIconRegistry]
})
export class CreateMultiplayerGame {
  tabIndex: number = 0
  gameConfigs: Array<GameConfig>;
  users: Array<User>;
  gameConfigName:string = ''

  validations = {
    name:{
       valid: false,
       dirty: false,
       message: ""
    }
  }

  createGameBody: CreateGameBody = {
    gameId: '',
    name: '',
    users: [],
    isMultiPlayer: true
  }

  onTabChange(tab) {
    this.tabIndex = tab.index
  }

  validateName(){
    this.validations.name.dirty = true
    if(this.createGameBody.name.length >= 6 ){
      this.matesServices
          .gameMatchExists(this.createGameBody.name)
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
  

  constructor(
    private matesServices: MatesServices,
    private usersServices: UserServices,
    private matesExchanges: MatesExchangeServices,
    private router: Router,
    private route: ActivatedRoute,
    private mdIconRegistry: MdIconRegistry
  ) {

    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');

  }

  menu() {
    this.router.navigate(['../', {}], { relativeTo: this.route });
  }

  ngOnInit() {
    this.matesServices.getAllPublicGameConfigs().subscribe(
      gameConfigs => this.gameConfigs = gameConfigs,
      error => console.log(error));
    
    this.usersServices.getUsersByNameFragment('').subscribe(
      users => this.users = users,
      error => console.log(error));
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
          users => this.users = users
        )
  }

  selectGameConfig(gameConfig:GameConfig){
    this.gameConfigName = gameConfig.name
    this.createGameBody.gameId = gameConfig._id
  }

  resolveUserColor(user:User):string{
    let result = this.isUserSelected(user)
            ? 'accent' 
            : ''
    return result
  }

  isUserSelected(user:User):boolean{
    return this.createGameBody.users.length > 0 &&
      this.createGameBody.users.some(u => u._id === user._id)
  }

  selectUser(user:User){ 
    if(this.isUserSelected(user)){
      this.createGameBody.users = this.createGameBody.users.filter(u => u._id !== user._id)
    }else{
      this.createGameBody.users.push(user) 
    }
      
      
  }

  create() {
    this
      .matesServices
      .createMatch(this.createGameBody)
      .subscribe(gameMatch => {
        this.matesExchanges.setSelectedGameMatch(gameMatch)
        this.router.navigate(['../room', {}], { relativeTo: this.route })
      })
  }




}
