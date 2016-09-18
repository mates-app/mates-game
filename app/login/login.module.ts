import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { loginRouting }        from './login.routing';
import { LoginComponent } from './login.component'
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule  } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
// import { MdToolbarModule  } from '@angular2-material/toolbar';
//   MdToolbarModule
@NgModule({
  imports:      [ 
    BrowserModule, 
    loginRouting, 
    MdButtonModule, 
    MdCardModule, 
    MdInputModule 
   
  ],
  declarations: [ LoginComponent, SignInComponent, SignUpComponent ]
})
export class LoginModule { }
