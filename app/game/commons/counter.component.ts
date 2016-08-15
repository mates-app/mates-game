import { Component, Input, OnChanges, SimpleChange, ElementRef} from '@angular/core';
import {NgClass} from '@angular/common';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subject } from "rxjs/Subject";




@Component({
  moduleId : module.id,
  selector: 'counter',
  template: `
    <div [ngClass]="{animate : shouldAnimate, animateOnce : !shouldAnimate}">
      <span id="valueNumber" class="valueNumber" >{{config.value}}</span>
    </div>`,
  styleUrls: ['counter.component.css'],
  directives: [NgClass]

})
export class CounterComponent implements OnChanges{
  @Input() config:CounterConfig = new CounterConfig();


  constructor(private elementRef:ElementRef){

  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {

  }


}


export class CounterConfig{
  constructor(
    public value:number = 0,
    public velocity:number = 200,
    private valueObservable:Observable<number> = new Observable<number>()){
  }

  public setObservableValue(observable:Observable<number>){
    observable.subscribe(valueObserve => {this.value = valueObserve;});
  }

}
