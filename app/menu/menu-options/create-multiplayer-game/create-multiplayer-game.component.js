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
var components_1 = require("torbi.ng2-choices-game/components");
var mates_game_service_1 = require("../../../mates-commons/mates-game.service");
var router_1 = require("@angular/router");
var CreateMultiplayerGame = (function () {
    function CreateMultiplayerGame(matesServices, router, gameControl, route) {
        this.matesServices = matesServices;
        this.router = router;
        this.gameControl = gameControl;
        this.route = route;
        this.isStarted = false;
    }
    CreateMultiplayerGame.prototype.menu = function () {
        this.router.navigate(['../../', {}], { relativeTo: this.route });
    };
    CreateMultiplayerGame.prototype.ngOnInit = function () {
        var _this = this;
        this.matesServices.getAllPublicGameConfigs().subscribe(function (gameConfigs) { return _this.gameConfigs = gameConfigs; }, function (error) { return console.log(error); });
    };
    CreateMultiplayerGame.prototype.create = function (gameId) {
        var _this = this;
        console.log(gameId);
        this
            .matesServices
            .createMatch(gameId, true)
            .subscribe(function (gameMatch) { return _this.router.navigate(['../../', {}], { relativeTo: _this.route }); });
    };
    CreateMultiplayerGame = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-multiplayer-game',
            templateUrl: 'create-multiplayer-game.component.html',
            styleUrls: ['create-multiplayer-game.component.css']
        }), 
        __metadata('design:paramtypes', [mates_game_service_1.MatesServices, router_1.Router, components_1.GameControl, router_1.ActivatedRoute])
    ], CreateMultiplayerGame);
    return CreateMultiplayerGame;
}());
exports.CreateMultiplayerGame = CreateMultiplayerGame;
//# sourceMappingURL=create-multiplayer-game.component.js.map