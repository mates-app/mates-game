import { Component, OnInit, ApplicationRef} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';

import {ToolbarComponent, ToolbarConfig} from '../../components/toolbar.component';
import {ToolbarDemoComponent} from '../toolbar-demo.component';
import {GameViewComponent} from './level-play/level-play.component';
import {LoadingLevelView} from './level-load/level-load.component';
import {GameOverComponent} from './game-over/game-over.component'
import {TimerService} from '../../services/timer.service';
import {GameStatusService} from '../../services/game-status.service';
import {MatesServices} from '../../services/mates.services';
import { CurrentGameInstance} from '../../services/current-game.service'
import * as models from '../../models';

@Component({
  moduleId: module.id,
  selector: 'game-view',
  templateUrl: 'game-view.component.html',
  styleUrls: ['game-view.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    ToolbarComponent,
    ToolbarDemoComponent,
    GameViewComponent,
    LoadingLevelView,
    GameOverComponent],
  providers: [HTTP_PROVIDERS, TimerService, MatesServices, GameStatusService],
  viewProviders: [MdIconRegistry]

})
export class GameMatesAppComponent {
  title = 'game-mates';
  gameInstance:models.GameInstance;
  viewStatus:ViewStatus = ViewStatus.LOADING_LEVEL;
  gameDisplay:string = "block";
  gameOverType:models.GameOverType

  ngOnInit(){
    this.gameInstance = this.currentGameInstance.getGameInstance()
    this.gameStatus.subjectLevel.subscribe(level => {
      console.log("new level", level);
      this.loadingLevel();
    } );

    this.gameStatus.subjectGameOver.subscribe(gameOverType => this.gameOver(gameOverType))

    this.startGame();
  }

  constructor(
    private timerService:TimerService,
    private gameStatus:GameStatusService,
    private matesServices:MatesServices,
    private currentGameInstance:CurrentGameInstance,
    private appRef:ApplicationRef
    ){  };


  loadGame(){
    this.gameStatus.subjectLevel.subscribe(level => {
      console.log("new level", level);
      this.loadingLevel();
    } );

    this.startGame();


  }

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

  gameOver(gameOver:models.GameOverType){
    console.log(gameOver)
    this.gameOverType = gameOver;
    console.log('ViewStatus',this.viewStatus)
    this.viewStatus = ViewStatus.GAME_OVER
    console.log('ViewStatus',this.viewStatus)
    this.gameDisplay = "none";
    this.appRef.tick()
  }


}


enum ViewStatus{
  NOT_SELECTED_GAME, NOT_STARTED_GAME, LOADING_LEVEL, PLAY_LEVEL, GAME_OVER
}
