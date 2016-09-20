/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";
import {GameConfig, GameMatesInstance} from "../../../models";
import {GameInstance, GameControl} from "torbi.ng2-choices-game/components";
import {MatesServices, CreateGameBody} from "../../../mates-commons/mates-game.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MdIconRegistry} from "@angular2-material/icon";

@Component({
  moduleId: module.id,
  selector: 'create-multiplayer-game',
  templateUrl : 'create-multiplayer-game.component.html',
  styleUrls : ['create-multiplayer-game.component.css'],
  viewProviders: [MdIconRegistry]
})
export class CreateMultiplayerGame{

createGameBody:CreateGameBody = {
  gameId : '',
  name: '',
  isMultiPlayer: true
}

gameConfigs:Array<GameConfig>;
 
  constructor(
    private matesServices : MatesServices,
    private router : Router,
    private route: ActivatedRoute,
    private mdIconRegistry:MdIconRegistry
  ){

    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');

  }

  menu(){    
    this.router.navigate(['../', {  }], { relativeTo: this.route });
  }

  ngOnInit(){
    this.matesServices.getAllPublicGameConfigs().subscribe(
      gameConfigs => this.gameConfigs = gameConfigs,
      error =>  console.log(error));
  }

  create(){
      
      this
        .matesServices
        .createMatch(this.createGameBody)
        .subscribe(gameMatch => this.router.navigate(['../', {  }], { relativeTo: this.route }))
  }




}
