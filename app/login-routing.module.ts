import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule }   from '@angular/router';
import { AuthGuard }      from './auth-guard.service';
import { AuthService }    from './auth.service';
import { LoginComponent } from './login.component';
import { LoginForm } from './login-form.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: LoginComponent}
    ])
  ],
  declarations:[
    LoginComponent,
    LoginForm
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
