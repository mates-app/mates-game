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
var toolbar_component_1 = require('../commons/toolbar.component');
var answer_buttons_component_1 = require('../commons/answer-buttons.component');
var math_problem_expression_component_1 = require('../commons/math-problem-expression.component');
var timer_service_1 = require('../timer.service');
var game_status_service_1 = require('../game-status.service');
var models_1 = require('../../models');
// import {MathJaxDirective} from '../../../directives/mathjax.directive';
var PlayingLevelComponent = (function () {
    function PlayingLevelComponent(timerService, gameStatus) {
        this.timerService = timerService;
        this.gameStatus = gameStatus;
        this.isCorrect = new core_1.EventEmitter();
    }
    PlayingLevelComponent.prototype.processAnswer = function (answer) {
        var corrects = this.gameProblem.correctAnswer;
        if (corrects.some(function (correct) { return correct == answer; })) {
            corrects.splice(corrects.findIndex(function (correct) { return correct == answer; }), 1);
            if (corrects.length == 0) {
                this.isCorrect.emit(true);
            }
        }
        else {
            this.isCorrect.emit(false);
        }
    };
    PlayingLevelComponent.prototype.displayProblem = function (problemIndex) {
        if (problemIndex == this.gameStatus.problem) {
            return 'block';
        }
        else {
            return 'none';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.GameProblem)
    ], PlayingLevelComponent.prototype, "gameProblem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.GameLevel)
    ], PlayingLevelComponent.prototype, "gameLevel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', toolbar_component_1.ToolbarConfig)
    ], PlayingLevelComponent.prototype, "toolbarConfig", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PlayingLevelComponent.prototype, "isCorrect", void 0);
    PlayingLevelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'level-play',
            templateUrl: 'level-play.component.html',
            styleUrls: ['level-play.component.css'],
            directives: [
                answer_buttons_component_1.AnswerButtonsComponent,
                math_problem_expression_component_1.MathProblemExpression,
                toolbar_component_1.ToolbarComponent
            ]
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService, game_status_service_1.GameStatusService])
    ], PlayingLevelComponent);
    return PlayingLevelComponent;
}());
exports.PlayingLevelComponent = PlayingLevelComponent;
//# sourceMappingURL=level-play.component.js.map