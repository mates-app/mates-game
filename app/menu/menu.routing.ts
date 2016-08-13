import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game.component'
import { MenuOptionsComponent } from './menu-options.component'
// import { AuthGuard } from '../auth-guard.service'


const menuRoutes: Routes = [
  {
	path: '',
    component: MenuComponent,
    children: [{
      path : 'select-game',
      component : SelectGameComponent,
      // canActivate: [AuthGuard]
    },{
	  path: '',
	  component: MenuOptionsComponent
	}]
  }
];

export const menuRouting = RouterModule.forChild(menuRoutes);
