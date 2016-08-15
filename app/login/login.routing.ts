import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';

const loginRoutes: Routes = [
  {
	  path: 'login',
    component: LoginComponent,
    children: [{
  		  path: 'signup',
      	component: SignUpComponent
      },{
  		  path: 'signin',
      	component: SignInComponent
      },{
        path: '',
        component: SignInComponent
    }
    ]
  }
];


export const loginRouting = RouterModule.forChild(loginRoutes);
