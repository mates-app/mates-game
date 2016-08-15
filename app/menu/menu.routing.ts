import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game/select-game.component'
import { MenuOptionsComponent } from './menu-options.component'
import { GameMatesAppComponent } from './select-game/game-view/game-view.component'
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
      path : 'game',
      component : GameMatesAppComponent
    },{
	  path: '',
	  component: MenuOptionsComponent
	}]
  }
];

export const menuRouting = RouterModule.forChild(menuRoutes);