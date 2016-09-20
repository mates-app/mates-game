import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { menuRouting } from './menu.routing'
import { MenuComponent } from './menu.component'
import { SelectGameComponent } from './select-game/select-game.component'
import { MdButtonModule } from '@angular2-material/button';

import { MdToolbarModule } from '@angular2-material/toolbar'
import { MdIconModule } from '@angular2-material/icon'
import { MdListModule } from '@angular2-material/list'
import { MdInputModule } from '@angular2-material/input'
import { MatesCommonsModule } from '../mates-commons/mates-commons.module';
import { ChoiceGameModule} from "torbi.ng2-choices-game/components";
import { PublicGameMenu, PublicGameMenuList} from "./menu-options/public-game/public-game-menu.component";
import { SingleGameSelection} from "./menu-options/single-game/single-game-selection.component";
import { MultiplayerGameSelection, MultiplayerGameSelectionList } from './menu-options/multiplayer-game/multiplayer-game.component'
import { CreateMultiplayerGame} from './menu-options/create-multiplayer-game/create-multiplayer-game.component'
import { MenuOptionsComponent} from './menu-options/menu-options.component'

@NgModule({
  imports:      [
  	BrowserModule,
    HttpModule,
    JsonpModule,
  	MatesCommonsModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdListModule,
    MdInputModule,
    ChoiceGameModule,
    FormsModule,
    menuRouting
  ],
  declarations: [
  	MenuComponent,
    MenuOptionsComponent,
  	SelectGameComponent,
    PublicGameMenu,
    SingleGameSelection,
    MultiplayerGameSelection,
    CreateMultiplayerGame,
    PublicGameMenuList,
    MultiplayerGameSelectionList
  ],

})
export class MenuModule { }
