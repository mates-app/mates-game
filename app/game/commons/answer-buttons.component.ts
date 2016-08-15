import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import { Observable } from "rxjs/Observable";
import {CounterComponent, CounterConfig} from './counter.component';
// import {MathJaxDirective} from '../directives/mathjax.directive';

@Component({
  moduleId : module.id,
  selector: 'answer-buttons',
  templateUrl: 'answer-buttons.component.html',
  styleUrls: ['answer-buttons.component.css'],
  directives: [ CounterComponent, NgClass, 
    // MathJaxDirective
    ],
  providers: [HTTP_PROVIDERS],
  // viewProviders: [MdIconRegistry]

})
export class AnswerButtonsComponent {
  @Input() answers:Array<string> = new Array();
  @Output() answer:EventEmitter<string> = new EventEmitter<string>();
  constructor(){ };

  sendAnswer(answer:string){
    this.answer.emit(answer);
  }

}
