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
var game_status_service_1 = require('../../../game/game-status.service');
var timer_service_1 = require('../../../game/timer.service');
var current_game_service_1 = require('../../../game/current-game.service');
var mates_game_service_1 = require('../../../mates-commons/mates-game.service');
var GameMatesAppComponent = (function () {
    function GameMatesAppComponent(timerService, gameStatus, matesServices, currentGameInstance, appRef) {
        this.timerService = timerService;
        this.gameStatus = gameStatus;
        this.matesServices = matesServices;
        this.currentGameInstance = currentGameInstance;
        this.appRef = appRef;
        this.title = 'game-mates';
        this.viewStatus = ViewStatus.LOADING_LEVEL;
        this.gameDisplay = "block";
    }
    GameMatesAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('game-view component');
        this.gameInstance = this.currentGameInstance.getGameInstance();
        this.gameStatus.subjectLevel.subscribe(function (level) {
            console.log("new level", level);
            _this.loadingLevel();
        });
        this.gameStatus.subjectGameOver.subscribe(function (gameOverType) { return _this.gameOver(gameOverType); });
        this.startGame();
    };
    ;
    GameMatesAppComponent.prototype.loadGame = function () {
        var _this = this;
        this.gameStatus.subjectLevel.subscribe(function (level) {
            console.log("new level", level);
            _this.loadingLevel();
        });
        this.startGame();
    };
    GameMatesAppComponent.prototype.startGame = function () {
        this.gameInstance = this.matesServices.getGameInstance();
        this.gameStatus.startGame(this.gameInstance.levels);
        this.loadingLevel();
        console.log(this.gameInstance);
    };
    /***************/
    GameMatesAppComponent.prototype.loadingLevel = function () {
        this.viewStatus = ViewStatus.LOADING_LEVEL;
        this.gameStatus.pauseGame();
        this.gameDisplay = "none";
    };
    GameMatesAppComponent.prototype.playLevel = function () {
        this.viewStatus = ViewStatus.PLAY_LEVEL;
        this.gameStatus.resumeGame();
        this.gameDisplay = "block";
    };
    GameMatesAppComponent.prototype.gameOver = function (gameOver) {
        console.log(gameOver);
        this.gameOverType = gameOver;
        console.log('ViewStatus', this.viewStatus);
        this.viewStatus = ViewStatus.GAME_OVER;
        console.log('ViewStatus', this.viewStatus);
        this.gameDisplay = "none";
        this.appRef.tick();
    };
    GameMatesAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game-view',
            templateUrl: 'game-view.component.html',
            styleUrls: ['game-view.component.css'],
            providers: [timer_service_1.TimerService, mates_game_service_1.MatesServices, game_status_service_1.GameStatusService]
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService, game_status_service_1.GameStatusService, mates_game_service_1.MatesServices, current_game_service_1.CurrentGameInstance, core_1.ApplicationRef])
    ], GameMatesAppComponent);
    return GameMatesAppComponent;
}());
exports.GameMatesAppComponent = GameMatesAppComponent;
var ViewStatus;
(function (ViewStatus) {
    ViewStatus[ViewStatus["NOT_SELECTED_GAME"] = 0] = "NOT_SELECTED_GAME";
    ViewStatus[ViewStatus["NOT_STARTED_GAME"] = 1] = "NOT_STARTED_GAME";
    ViewStatus[ViewStatus["LOADING_LEVEL"] = 2] = "LOADING_LEVEL";
    ViewStatus[ViewStatus["PLAY_LEVEL"] = 3] = "PLAY_LEVEL";
    ViewStatus[ViewStatus["GAME_OVER"] = 4] = "GAME_OVER";
})(ViewStatus || (ViewStatus = {}));
//# sourceMappingURL=game-view.component.js.map