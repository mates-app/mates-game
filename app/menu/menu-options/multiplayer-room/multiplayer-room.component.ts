/**
 * Created by josecullen on 11/09/16.
 */

import {Component, OnInit} from "@angular/core";
import {GameMatch} from "../../../models";
import {MatesServices} from "../../../mates-commons/mates-game.service";
import {MatesExchangeServices} from "../../../mates-commons/mates-exchange.service";
import {MdIconRegistry} from "@angular2-material/icon";
import {Router, ActivatedRoute} from "@angular/router";
import {GameControl, GameInstance} from "torbi.ng2-choices-game/components";


@Component({
  moduleId: module.id,
  selector: 'multiplayer-room',
  template: `
  <div *ngIf="!isStarted">
    <h2>{{gameMatch.name}}</h2>
    <a md-button (click)="start()">Iniciar</a>
  </div>
  <game-view>
    <first-level-body>
        <h1>Disfrutá el juego!</h1>
    </first-level-body>

    <level-load-body>
        <effectivity-content [isGameOver]="false"></effectivity-content>
    </level-load-body>

    <game-over-body>
        <effectivity-content [isGameOver]="true"></effectivity-content>
    </game-over-body>

  </game-view>



`
})
export class MultiplayerRoom implements OnInit{
    gameMatch:GameMatch
    isStarted:boolean


    constructor(
        private gameControl:GameControl,
        private matesExchange:MatesExchangeServices,
        private matesServices:MatesServices
    ){
            
    }

    ngOnInit(){
        
        this.gameMatch = this.matesExchange.getSelectedGameMatch()

        this.matesServices
            .getGameInstance(this.gameMatch.gameId)
            .subscribe(gameInstance => this.gameControl.setGameInstance(gameInstance))
        
    }

    start(){
        this.isStarted = true
        this.gameControl.start()
        this.gameControl.onScoreChange()
          .subscribe(
            score =>{
              this.matesServices.pushScore(
                this.gameControl.getGameInstance().gameId,
                "57bccba3ee005b59204559a4",
                score.allScore())
              console.log('score', score.allScore())
            })
    }


}


