/**
 * Created by josecullen on 11/09/16.
 */

import {Component, OnInit} from "@angular/core";
import {GameMatch} from "../../../models";
import {MatesServices} from "../../../mates-commons/mates-game.service";
import {MatesExchangeServices} from "../../../mates-commons/mates-exchange.service";
import {UserServices} from "../../../mates-commons/users.service";
import {MdIconRegistry} from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'multiplayer-game-selection',
  template: `
<router-outlet></router-outlet>
`
})
export class MultiplayerGameSelection{

 constructor(
    private router : Router,
    private route: ActivatedRoute,
  ){ }

  back(){
    this.router.navigate(['../', {  }], { relativeTo: this.route });
  }

}



@Component({
  moduleId: module.id,
  selector: 'multiplayer-game-selection-list',
  template: `
<div *ngIf="!isStarted">
  <menu-header [title]="'Multiplayer Game'" [routeBack]="'../../'"></menu-header>  

  <button md-raised-button class="special-button" routerLink="create">Create Game</button>
  
  <finder 
    (finderEvent)="findMatches($event)" 
    [placeholder]="'Search for Game Matches'">
    <items-founded>
      <div>
        <button 
          md-raised-button 
          (click)="selectGame(gameMatch)" 
          *ngFor="let gameMatch of gameMatches">{{gameMatch.name}}</button>
        <br>
      </div>
    </items-founded>
  </finder>
  
  
</div>
`,
styles:[`
    button {
        width: 100%;
        margin-top: 3px;
    }
    .special-button{
      background-color: blue;
    }
`],
viewProviders: [MdIconRegistry]
})
export class MultiplayerGameSelectionList implements OnInit{
  gameMatches:Array<GameMatch> = new Array()

  constructor(
    private matesServices:MatesServices,
    private userServices:UserServices,
    private mdIconRegistry:MdIconRegistry,
    private router : Router,
    private route: ActivatedRoute,
    private matesExchangeService:MatesExchangeServices
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
    this
      .matesServices
      .getPublicMatches('multi-player')
      .subscribe(gameMatches => {        
        this.gameMatches = gameMatches
      })
  }
  
  findMatches(name:string){
    this.matesServices.getMatchesByNameFragment(name).subscribe(gameMatches => this.gameMatches = gameMatches)
  }

  findUsers(name:string){
    this.userServices.getUsersByNameFragment(name).subscribe(users => users.forEach(console.log))
  }

  selectGame(gameMatch:GameMatch){
    this.matesExchangeService.setSelectedGameMatch(gameMatch)
    this.router.navigate(['room', {  }], { relativeTo: this.route });
  }

  


}
