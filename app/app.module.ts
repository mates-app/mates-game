import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { LoginModule } from './login/login.module'
import { MenuModule } from './menu/menu.module'
import { GameModule } from './game/game.module'


@NgModule({
  imports:      [ 
  	BrowserModule, 
  	routing, 
  	LoginModule, 
  	MenuModule, 
  	GameModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
