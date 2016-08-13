import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { loginRouting }        from './login.routing';
import { LoginComponent } from './login.component'
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';

@NgModule({
  imports:      [ BrowserModule, loginRouting ],
  declarations: [ LoginComponent, SignInComponent, SignUpComponent ]
})
export class LoginModule { }
