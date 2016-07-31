import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ToolbarComponent, ToolbarConfig} from '../../../components/toolbar.component';
import {CounterComponent, CounterConfig} from '../../../components/counter.component';
import {AnswerButtonsComponent} from '../../../components/answer-buttons.component';
import {MathProblemExpression} from '../../../components/math-problem-expression.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';

import {TimerService} from '../../../services/timer.service';
import {GameStatusService} from '../../../services/game-status.service';
import {Observable} from 'rxjs/Observable';
import {GameProblem, GameLevel, GameInstance} from '../../../models';
import {MathJaxDirective} from '../../../directives/mathjax.directive';

@Component({
  moduleId: module.id,
  selector: 'level-play',
  templateUrl: 'level-play.component.html',
  styleUrls: ['level-play.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    ToolbarComponent,
    AnswerButtonsComponent,
    MathProblemExpression,
    MathJaxDirective
  ]

})
export class GameViewComponent {
  @Input() gameProblem:GameProblem;
  @Input() gameLevel:GameLevel;
  @Input() toolbarConfig:ToolbarConfig;
  @Output() isCorrect:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(public timerService:TimerService, private gameStatus:GameStatusService){

  }

  processAnswer(answer:string){
    let corrects = this.gameProblem.correctAnswer;
    //console.log(corrects);
    if(corrects.some(correct => correct == answer)){
      corrects.splice(corrects.findIndex(correct => correct == answer), 1);
      if(corrects.length == 0){
        this.isCorrect.emit(true);
      }
    }else{
      this.isCorrect.emit(false);
    }
  }

  displayProblem(problemIndex:number){
    if(problemIndex == this.gameStatus.problem){
      return 'block';
    }else{
      return 'none';
    }
  }


}
