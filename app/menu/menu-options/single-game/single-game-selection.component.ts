/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";
import {GameConfig, GameMatesInstance} from "../../../models";
import {GameInstance, GameControl} from "torbi.ng2-choices-game/components";
import {MatesServices} from "../../../mates-commons/mates-game.service";
import {AuthService} from "../../../auth.service";
import {MdIconRegistry} from "@angular/material";

@Component({
  moduleId: module.id,
  selector: 'single-game-selection',
  templateUrl: 'single-game-selection.component.html',
  styleUrls: ['single-game-selection.component.css' ],
  viewProviders: [MdIconRegistry]
})
export class SingleGameSelection{
  gameConfigs:Array<GameConfig>;
  gameInstances:Array<GameInstance>;
  isStarted:boolean = false;

  constructor(
    private matesServices : MatesServices,
    private gameControl:GameControl,
    private mdIconRegistry:MdIconRegistry,
    private authService:AuthService
  ){}

  ngOnInit(){
    this.matesServices.getAllPublicGameConfigs().subscribe(
      gameConfigs => this.gameConfigs = gameConfigs,
      error =>  console.log(error));
  }

  play(id:string){
    console.log('play', id)

    this.matesServices.getGameInstance(id).subscribe(
      gameInstance => {
        this.gameControl.setGameInstance(gameInstance)
        this.gameControl.start()
        this.isStarted = true

        this.gameControl.onScoreChange()
          .subscribe(
            score =>{
              this.matesServices.pushScore(
                (<GameMatesInstance>this.gameControl.getGameInstance()).gameMatchId,
                this.authService.getUser()._id,
                score.allScore())
              console.log('score', score.allScore())
            }

          )
      },
      error => console.log(error)
    )
}

}
