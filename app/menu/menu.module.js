"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var menu_routing_1 = require('./menu.routing');
var menu_component_1 = require('./menu.component');
var select_game_component_1 = require('./select-game/select-game.component');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var mates_commons_module_1 = require('../mates-commons/mates-commons.module');
var components_1 = require("torbi.ng2-choices-game/components");
var public_game_menu_component_1 = require("./menu-options/public-game/public-game-menu.component");
var single_game_selection_component_1 = require("./menu-options/single-game/single-game-selection.component");
var multiplayer_game_component_1 = require('./menu-options/multiplayer-game/multiplayer-game.component');
var create_multiplayer_game_component_1 = require('./menu-options/create-multiplayer-game/create-multiplayer-game.component');
var multiplayer_room_component_1 = require('./menu-options/multiplayer-room/multiplayer-room.component');
var menu_options_component_1 = require('./menu-options/menu-options.component');
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                mates_commons_module_1.MatesCommonsModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                toolbar_1.MdToolbarModule,
                list_1.MdListModule,
                input_1.MdInputModule,
                card_1.MdCardModule,
                components_1.ChoiceGameModule,
                forms_1.FormsModule,
                menu_routing_1.menuRouting,
            ],
            declarations: [
                menu_component_1.MenuComponent,
                menu_options_component_1.MenuOptionsComponent,
                select_game_component_1.SelectGameComponent,
                public_game_menu_component_1.PublicGameMenu,
                single_game_selection_component_1.SingleGameSelection,
                multiplayer_game_component_1.MultiplayerGameSelection,
                create_multiplayer_game_component_1.CreateMultiplayerGame,
                public_game_menu_component_1.PublicGameMenuList,
                multiplayer_game_component_1.MultiplayerGameSelectionList,
                multiplayer_room_component_1.MultiplayerRoom
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map