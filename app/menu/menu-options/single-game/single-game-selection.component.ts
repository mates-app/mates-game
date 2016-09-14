/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";
import {GameConfig} from "../../../models";
import {GameInstance, GameControl} from "torbi.ng2-choices-game/components";
import {MatesServices} from "../../../mates-commons/mates-game.service";
import {Router} from "@angular/router";
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";

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
    private router : Router,
    private gameControl:GameControl,
    private mdIconRegistry:MdIconRegistry
  ){

    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');
  }

  menu(){
    console.log('click')
    let link = ['/menu']
    this.router.navigate(link)
  }

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
                this.gameControl.getGameInstance().gameMatchId,
                "57bccba3ee005b59204559a4",
                score.allScore())
              console.log('score', score.allScore())
            }

          )

        // let link = ['/game']
        // this.router.navigate(link)
      },
      error => console.log(error)
    )


  }

}
