import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game/select-game.component'
import { MenuOptionsComponent } from './menu-options/menu-options.component'
import {PublicGameMenu, PublicGameMenuList} from "./menu-options/public-game/public-game-menu.component";
import {SingleGameSelection} from "./menu-options/single-game/single-game-selection.component";
import {MultiplayerGameSelection, MultiplayerGameSelectionList} from './menu-options/multiplayer-game/multiplayer-game.component'
import {CreateMultiplayerGame} from    './menu-options/create-multiplayer-game/create-multiplayer-game.component'
import {MultiplayerRoom} from    './menu-options/multiplayer-room/multiplayer-room.component'

const menuRoutes: Routes = [
  {
	  path: 'menu',
    component: MenuComponent,
    children: [
      { path : 'select-game',   component : SelectGameComponent },
      { path : 'public-game',   component : PublicGameMenu,
        children : [
          { path : '', component: PublicGameMenuList},
          { path : 'single',  component : SingleGameSelection },
          { path : 'multiplayer',  component : MultiplayerGameSelection,
            children: [
              { path : '',  component : MultiplayerGameSelectionList },
              { path : 'create',  component : CreateMultiplayerGame },
              { path : 'room',  component : MultiplayerRoom }
            ] },
          
        ]},
      
      { path: '',   component: MenuOptionsComponent }
	]
  }
];



export const menuRouting = RouterModule.forChild(menuRoutes);
