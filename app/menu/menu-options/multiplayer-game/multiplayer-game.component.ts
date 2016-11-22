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
import { AuthService } from "../../../auth.service";

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
<div class="centered-container">

  <md-card style="height:80%">

    <menu-header [title]="'Multiplayer Game'" [routeBack]="'../../'"></menu-header>  

    <button md-raised-button class="special-button" routerLink="create">Create Game</button>
    
    <md-tab-group>
    <md-tab>
        <template md-tab-label>PRIVADOS</template>
        <template md-tab-content>
            <finder 
              (finderEvent)="findPrivateMatches($event)" 
              [placeholder]="'Search for Private Matches'">
              <items-founded>
                <div>
                  <button 
                    md-raised-button 
                    (click)="gameSelected = gameMatch" 
                    *ngFor="let gameMatch of privateMatches">{{gameMatch.name}}</button>
                  <br>
                </div>
              </items-founded>
            </finder>
        </template>
    </md-tab>
    <md-tab>
        <template md-tab-label>PÚBLICOS</template>
        <template md-tab-content>
            <finder 
              (finderEvent)="findPublicMatches($event)" 
              [placeholder]="'Search for Public Matches'">
              <items-founded>
                <div>
                  <button 
                    md-raised-button 
                    (click)="gameSelected = gameMatch" 
                    *ngFor="let gameMatch of publicMatches">{{gameMatch.name}}</button>
                  <br>
                </div>
              </items-founded>
            </finder>
        </template>

    </md-tab>
</md-tab-group>





    



  </md-card>
</div>

<md-card class="footer-card">
  <button md-button (click)="play()" [disabled]="gameSelected === undefined">JUGAR</button>
</md-card>
  

`,
styles:[`
    button {
        width: 100%;
        margin-top: 3px;
    }
    .special-button{
      background-color: blue;
    }
    .footer-card {
      padding: 10px 16px;
    }
    .centered-container{
      height: 80%;
      display:block;
      overflow:auto;

      text-align: center;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px; 
    }
`],
viewProviders: [MdIconRegistry]
})
export class MultiplayerGameSelectionList implements OnInit{
  publicMatches:Array<GameMatch> = new Array()
  privateMatches:Array<GameMatch> = new Array()
  gameSelected:GameMatch = undefined

  constructor(
    private matesServices:MatesServices,
    private userServices:UserServices,
    private mdIconRegistry:MdIconRegistry,
    private authService: AuthService,
    private router : Router,
    private route: ActivatedRoute,
    private matesExchangeService:MatesExchangeServices
  ){
    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit(){
    this.findPublicMatches('')
    this.findPrivateMatches('')
        
  }
  
  findPublicMatches(name:string){
    this.matesServices.getMatchesByNameFragment(name)
        .subscribe(gameMatches => this.publicMatches = gameMatches
          .filter(match => match.isPublic)
          .filter(match => match.isMultiPlayer)
        )
  }

  findPrivateMatches(name:string){
    this.matesServices.getMatchesByNameFragment(name)
        .subscribe(gameMatches => this.privateMatches = gameMatches
          .filter(match => !match.isPublic)
          .filter(match => match.isMultiPlayer)
          .filter(match => match.users.some(user => user.username === this.authService.getUser().username)
                                                    || match.author.username === this.authService.getUser().username)
        )
  }



  selectGame(gameMatch:GameMatch){
    this.matesExchangeService.setSelectedGameMatch(gameMatch)
    this.router.navigate(['room', {  }], { relativeTo: this.route });
  }

  


}
