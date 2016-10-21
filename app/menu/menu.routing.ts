import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component'
import { MenuOptionsComponent, MenuOptionsOutlet } from './menu-options/menu-options.component'
import {SingleGameSelection} from "./menu-options/single-game/single-game-selection.component";
import {MultiplayerGameSelection, MultiplayerGameSelectionList} from './menu-options/multiplayer-game/multiplayer-game.component'
import {CreateMultiplayerGame} from    './menu-options/create-multiplayer-game/create-multiplayer-game.component'
import {MultiplayerRoom} from    './menu-options/multiplayer-room/multiplayer-room.component'

import { AuthGuard } from '../auth-guard.service'

const menuRoutings: Routes = [
  {
	  path: '',
    component: MenuComponent,
    children: [{
        path: 'menu',
        component: MenuOptionsOutlet,
        children: [
          { path : '', component: MenuOptionsComponent},
          { path : 'singleplayer',  component : SingleGameSelection },
          { path : 'multiplayer',  
            component : MultiplayerGameSelection,
            children: [
              { path : '',  component : MultiplayerGameSelectionList },
              { path : 'create',  component : CreateMultiplayerGame },
              { path : 'room',  component : MultiplayerRoom }
            ]
          }          
        ]
      }
	]
  }
];


export const menuRouting : ModuleWithProviders = RouterModule.forChild(menuRoutings);
