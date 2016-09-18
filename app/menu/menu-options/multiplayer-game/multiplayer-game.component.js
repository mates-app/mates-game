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
var mates_game_service_1 = require("../../../mates-commons/mates-game.service");
var MultiplayerGameSelection = (function () {
    function MultiplayerGameSelection(matesServices) {
        this.matesServices = matesServices;
        this.gameMatches = new Array();
    }
    MultiplayerGameSelection.prototype.ngOnInit = function () {
        var _this = this;
        this
            .matesServices
            .getPublicMatches('multi-player')
            .subscribe(function (gameMatches) {
            console.log(gameMatches);
            _this.gameMatches = gameMatches;
        });
    };
    MultiplayerGameSelection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'public-game-menu',
            template: "\n\n<div *ngIf=\"!isStarted\">\n<md-toolbar>\n    <span class=\"title\">Selecciona un juego</span>\n\n    <md-button class=\"md-fab md-mini\" style=\"cursor:pointer\" (click)=\"menu()\">\n\t    <md-icon class=\"md-24\" style=\"color:#921919;\">keyboard_arrow_left</md-icon>\n    </md-button>\n    \n\n</md-toolbar>\n<a md-raised-button routerLink=\"create\">Create Game</a>\n<button md-raised-button (click)=\"play(gameConfig._id)\" *ngFor=\"let gameMatch of gameMatches\">{{gameMatch._id}}</button>\n\n</div>\n\n\n\n    \n\n"
        }), 
        __metadata('design:paramtypes', [mates_game_service_1.MatesServices])
    ], MultiplayerGameSelection);
    return MultiplayerGameSelection;
}());
exports.MultiplayerGameSelection = MultiplayerGameSelection;
//# sourceMappingURL=multiplayer-game.component.js.map