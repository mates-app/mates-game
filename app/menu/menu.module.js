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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var menu_routing_1 = require('./menu.routing');
var menu_component_1 = require('./menu.component');
var select_game_component_1 = require('./select-game/select-game.component');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var list_1 = require('@angular2-material/list');
var mates_commons_module_1 = require('../mates-commons/mates-commons.module');
var components_1 = require("torbi.ng2-choices-game/components");
var public_game_menu_component_1 = require("./menu-options/public-game/public-game-menu.component");
var single_game_selection_component_1 = require("./menu-options/single-game/single-game-selection.component");
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                menu_routing_1.menuRouting,
                http_1.HttpModule,
                http_1.JsonpModule,
                mates_commons_module_1.MatesCommonsModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                toolbar_1.MdToolbarModule,
                list_1.MdListModule,
                components_1.ChoiceGameModule
            ],
            declarations: [
                menu_component_1.MenuComponent,
                select_game_component_1.SelectGameComponent,
                public_game_menu_component_1.PublicGameMenu,
                single_game_selection_component_1.SingleGameSelection
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map