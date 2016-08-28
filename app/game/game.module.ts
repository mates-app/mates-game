import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CurrentGameInstance } from './current-game.service'
import { GameStatusService } from './game-status.service'
import { TimerService } from './timer.service'

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { LoadingLevelComponent } from './level-load/level-load.component'
import { PlayingLevelComponent } from './level-play/level-play.component'

import { AnswerButtonsComponent } from './commons/answer-buttons.component'
import { CounterComponent, CounterConfig } from './commons/counter.component'
import { MathProblemExpression } from './commons/math-problem-expression.component'
import { ToolbarComponent, ToolbarConfig } from './commons/toolbar.component'
import { PopupComponent } from './commons/popup.component'


@NgModule({

  imports: [
  	BrowserModule,
  	MdCardModule,
  	MdButtonModule,
  	MdGridListModule,
  	MdIconModule,
  	MdToolbarModule,
  ],
  exports : [
    LoadingLevelComponent,
    PlayingLevelComponent,
    AnswerButtonsComponent,
    CounterComponent,
    MathProblemExpression,
    ToolbarComponent
  ],
  declarations: [
  	LoadingLevelComponent,
  	PlayingLevelComponent,
  	AnswerButtonsComponent,
  	CounterComponent,
  	MathProblemExpression,
  	ToolbarComponent,
    PopupComponent
  ],
  providers : [
  	CurrentGameInstance,
  	GameStatusService,
  	TimerService
  ]

})
export class GameModule {

}
