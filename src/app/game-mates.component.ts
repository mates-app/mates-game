import { Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';

import {ToolbarComponent, ToolbarConfig} from './components/toolbar.component';
import {ToolbarDemoComponent} from './views/toolbar-demo.component';
import {GameViewComponent} from './views/game-view.component';
import {LoadingLevelView} from './views/loading-level.view';
import {TimerService} from './services/timer.service';
import {GameStatusService} from './services/game-status.service';
import {MatesServices} from './services/mates.services';

import * as models from './models';

@Component({
  moduleId: module.id,
  selector: 'game-mates-app',
  templateUrl: 'game-mates.component.html',
  styleUrls: ['game-mates.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_ICON_DIRECTIVES,
    ToolbarComponent, ToolbarDemoComponent, GameViewComponent,LoadingLevelView],
  providers: [HTTP_PROVIDERS, TimerService, MatesServices, GameStatusService
  ],
  viewProviders: [MdIconRegistry]

})
export class GameMatesAppComponent {
  title = 'game-mates works!';
  gameInstance:models.GameInstance;
  viewStatus:ViewStatus = ViewStatus.LOADING_LEVEL;
  gameDisplay:string = "block";
  constructor(
    private mdIconRegistry:MdIconRegistry,
    private timerService:TimerService,
    private gameStatus:GameStatusService,
    private matesServices:MatesServices
    ){

    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');

    this.gameStatus.subjectLevel.subscribe(level => {
      console.log("new level", level);
      this.loadingLevel();
    } );

    this.startGame();
  };


  startGame(){
    this.gameInstance = this.matesServices.getGameInstance();
    this.gameStatus.startGame(this.gameInstance.levels);

    this.loadingLevel();

    console.log(this.gameInstance);
  }


  /***************/

  loadingLevel(){
    this.viewStatus = ViewStatus.LOADING_LEVEL;
    this.gameStatus.pauseGame();
    this.gameDisplay = "none";
  }

  playLevel(){
    this.viewStatus = ViewStatus.PLAY_LEVEL;
    this.gameStatus.resumeGame();

    this.gameDisplay = "block";
  }

  gameOver(){

  }


}


enum ViewStatus{
  NOT_SELECTED_GAME, NOT_STARTED_GAME, LOADING_LEVEL, PLAY_LEVEL, GAME_OVER
}
