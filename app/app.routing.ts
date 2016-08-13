import { Routes, RouterModule } from '@angular/router';
import { loginRouting } from './login/login.routing'

const appRoutes: Routes = [
	{
		path: 'menu',
		loadChildren: 'app/menu/menu.module#MenuModule'
	},
	{
	    path: '',
	    redirectTo: '/login',
	    pathMatch: 'full'
  	}
];


export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
