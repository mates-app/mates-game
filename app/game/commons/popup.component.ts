import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  moduleId : module.id,
  selector: 'popup',
  template: `
    <div class="popup" @popupStatus="status">{{message}}</div>
  `,
  directives: [
    NgClass
  ],
  styleUrls: ['popup.component.css'],
  animations: [
    trigger('popupStatus', [
       state('showing', style({
         transform: 'scale(0)',
         top: '30px',
         opacity: 0,
      })),
      state('hide',   style({
        transform: 'scale(0)',
        opacity: 0,
      })),
      transition('showing <=> hide', group([
          animate(1200, keyframes([
            style({opacity: 0, transform: 'translateY(0)', offset: 0}),
            style({opacity: 1, transform: 'translateY(50px)', offset: 0.3}),
            style({opacity: 0.7, transform: 'translateY(20px)', offset: 0.8}),
            style({opacity: 0, transform: 'translateY(0)',  offset: 1.0})
          ]))
      ]))
    ])
  ]
})
export class PopupComponent{
  @Input() message : string = 'a message'
  status:string = 'showing'

  toggleStatus(){
    this.status = this.status === 'showing' ?  'hide' : 'showing'
  }


}

