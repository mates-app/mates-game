/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";
import {GameConfig, GameMatesInstance} from "../../../models";
import {GameInstance, GameControl} from "torbi.ng2-choices-game/components";
import {MatesServices} from "../../../mates-commons/mates-game.service";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'create-multiplayer-game',
  templateUrl : 'create-multiplayer-game.component.html',
  styleUrls : ['create-multiplayer-game.component.css']
})
export class CreateMultiplayerGame{

gameConfigs:Array<GameConfig>;
  gameInstances:Array<GameInstance>;
  isStarted:boolean = false;

  constructor(
    private matesServices : MatesServices,
    private router : Router,
    private gameControl:GameControl,
    private route: ActivatedRoute

  ){

  }

  menu(){    
    this.router.navigate(['../../', {  }], { relativeTo: this.route });
  }

  ngOnInit(){
    this.matesServices.getAllPublicGameConfigs().subscribe(
      gameConfigs => this.gameConfigs = gameConfigs,
      error =>  console.log(error));
  }

  create(gameId:string){
      console.log(gameId)
      this
        .matesServices
        .createMatch(gameId, true)
        .subscribe(gameMatch => this.router.navigate(['../../', {  }], { relativeTo: this.route }))
  }




}
