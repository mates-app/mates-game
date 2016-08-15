import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import { MdToolbar } from '@angular2-material/toolbar';
import { Observable } from "rxjs/Observable";
import {CounterComponent, CounterConfig} from './counter.component';
import {GameStatusService} from '../game-status.service';
import {TimerService} from '../timer.service';

@Component({
  moduleId : module.id,
  selector: 'game-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [
    CounterComponent,
    NgClass
  ]
})
export class ToolbarComponent implements OnInit{
  @Input() config:ToolbarConfig = new ToolbarConfig();

  constructor(
    private gameStatus:GameStatusService, 
    private timerService:TimerService){

  };

  ngOnInit(){
    console.log("on init toolbar");
    // this.config.timerCounter.setObservableValue(this.timerService.gameTimer.timeObservable);
    // this.config.extraTimeCounter.setObservableValue(this.timerService.extraTimer.timeObservable);
    // this.timerService.extraTimer.timeObservable.subscribe(value => this.config.showExtras = value > 0);
    // this.config.livesCounter.value = this.gameStatus.lives;
    // this.config.scoreCounter.setObservableValue(this.gameStatus.subjectScore);
    // this.config.livesCounter.setObservableValue(this.gameStatus.subjectLives);
    // this.config.levelCounter.setObservableValue(this.gameStatus.subjectLevel);
  }

}

export class ToolbarConfig{

  constructor(
    public timerCounter:CounterConfig = new CounterConfig(),
    public scoreCounter:CounterConfig = new CounterConfig(),
    public levelCounter:CounterConfig = new CounterConfig(),
    public livesCounter:CounterConfig = new CounterConfig(),
    public extraTimeCounter:CounterConfig = new CounterConfig(),
    public showExtras:boolean = false,
    public showTooltips:boolean = false
  ){ }
}
