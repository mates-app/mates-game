import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ToolbarConfig, ToolbarComponent} from '../commons/toolbar.component';
import {CounterConfig} from '../commons/counter.component';
import {AnswerButtonsComponent} from '../commons/answer-buttons.component';
import {MathProblemExpression} from '../commons/math-problem-expression.component';

import {TimerService} from '../timer.service';
import {GameStatusService} from '../game-status.service';
import {Observable} from 'rxjs/Observable';
import {GameProblem, GameLevel, GameInstance} from '../../models';
// import {MathJaxDirective} from '../../../directives/mathjax.directive';

@Component({
  moduleId: module.id,
  selector: 'level-play',
  templateUrl: 'level-play.component.html',
  styleUrls: ['level-play.component.css'],
  directives: [
    // AnswerButtonsComponent,
    // MathProblemExpression,
    // ToolbarComponent
    // MathJaxDirective
  ]

})
export class PlayingLevelComponent {
  @Input() gameProblem:GameProblem;
  @Input() gameLevel:GameLevel;
  @Input() toolbarConfig:ToolbarConfig;
  @Output() isCorrect:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(public timerService:TimerService, private gameStatus:GameStatusService){

  }

  printProblem(){
    return JSON.stringify(this.gameLevel)
  }

  processAnswer(answer:string){
    let corrects = this.gameProblem.answer;
    
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
