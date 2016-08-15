import {Component, Input, Output, EventEmitter} from '@angular/core';
// import {MathJaxDirective} from '../directives/mathjax.directive';

@Component({
  selector: 'math-problem-expression',
  template: `
  <div style="margin-top: -10px">
   
  </div>
  `,
  directives: [
  // MathJaxDirective
  ]
})
export class MathProblemExpression {
  @Input() problemExpression:string;


}
// <h3 [MathJax]="'$$'+problemExpression+'$$'"></h3>