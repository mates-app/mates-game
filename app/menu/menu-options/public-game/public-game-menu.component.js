/**
 * Created by josecullen on 11/09/16.
 */
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var icon_1 = require("@angular2-material/icon");
var PublicGameMenu = (function () {
    function PublicGameMenu(router) {
        this.router = router;
    }
    PublicGameMenu.prototype.menu = function () {
        console.log('click');
        var link = ['/login'];
        this.router.navigate(link);
    };
    PublicGameMenu = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'public-game-menu',
            template: "\n  <md-toolbar>\n    <span class=\"title\">Selecciona un juego</span>\n    <a md-button class=\"md-fab md-mini\" style=\"cursor:pointer\" (click)=\"menu()\">\n\t    <md-icon class=\"md-24\" style=\"color:#921919;\">keyboard_arrow_left</md-icon>\n    </a>\n  </md-toolbar>\n\n<router-outlet></router-outlet>\n",
            viewProviders: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PublicGameMenu);
    return PublicGameMenu;
}());
exports.PublicGameMenu = PublicGameMenu;
var PublicGameMenuList = (function () {
    function PublicGameMenuList() {
    }
    PublicGameMenuList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'public-game-menu',
            template: "\n<a md-raised-button routerLink=\"single\">Single Game</a>\n<a md-raised-button routerLink=\"multiplayer\">Multiplayer Game</a>\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PublicGameMenuList);
    return PublicGameMenuList;
}());
exports.PublicGameMenuList = PublicGameMenuList;
//# sourceMappingURL=public-game-menu.component.js.map