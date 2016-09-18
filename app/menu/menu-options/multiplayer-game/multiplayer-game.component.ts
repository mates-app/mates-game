/**
 * Created by josecullen on 11/09/16.
 */

import {Component, OnInit} from "@angular/core";
import {GameMatch} from "../../../models";
import {MatesServices} from "../../../mates-commons/mates-game.service";


@Component({
  moduleId: module.id,
  selector: 'public-game-menu',
  template: `

<div *ngIf="!isStarted">
<md-toolbar>
    <span class="title">Selecciona un juego</span>

    <md-button class="md-fab md-mini" style="cursor:pointer" (click)="menu()">
	    <md-icon class="md-24" style="color:#921919;">keyboard_arrow_left</md-icon>
    </md-button>
    

</md-toolbar>
<a md-raised-button routerLink="create">Create Game</a>
<button md-raised-button (click)="play(gameConfig._id)" *ngFor="let gameMatch of gameMatches">{{gameMatch._id}}</button>

</div>



    

`
})
export class MultiplayerGameSelection implements OnInit{
  gameMatches:Array<GameMatch> = new Array()

  constructor(
    private matesServices:MatesServices
  ){}

  ngOnInit(){
    this
      .matesServices
      .getPublicMatches('multi-player')
      .subscribe(gameMatches => {
        console.log(gameMatches)
        this.gameMatches = gameMatches
      })
  }
  

}
