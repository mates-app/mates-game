import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './models'
import {MdIconRegistry} from "@angular/material";


@Component({
  template: `
<div class="centered-container">
    <md-card>
      <md-card-subtitle></md-card-subtitle>
      <md-card-title>Ingreso a Mates</md-card-title>   
        <md-card-content>
          

          <md-tab-group (selectChange)="onTabChange($event)">
            <md-tab>
              <template md-tab-label>Ingresá</template>
              <template md-tab-content>
                <md-input 
                  placeholder="usuario" maxlength="20" 
                  class="full-width"    required
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
              </template>
            </md-tab>
            <md-tab>
              <template md-tab-label>Registrate</template>
              <template md-tab-content>
                <md-input 
                  placeholder="usuario" maxlength="20" 
                  class="full-width"    required
                  [(ngModel)]="user.username"
                  (change)="userValid()">
                  <span md-suffix>
                    <md-icon *ngIf="usernameValid" style="color:#AED581;">check_circle</md-icon>
                    <md-icon *ngIf="!usernameValid" style="color:#921919;">error</md-icon>
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
              </template>
            </md-tab>
          </md-tab-group>

          
        </md-card-content>
        <md-card-actions style="text-align:center">
          <button 
            md-raised-button 
            class="width-90"
            (click)="onSubmit()"
            [disabled]="!formIsValid()">ENTRAR</button>
        </md-card-actions>
    </md-card>
</div>
    `,
    styleUrls: [ 'styles.css' ],
    viewProviders: [MdIconRegistry]
})
export class LoginComponent {
  user:User = new User()
  tabIndex:number = 0
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

  onSubmit(){
    this.tabIndex === 0 ? this.login() : this.signUp()
  }

  onTabChange(tab){
    this.tabIndex = tab.index
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
  
  private userValid():boolean{
    let result:boolean = 
    this.user.username.length >= 8
    && this.user.username.length <= 20


    if(result) 
      this.authService.exists(this.user.username).subscribe(res => {
        console.log(res)
        this.tabIndex === 0 
          ? result = res
          : result = !res

        if(!result)
          this.tabIndex === 0 
            ? this.messages.userMessage = "El usuario no existe"
            : this.messages.userMessage = "El usuario ya existe"
        else this.messages.userMessage = "" 
        this.usernameValid = result
      })
    else 
      this.messages.userMessage = "El usuario debe tener entre 8 y 20 caracteres"      
    
    this.usernameValid = result
    return result
  }

}
