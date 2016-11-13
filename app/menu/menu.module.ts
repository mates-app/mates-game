import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common'

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'

import { MaterialModule } from '@angular/material';

import { MatesCommonsModule } from '../mates-commons/mates-commons.module';
import { ChoiceGameModule} from "torbi.ng2-choices-game/components";
import { SingleGameSelection} from "./menu-options/single-game/single-game-selection.component";
import { MultiplayerGameSelection, MultiplayerGameSelectionList } from './menu-options/multiplayer-game/multiplayer-game.component'
import { CreateMultiplayerGame} from './menu-options/create-multiplayer-game/create-multiplayer-game.component'
import { MultiplayerRoom} from './menu-options/multiplayer-room/multiplayer-room.component'
import { MenuOptionsComponent, MenuOptionsOutlet} from './menu-options/menu-options.component'
import { CommonComponents } from '../mates-commons/common-components/common-components.module'
import { MenuCommonsModule } from '../mates-commons/menu-commons/menu-commons.module'

@NgModule({
  imports:      [
    CommonModule,
    HttpModule,
    JsonpModule,
  	MatesCommonsModule,
    MaterialModule.forRoot(),
    ChoiceGameModule,
    FormsModule,
    menuRouting,
    CommonComponents,
    MenuCommonsModule
    
  ],
  declarations: [
  	MenuComponent,
    MenuOptionsOutlet,
    MenuOptionsComponent,
    SingleGameSelection,
    MultiplayerGameSelection,
    CreateMultiplayerGame,
    MultiplayerGameSelectionList,
    MultiplayerRoom
    
  ]
})
export class MenuModule { }
