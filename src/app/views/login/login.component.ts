/**
 * Created by josecullen on 17/07/16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';


import {MathJaxDirective} from '../../directives/mathjax.directive';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    FORM_DIRECTIVES
  ]

})
export class Login {


  constructor(private router: Router){

  }

  gotoMenu() {
    let link = ['/menu'];
    this.router.navigate(link);
  }

}
