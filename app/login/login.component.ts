/**
 * Created by josecullen on 17/07/16.
 */
import { Component} from '@angular/core';

@Component({
  selector: 'login',
  template: `
  	  <h1>Login</h1>
      <a routerLink="">Signin</a>
      <a routerLink="signup">Signup</a>
      <router-outlet></router-outlet>
  `
})
export class LoginComponent {}


