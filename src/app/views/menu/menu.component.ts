/**
 * Created by josecullen on 17/07/16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'game-menu',
  templateUrl: 'menu.component.html',
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_ICON_DIRECTIVES

  ]

})
export class Menu {


  constructor(private router: Router){

  }


  gotoSelectGame(){
    let link = ['/select-game'];
    this.router.navigate(link);2
  }


}
