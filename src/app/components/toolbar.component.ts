import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { Observable } from "rxjs/Observable";
import {CounterComponent, CounterConfig} from './counter.component';
import {GameStatusService} from '../services/game-status.service';
import {TimerService} from '../services/timer.service';

@Component({
  selector: 'game-toolbar',
  templateUrl: 'app/components/toolbar.component.html',
  styleUrls: ['app/components/toolbar.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    MdIcon,
    MdToolbar,
    CounterComponent,
    NgClass],
  providers: [HTTP_PROVIDERS],
  viewProviders: [MdIconRegistry]

})
export class ToolbarComponent {
  config:ToolbarConfig = new ToolbarConfig();

  constructor(private mdIconRegistry:MdIconRegistry, private gameStatus:GameStatusService, private timerService:TimerService){

  };

  ngOnInit(){
    console.log("on init toolbar");
    this.config.timerCounter.setObservableValue(this.timerService.gameTimer.timeObservable);
    this.config.extraTimeCounter.setObservableValue(this.timerService.extraTimer.timeObservable);
    this.timerService.extraTimer.timeObservable.subscribe(value => this.config.showExtras = value > 0);
    this.config.livesCounter.value = this.gameStatus.lives;
    this.config.scoreCounter.setObservableValue(this.gameStatus.subjectScore);
    this.config.livesCounter.setObservableValue(this.gameStatus.subjectLives);
    this.config.levelCounter.setObservableValue(this.gameStatus.subjectLevel);
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
