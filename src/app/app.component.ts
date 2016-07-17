/**
 * Created by josecullen on 17/07/16.
 */
import { Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';

import { GameMatesAppComponent } from './views/game-mates.component';


@Component({
  moduleId: module.id,
  selector: 'mates-app',
  template: '<game-mates-app></game-mates-app>',
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_ICON_DIRECTIVES, GameMatesAppComponent],
  providers: [HTTP_PROVIDERS ],
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


