import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRouting: Routes = [
	{
		path: 'menu',
		loadChildren: 'app/menu/menu.module#MenuModule',
		// canLoad: [AuthGuard]
	},
	{
		path: '',
		redirectTo: '/menu',
		pathMatch: 'full'
	}
];


const appRoutes : Routes = [
	...appRouting

]

export const appRoutingProviders: any[] = [
	// authProviders
]


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
