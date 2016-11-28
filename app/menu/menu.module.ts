import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common'

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'
import { OutletComponent } from './outlet.component'

import { MaterialModule } from '@angular/material';

import { MatesCommonsModule } from '../mates-commons/mates-commons.module';
import { ChoiceGameModule} from "torbi.ng2-choices-game/components";
import { GameMatchEditor} from './game-match-editor/game-match-editor'
import { MultiplayerRoom} from './menu-options/multiplayer-room/multiplayer-room.component'
import { CommonComponents } from '../mates-commons/common-components/common-components.module'
import { MenuCommonsModule } from '../mates-commons/menu-commons/menu-commons.module'
import { YourGamesView} from './your-games/your-games.view'
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
    OutletComponent,
    GameMatchEditor,
    MultiplayerRoom,
    YourGamesView
  ]
})
export class MenuModule { }
