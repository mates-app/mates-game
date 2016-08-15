import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'level-load',
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
  styleUrls: ['level-load.component.css']

})
export class LoadingLevelComponent{
  @Output('onStart') startLevelEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Input() count:number = 3;
  @Output() countChange:EventEmitter<number> = new EventEmitter<number>();
  constructor(){
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



