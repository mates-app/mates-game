/**
 * Created by josecullen on 17/07/16.
 */
import { Directive, Component, Input, Output, EventEmitter} from '@angular/core';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'

@Component({
  selector: 'finder',
  template: `
  <md-input #finderInput type="text" (keyup)="find(finderInput.value)" placeholder="{{placeholder}}">
    <span md-suffix>
        <md-icon class="md-24" style="color:#921919;">search</md-icon>
    </span>
  </md-input>
  <ng-content select="items-founded"></ng-content>
  `,
  styles: [`
    md-input {
        width: 100%;
        margin-top: 10px;
    }
  `]

})
export class FinderComponent {
    @Input() placeholder:string = 'Search . . .'
    @Output() finderEvent:EventEmitter<string> = new EventEmitter<string>()
    
    find(value:string){
        console.log(value)
        this.finderEvent.emit(value);
    }
}

@Directive({
    selector: 'items-founded'
})
export class ItemFounded{}
