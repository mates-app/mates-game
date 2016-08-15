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
var Subject_1 = require('rxjs/Subject');
var timer_service_1 = require('./timer.service');
var models = require('../models');
var GameStatusService = (function () {
    function GameStatusService(timer) {
        var _this = this;
        this.timer = timer;
        this.subjectScore = new Subject_1.Subject();
        this.subjectLevel = new Subject_1.Subject();
        this.subjectLives = new Subject_1.Subject();
        this.subjectProblem = new Subject_1.Subject();
        this.subjectGameOver = new Subject_1.Subject();
        this.level = 0;
        this.problem = 0;
        this.score = 0;
        this.lives = 3;
        timer.gameTimer.timeObservable.subscribe(function (time) { return _this.checkGameOver(); });
        this.subjectGameOver.subscribe(function (gameOverType) { return console.log("Game Over", gameOverType); });
    }
    GameStatusService.prototype.startGame = function (gameLevels) {
        this.gameLevels = gameLevels;
        this.subjectLevel.next(this.level);
        this.subjectProblem.next(this.problem);
        this.subjectLives.next(this.lives);
        this.timer.gameTimer.start();
        this.timer.problemTimer.start();
        var scoreConfig = this.getActualScoreConfig();
        this.timer.setProblemTimerConfig(scoreConfig.preCount, scoreConfig.withTime);
    };
    GameStatusService.prototype.pauseGame = function () {
        this.timer.gameTimer.stop();
        this.timer.problemTimer.stop();
        this.timer.extraTimer.stop();
    };
    GameStatusService.prototype.resumeGame = function () {
        this.timer.gameTimer.start();
        this.timer.problemTimer.start();
        this.timer.extraTimer.start();
    };
    GameStatusService.prototype.onAnswer = function (isCorrect) {
        if (isCorrect) {
            this.setScoreAndTime();
        }
        else {
            this.subjectLives.next(--this.lives);
            this.checkGameOver();
        }
        this.nextProblem();
    };
    GameStatusService.prototype.setScoreAndTime = function () {
        var _this = this;
        var scoreConfig = this.getActualScoreConfig();
        var scoreToAdd = scoreConfig.baseScore;
        var extras = scoreConfig.extras
            .filter(function (extra) { return _this.timer.problemTimer.time <= extra.thresholdTime; })
            .reduce((function (initial, actual) { return initial.thresholdTime < actual.thresholdTime ? initial : actual; }), new models.ExtraScore());
        scoreToAdd += extras.extraScore;
        this.timer.gameTimer.plusTime(extras.extraTime);
        this.subjectScore.next(this.score += scoreToAdd);
    };
    GameStatusService.prototype.nextProblem = function () {
        if (this.gameLevels[this.level].gameProblems.length - 1 > this.problem) {
            this.subjectProblem.next(++this.problem);
        }
        else {
            this.nextLevel();
        }
        var scoreConfig = this.getActualScoreConfig();
        this.timer.setProblemTimerConfig(scoreConfig.preCount, scoreConfig.withTime);
    };
    GameStatusService.prototype.nextLevel = function () {
        this.subjectProblem.next(this.problem = 0);
        this.subjectLevel.next(++this.level);
        this.checkGameOver();
    };
    GameStatusService.prototype.checkGameOver = function () {
        if (this.gameLevels) {
            if (this.lives <= 0) {
                this.pauseGame();
                this.subjectGameOver.next(models.GameOverType.LIVES);
            }
            else if (this.level == this.gameLevels.length) {
                this.pauseGame();
                this.subjectGameOver.next(models.GameOverType.LEVELS);
            }
            else if (this.timer.gameTimer.time <= 0) {
                this.pauseGame();
                this.subjectGameOver.next(models.GameOverType.TIME);
            }
        }
    };
    GameStatusService.prototype.getActualProblem = function () {
        return this.gameLevels[this.level].gameProblems[this.problem];
    };
    GameStatusService.prototype.getActualLevel = function () {
        return this.gameLevels[this.level];
    };
    GameStatusService.prototype.getActualScoreConfig = function () {
        return this.getActualLevel().scoreConfig;
    };
    GameStatusService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [timer_service_1.TimerService])
    ], GameStatusService);
    return GameStatusService;
}());
exports.GameStatusService = GameStatusService;
/*


    console.log(scoreConfig.extras
                              .filter(extra => this.timer.problemTimer.time <= extra.thresholdTime ));
    console.log("problemTimer: ",this.timer.problemTimer);
    console.log("gameTimer: ",this.timer.gameTimer);

    console.log(extras);
*/
//# sourceMappingURL=game-status.service.js.map