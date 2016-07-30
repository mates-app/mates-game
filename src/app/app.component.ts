/**
 * Created by josecullen on 17/07/16.
 */
import { Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { CurrentGameInstance } from './services/current-game.service'

@Component({
  moduleId: module.id,
  selector: 'mates-app',
  template: '<router-outlet></router-outlet>',
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_ICON_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS,CurrentGameInstance ],
  viewProviders: [MdIconRegistry]

})
  export class AppComponent {

    constructor(
      private mdIconRegistry:MdIconRegistry
    ){

      mdIconRegistry
        .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');

    };



  }


