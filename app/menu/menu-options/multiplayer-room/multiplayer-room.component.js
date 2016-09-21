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
var mates_exchange_service_1 = require("../../../mates-commons/mates-exchange.service");
var components_1 = require("torbi.ng2-choices-game/components");
var MultiplayerRoom = (function () {
    function MultiplayerRoom(gameControl, matesExchange, matesServices) {
        this.gameControl = gameControl;
        this.matesExchange = matesExchange;
        this.matesServices = matesServices;
    }
    MultiplayerRoom.prototype.ngOnInit = function () {
        var _this = this;
        this.gameMatch = this.matesExchange.getSelectedGameMatch();
        this.matesServices
            .getGameInstance(this.gameMatch.gameId)
            .subscribe(function (gameInstance) { return _this.gameControl.setGameInstance(gameInstance); });
    };
    MultiplayerRoom.prototype.start = function () {
        var _this = this;
        this.isStarted = true;
        this.gameControl.start();
        this.gameControl.onScoreChange()
            .subscribe(function (score) {
            _this.matesServices.pushScore(_this.gameControl.getGameInstance().gameId, "57bccba3ee005b59204559a4", score.allScore());
            console.log('score', score.allScore());
        });
    };
    MultiplayerRoom = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'multiplayer-room',
            template: "\n  <div *ngIf=\"!isStarted\">\n    <h2>{{gameMatch.name}}</h2>\n    <a md-button (click)=\"start()\">Iniciar</a>\n  </div>\n  <game-view>\n    <first-level-body>\n        <h1>Disfrut\u00E1 el juego!</h1>\n    </first-level-body>\n\n    <level-load-body>\n        <effectivity-content [isGameOver]=\"false\"></effectivity-content>\n    </level-load-body>\n\n    <game-over-body>\n        <effectivity-content [isGameOver]=\"true\"></effectivity-content>\n    </game-over-body>\n\n  </game-view>\n\n\n\n"
        }), 
        __metadata('design:paramtypes', [components_1.GameControl, mates_exchange_service_1.MatesExchangeServices, mates_game_service_1.MatesServices])
    ], MultiplayerRoom);
    return MultiplayerRoom;
}());
exports.MultiplayerRoom = MultiplayerRoom;
//# sourceMappingURL=multiplayer-room.component.js.map