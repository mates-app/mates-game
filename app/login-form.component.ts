import { Component, ViewChildren, ViewChild, AfterViewInit, 
    OnInit, Input, Output, EventEmitter }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './models'
import {MdIconRegistry, MdInput} from "@angular/material";


@Component({
    selector: 'login-form',
    template: `
<div>
    <md-input 
        #username 
        placeholder="usuario" 
        maxlength="20" 
        class="full-width"    
        required
        [(ngModel)]="user.username"
        (change)="userValid()">
        <span md-suffix>
        <md-icon *ngIf="usernameValid" style="color:#AED581;">check_circle</md-icon>
        <md-icon *ngIf="!usernameValid && usernameValid != undefined" style="color:#921919;">error</md-icon>
        </span>
        <md-hint align="end" style="color:#921919;">{{messages.userMessage}}</md-hint>
    </md-input>
    <br>
    <md-input 
        placeholder="password" maxlength="20" 
        type="password" class="full-width"
        required
        [(ngModel)]="user.password">
    </md-input>
</div>
    `,
    styleUrls: [ 'styles.css' ],
    viewProviders: [MdIconRegistry]
})
export class LoginForm{
  @ViewChild('username') userInput:MdInput;
  @Input() user:User = new User()
  @Input() type:string;
  @Output() userChange:EventEmitter<User> = new EventEmitter<User>()
  @Output() isValid:EventEmitter<boolean> = new EventEmitter<boolean>()
  usernameValid:boolean = undefined

  messages:any = {
    userMessage: "",
    passMessage: ""
  }

  constructor(
    public  authService   : AuthService, 
    public  router        : Router,
    private mdIconRegistry:MdIconRegistry) {
      
    mdIconRegistry
      .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
      .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
      .registerFontClassAlias('fontawesome', 'fa');
  }
  
  formIsValid(){
    return this.usernameValid
        && this.user.password.length >= 8
        && this.user.password.length <= 20
  }

 
  private userValid():boolean{
    let result:boolean = this.user.username.length >= 6
                         && this.user.username.length <= 20

    if(result) 
      this.authService
          .exists(this.user.username)
          .subscribe(res => {

        this.type === 'login' 
          ? result = res
          : result = !res

        if(!result)
            this.type === 'login' 
                ? this.messages.userMessage = "El usuario no existe"
                : this.messages.userMessage = "El usuario ya existe"
        else 
            this.messages.userMessage = "" 
        this.usernameValid = result
      })
    else 
      this.messages.userMessage = "El usuario debe tener entre 6 y 20 caracteres"      
    
    this.usernameValid = result
    this.isValid.emit(result)
    return result
  }

}
