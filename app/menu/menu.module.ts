import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game/select-game.component'

import { GameOverComponent } from './select-game/game-over/game-over.component'
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar'
import { MdIconModule } from '@angular2-material/icon'
import { MdListModule } from '@angular2-material/list'
import { MatesCommonsModule } from '../mates-commons/mates-commons.module';
import {ChoiceGameModule} from "torbi.ng2-choices-game/components";

@NgModule({
  imports:      [
  	BrowserModule,
  	menuRouting,
    HttpModule,
    JsonpModule,
  	MatesCommonsModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdListModule,
    ChoiceGameModule
  ],
  declarations: [
  	MenuComponent,
  	SelectGameComponent,
    GameOverComponent
  ],

})
export class MenuModule { }
