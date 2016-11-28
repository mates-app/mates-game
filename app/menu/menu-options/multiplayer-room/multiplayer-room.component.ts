/**
 * Created by josecullen on 11/09/16.
 */

import {Component, OnInit} from "@angular/core";
import {GameMatch} from "../../../models";
import {MatesServices} from "../../../mates-commons/mates-game.service";
import {MatesExchangeServices} from "../../../mates-commons/mates-exchange.service";
import {MdIconRegistry} from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";
import {GameControl, GameInstance} from "torbi.ng2-choices-game/components";
import { AuthService } from "../../../auth.service";
import * as io from "socket.io-client";

@Component({
  moduleId: module.id,
  selector: 'multiplayer-room',
  template: `
  <div *ngIf="!isStarted">
    <menu-header [title]="'Sala de Juego'" [routeBack]="'../../'"></menu-header>
    <md-card>
        <h1>{{gameMatch.name}}</h1>
    </md-card>

    <md-card>

    </md-card>

    <md-card class="footer-card">
        <button md-button 
            (click)="setStarted()" 
            color="primary" 
            *ngIf="!gameMatch.isStarted && isAdmin()">iniciar
        </button>
        <button md-button 
            (click)="start()" 
            color="primary" 
            [disabled]="!gameMatch.isStarted">JUGAR
        </button>
    </md-card>
  </div>
  <!--
  <div *ngIf="!gameMatch.isStarted">
    <h2>{{gameMatch.name}}</h2>
    <h3>Esperando para comenzar . . .</h3>
  </div>
-->
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
    socket:any

    constructor(
        private gameControl:GameControl,
        private matesExchange:MatesExchangeServices,
        private matesServices:MatesServices,
        private authService: AuthService
    ){
            
    }

    ngOnInit(){
        this.gameMatch = this.matesExchange.getSelectedGameMatch()
        // this.matesServices
        //     .getGameInstance(this.gameMatch.gameId)
        //     .subscribe(gameInstance => this.gameControl.setGameInstance(gameInstance))

        this.socket = io.connect('http://localhost:4001', { 'forceNew': true });
        this.socket.on(this.gameMatch._id, (message) => 
            message.type === 'start' 
                ? this.gameMatch.isStarted = true 
                : console.log(message))

    }

    start(){
        this.isStarted = true
        this.gameControl.start()
        this.gameControl.onScoreChange()
          .subscribe(
            score =>{
              this.matesServices.pushScore(
                this.gameMatch._id,
                this.authService.getUser()._id,
                score.allScore())
              console.log('score', score.allScore())
            })
    }

    setStarted(){
        this.matesServices.startMatch(this.gameMatch._id).subscribe(
            res => {
                console.log('res', res)
            },
            err => console.log('err', err)
        )
    }

    isAdmin():boolean{
        return this.gameMatch.author.username === this.authService.getUser().username
    }


}


