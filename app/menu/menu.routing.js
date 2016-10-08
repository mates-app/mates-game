"use strict";
var router_1 = require('@angular/router');
var menu_component_1 = require('./menu.component');
var select_game_component_1 = require('./select-game/select-game.component');
var menu_options_component_1 = require('./menu-options/menu-options.component');
var public_game_menu_component_1 = require("./menu-options/public-game/public-game-menu.component");
var single_game_selection_component_1 = require("./menu-options/single-game/single-game-selection.component");
var multiplayer_game_component_1 = require('./menu-options/multiplayer-game/multiplayer-game.component');
var create_multiplayer_game_component_1 = require('./menu-options/create-multiplayer-game/create-multiplayer-game.component');
var multiplayer_room_component_1 = require('./menu-options/multiplayer-room/multiplayer-room.component');
var auth_guard_service_1 = require('../auth-guard.service');
var menuRoutings = [
    {
        path: '',
        component: menu_component_1.MenuComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                // canActivateChild: [AuthGuard],
                children: [
                    { path: 'select-game', component: select_game_component_1.SelectGameComponent },
                    { path: 'public-game', component: public_game_menu_component_1.PublicGameMenu,
                        children: [
                            { path: '', component: public_game_menu_component_1.PublicGameMenuList },
                            { path: 'single', component: single_game_selection_component_1.SingleGameSelection },
                            { path: 'multiplayer', component: multiplayer_game_component_1.MultiplayerGameSelection,
                                children: [
                                    { path: '', component: multiplayer_game_component_1.MultiplayerGameSelectionList },
                                    { path: 'create', component: create_multiplayer_game_component_1.CreateMultiplayerGame },
                                    { path: 'room', component: multiplayer_room_component_1.MultiplayerRoom }
                                ]
                            },
                        ] },
                    { path: '', component: menu_options_component_1.MenuOptionsComponent }
                ]
            }
        ]
    }
];
exports.menuRouting = router_1.RouterModule.forChild(menuRoutings);
//# sourceMappingURL=menu.routing.js.map