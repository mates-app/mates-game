import { Component,TemplateRef, ViewChildren, ViewChild, AfterViewInit, OnInit }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './models'
import {MdIconRegistry, MdInput} from "@angular/material";
import { LoginForm } from './login-form.component'

@Component({
  moduleId: module.id, 
  template: `
<div class="centered-container">
  <form>
      <md-card>
        <md-card-subtitle></md-card-subtitle>
        <md-card-title>Ingreso a Mates</md-card-title>   
          <md-card-content>
            <login-form 
              [(user)]="user" 
              (isValid)="onValidation($event)"
              [type]="type"
              #loginform>
            </login-form>
          </md-card-content>
          <md-card-actions style="text-align:center">
            
          <button 
              type="submit"
              md-raised-button 
              class="width-90"
              (click)="onSubmit()"
              [disabled]="!valid">INGRESAR
          </button>

          <a md-button 
              *ngIf="type === 'login'"
              routerLink="/register">Registrate Acá
          </a>
          <a md-button 
              *ngIf="type === 'register'"
              routerLink="/login">Volver a Login
          </a>
          </md-card-actions>
      </md-card>
  </form>
</div>
    `,
    styleUrls: [ '../styles.css' ],
    viewProviders: [MdIconRegistry]
})
export class LoginComponent implements AfterViewInit{
  @ViewChild('loginform')    loginForm:LoginForm;
  user:User     = new User()
  type:string   = 'login'
  valid:boolean = false


  constructor(
    public  authService   : AuthService, 
    public  router        : Router,
    private mdIconRegistry:MdIconRegistry) {
      router.routerState.snapshot.url.includes('login')
        ? this.type = 'login'
        : this.type = 'register'
      mdIconRegistry
        .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');
  }

  ngAfterViewInit(){
    this.loginForm.userInput.focus();
  }

  onSubmit(){
    this.type === 'login' 
      ? this.login() 
      : this.signUp()
  }
  
  onValidation(valid:boolean){
    this.valid = valid
  }
 
  signUp(){
    this.authService
        .signup(this.user)
        .subscribe(
          isSignUpOK => isSignUpOK ? this.login() : console.log('signup error')      
        )
  }
  
  login() {
    this.authService.login(this.user).subscribe(isValid => {
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/menu';
        this.router.navigate([redirect]);
      }
    });
  }
  

}
