import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game/select-game.component'
import { GameMatesAppComponent } from './select-game/game-view/game-view.component'

import { GameModule } from '../game/game.module'

import { MdButtonModule } from '@angular2-material/button';
import { MatesCommonsModule } from '../mates-commons/mates-commons.module';




@NgModule({
  imports:      [ 
  	BrowserModule, 
  	menuRouting, 
    HttpModule,
    JsonpModule,
  	MdButtonModule, 
  	MatesCommonsModule, 
  	GameModule 
  ],
  declarations: [ 
  	MenuComponent, 
  	SelectGameComponent,
    GameMatesAppComponent,
  ],

})
export class MenuModule { }
