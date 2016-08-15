import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game/select-game.component'
import { GameMatesAppComponent } from './select-game/game-view/game-view.component'

import { GameModule } from '../game/game.module'
import { LoadingLevelComponent } from '../game/level-load/level-load.component'
import { PlayingLevelComponent } from '../game/level-play/level-play.component'


import { MdButtonModule } from '@angular2-material/button';
import { MatesCommonsModule } from '../mates-commons/mates-commons.module';




@NgModule({
  imports:      [ 
  	BrowserModule, 
  	menuRouting, 
  	MdButtonModule, 
  	MatesCommonsModule, 
  	GameModule 
  ],
  declarations: [ 
  	MenuComponent, 
  	SelectGameComponent,
    GameMatesAppComponent,
    // LoadingLevelComponent,
    // PlayingLevelComponent
  ],

})
export class MenuModule { }
