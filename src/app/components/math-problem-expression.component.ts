import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MathJaxDirective} from '../directives/mathjax.directive';

@Component({
  selector: 'math-problem-expression',
  template: `
  <div style="margin-top: -10px">
   <h3 [MathJax]="'$$'+problemExpression+'$$'"></h3>
  </div>
  `,
  directives: [MathJaxDirective]
})
export class MathProblemExpression {
  @Input() problemExpression:string;


}
