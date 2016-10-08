import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { MdInputModule} from '@angular2-material/input'
import { MdCardModule} from '@angular2-material/card'
import { MdButtonModule} from '@angular2-material/button'

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { MenuModule } from './menu/menu.module'

import { LoginComponent }       from './login.component';
import { LoginRoutingModule }   from './login-routing.module';


@NgModule({
  imports:      [
  	BrowserModule,
  	routing,
  	MenuModule,
    FormsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
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
