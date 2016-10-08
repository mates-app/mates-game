import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './models'


@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <input type="text" [(ngModel)]="user.username">

    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="signUp()">SignUp</button>

      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
    
    `
})
export class LoginComponent {
  user:User = new User()

  message: string;
  
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  signUp(){
    this.authService.signup(this.user).subscribe(
      isSignUpOK => {
        if(isSignUpOK){
          this.login()
        }else{
          console.log('signup error')
        }
      }
    )
  }
  
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.user).subscribe(isValid => {
      this.setMessage();
      console.log('isValid',isValid)
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/menu';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  
  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
