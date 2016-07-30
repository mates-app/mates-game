/**
 * Created by josecullen on 17/07/16.
 */

import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES,MdIconRegistry,MdIcon} from '@angular2-material/icon';
import { Router } from '@angular/router';
import { MatesServices} from '../../services/mates.services'
import { CurrentGameInstance} from '../../services/current-game.service'
import {GameInstance} from '../../models'


@Component({
  moduleId: module.id,
  selector: 'select-game',
  templateUrl: 'select-game.component.html',
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_ICON_DIRECTIVES
  ],
  providers: [MatesServices]

})
export class SelectGame implements OnInit{
  gameInstances:Array<GameInstance>;

  constructor(private router: Router, private matesServices: MatesServices, private currentGameInstance:CurrentGameInstance){

  }

  ngOnInit(){
    this.gameInstances = this.matesServices.getGameInstances();
  }

  play(gameInstance:GameInstance){
    this.currentGameInstance.setCurrentInstance(gameInstance);
    let link = ['/game-playing'];
    this.router.navigate(link);
  }

}
