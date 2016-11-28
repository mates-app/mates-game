import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component'
import { OutletComponent } from './outlet.component'
import { GameMatchEditor } from './game-match-editor/game-match-editor'
import { YourGamesView } from './your-games/your-games.view'

import { AuthGuard } from '../auth-guard.service'

const menuRoutings: Routes = [
  {
	  path: '',
    component: OutletComponent,
    children: [{
        path: 'menu',
        canActivate: [AuthGuard],
        component: OutletComponent,        
        children: [{ 
          path: '',
          canActivate: [AuthGuard],
          component: MenuComponent,
        },{
          path: 'your-games',
          canActivate: [AuthGuard],
          component: OutletComponent,  
          children: [{
            path: '',
            component: YourGamesView
          },{
            path: 'create',
            component: GameMatchEditor
          },{
            path: ':id',
            component: GameMatchEditor
          }]
        }]
      }
	]
  }
];


export const menuRouting : ModuleWithProviders = RouterModule.forChild(menuRoutings);
