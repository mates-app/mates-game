"use strict";
var router_1 = require('@angular/router');
var menu_component_1 = require('./menu.component');
var select_game_component_1 = require('./select-game/select-game.component');
var menu_options_component_1 = require('./menu-options/menu-options.component');
// import {GameViewComponent} from "torbi.ng2-choices-game/lib/game-view/game-view.component";
// import { GameMatesAppComponent } from './select-game/game-view/game-view.component'
// import { AuthGuard } from '../auth-guard.service'
var menuRoutes = [
    {
        path: '',
        component: menu_component_1.MenuComponent,
        children: [{
                path: 'select-game',
                component: select_game_component_1.SelectGameComponent,
            }, {
                path: '',
                component: menu_options_component_1.MenuOptionsComponent
            }]
    }
];
exports.menuRouting = router_1.RouterModule.forChild(menuRoutes);
//# sourceMappingURL=menu.routing.js.map