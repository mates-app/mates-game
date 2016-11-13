import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { MenuModule } from './menu/menu.module'

import { LoginComponent }       from './login.component';
import { LoginRoutingModule }   from './login-routing.module';


@NgModule({
  imports:      [
    MaterialModule.forRoot(),
  	BrowserModule,
  	routing,
  	MenuModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
