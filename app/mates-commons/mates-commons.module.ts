import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatesServices } from './mates-game.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [  ],
  providers : [ MatesServices ]
})
export class MatesCommonsModule { }