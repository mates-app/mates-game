import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'
import { SelectGameComponent} from './select-game.component'

@NgModule({
  imports:      [ BrowserModule, menuRouting ],
  declarations: [ MenuComponent, SelectGameComponent ]
})
export class MenuModule { }
