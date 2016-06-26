import {Component, Input, Output, EventEmitter,OnChanges, SimpleChange} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';

import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'loading-level-view',
  template: `
  <div class="flex-container">
  <header>

  </header>

  <br>

  <section class="content">

  </section>

  <br>

  <footer>
    <div style="text-align: center">
      <button md-mini-fab *ngIf="count <= 0" [style.background-color]="'#F76464'" (click)="startLevel()">
        <md-icon class="material-icons md-24">play_arrow</md-icon>
      </button>
      <button md-mini-fab *ngIf="count > 0"  [style.background-color]="'#F76464'" (click)="startLevel()">
        {{count}}
      </button>
    </div>
  </footer>
  </div>


  `,
  styleUrls: ['app/views/game-view.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_ICON_DIRECTIVES ],
  providers: [HTTP_PROVIDERS],
  viewProviders: [MdIconRegistry]


})
export class LoadingLevelView{
  @Output('onStart') startLevelEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Input() count:number = 3;
  @Output() countChange:EventEmitter<number> = new EventEmitter<number>();
  constructor(private mdIconRegistry:MdIconRegistry){
    this.startCountdown();
  }

  startCountdown(){
    let interval = setInterval(()=> {
      this.count--;
      if(this.count <= 0){
        clearInterval(interval);
      }
    }, 1000)
  }

  startLevel(){
    this.startLevelEmitter.emit("");
  }

}
