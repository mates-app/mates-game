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
var game_view_component_1 = require('./select-game/game-view/game-view.component');
var game_over_component_1 = require('./select-game/game-over/game-over.component');
var game_module_1 = require('../game/game.module');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var mates_commons_module_1 = require('../mates-commons/mates-commons.module');
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
                game_module_1.GameModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                toolbar_1.MdToolbarModule,
            ],
            declarations: [
                menu_component_1.MenuComponent,
                select_game_component_1.SelectGameComponent,
                game_view_component_1.GameMatesAppComponent,
                game_over_component_1.GameOverComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map