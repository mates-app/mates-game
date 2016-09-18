/**
 * Created by josecullen on 11/09/16.
 */

import {Component, OnInit} from "@angular/core";
import {GameMatch} from "../../../models";
import {MatesServices} from "../../../mates-commons/mates-game.service";
// <md-button class="md-fab md-mini" style="cursor:pointer" (click)="menu()"></md-button>
import {MdIconRegistry} from "@angular2-material/icon";


@Component({
  moduleId: module.id,
  selector: 'public-game-menu',
  template: `

<div *ngIf="!isStarted">
<md-toolbar>
    <span class="title">Selecciona un juego</span>

    
	    <md-icon class="md-24" style="color:#921919;">keyboard_arrow_left</md-icon>
    
    

</md-toolbar>
<a md-raised-button routerLink="create">Create Game</a>
<button md-raised-button (click)="play(gameConfig._id)" *ngFor="let gameMatch of gameMatches">{{gameMatch._id}}</button>

</div>



    

`,
viewProviders: [MdIconRegistry]
})
export class MultiplayerGameSelection implements OnInit{
  gameMatches:Array<GameMatch> = new Array()

  constructor(
    private matesServices:MatesServices,
    private mdIconRegistry:MdIconRegistry
  ){

    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');

  }

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
