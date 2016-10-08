import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatesServices } from './mates-game.service'
import { MatesExchangeServices } from './mates-exchange.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [  ],
  providers : [ MatesServices, MatesExchangeServices ]
})
export class MatesCommonsModule { }
