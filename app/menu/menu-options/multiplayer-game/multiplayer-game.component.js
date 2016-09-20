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
// <md-button class="md-fab md-mini" style="cursor:pointer" (click)="menu()"></md-button>
var icon_1 = require("@angular2-material/icon");
var MultiplayerGameSelection = (function () {
    function MultiplayerGameSelection() {
    }
    MultiplayerGameSelection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'multiplayer-game-selection',
            template: "\n<router-outlet></router-outlet>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MultiplayerGameSelection);
    return MultiplayerGameSelection;
}());
exports.MultiplayerGameSelection = MultiplayerGameSelection;
var MultiplayerGameSelectionList = (function () {
    function MultiplayerGameSelectionList(matesServices, mdIconRegistry) {
        this.matesServices = matesServices;
        this.mdIconRegistry = mdIconRegistry;
        this.gameMatches = new Array();
        mdIconRegistry
            .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }
    MultiplayerGameSelectionList.prototype.ngOnInit = function () {
        var _this = this;
        this
            .matesServices
            .getPublicMatches('multi-player')
            .subscribe(function (gameMatches) {
            console.log(gameMatches);
            _this.gameMatches = gameMatches;
        });
    };
    MultiplayerGameSelectionList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'multiplayer-game-selection-list',
            template: "\n<div *ngIf=\"!isStarted\">\n<md-toolbar>\n    <span class=\"title\">Selecciona un juego</span>\n    \n\t    <md-icon class=\"md-24\" style=\"color:#921919;\">keyboard_arrow_left</md-icon>\n\n</md-toolbar>\n<a md-raised-button routerLink=\"create\">Create Game</a>\n<button md-raised-button (click)=\"play(gameConfig._id)\" *ngFor=\"let gameMatch of gameMatches\">{{gameMatch.name}}</button>\n\n</div>\n\n\n",
            viewProviders: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [mates_game_service_1.MatesServices, icon_1.MdIconRegistry])
    ], MultiplayerGameSelectionList);
    return MultiplayerGameSelectionList;
}());
exports.MultiplayerGameSelectionList = MultiplayerGameSelectionList;
//# sourceMappingURL=multiplayer-game.component.js.map