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
var common_1 = require('@angular/common');
var counter_component_1 = require('./counter.component');
var game_status_service_1 = require('../game-status.service');
var timer_service_1 = require('../timer.service');
var ToolbarComponent = (function () {
    function ToolbarComponent(gameStatus, timerService) {
        this.gameStatus = gameStatus;
        this.timerService = timerService;
        this.config = new ToolbarConfig();
    }
    ;
    ToolbarComponent.prototype.ngOnInit = function () {
        console.log("on init toolbar");
        // this.config.timerCounter.setObservableValue(this.timerService.gameTimer.timeObservable);
        // this.config.extraTimeCounter.setObservableValue(this.timerService.extraTimer.timeObservable);
        // this.timerService.extraTimer.timeObservable.subscribe(value => this.config.showExtras = value > 0);
        // this.config.livesCounter.value = this.gameStatus.lives;
        // this.config.scoreCounter.setObservableValue(this.gameStatus.subjectScore);
        // this.config.livesCounter.setObservableValue(this.gameStatus.subjectLives);
        // this.config.levelCounter.setObservableValue(this.gameStatus.subjectLevel);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ToolbarConfig)
    ], ToolbarComponent.prototype, "config", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game-toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: ['toolbar.component.css'],
            directives: [
                counter_component_1.CounterComponent,
                common_1.NgClass
            ]
        }), 
        __metadata('design:paramtypes', [game_status_service_1.GameStatusService, timer_service_1.TimerService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
var ToolbarConfig = (function () {
    function ToolbarConfig(timerCounter, scoreCounter, levelCounter, livesCounter, extraTimeCounter, showExtras, showTooltips) {
        if (timerCounter === void 0) { timerCounter = new counter_component_1.CounterConfig(); }
        if (scoreCounter === void 0) { scoreCounter = new counter_component_1.CounterConfig(); }
        if (levelCounter === void 0) { levelCounter = new counter_component_1.CounterConfig(); }
        if (livesCounter === void 0) { livesCounter = new counter_component_1.CounterConfig(); }
        if (extraTimeCounter === void 0) { extraTimeCounter = new counter_component_1.CounterConfig(); }
        if (showExtras === void 0) { showExtras = false; }
        if (showTooltips === void 0) { showTooltips = false; }
        this.timerCounter = timerCounter;
        this.scoreCounter = scoreCounter;
        this.levelCounter = levelCounter;
        this.livesCounter = livesCounter;
        this.extraTimeCounter = extraTimeCounter;
        this.showExtras = showExtras;
        this.showTooltips = showTooltips;
    }
    return ToolbarConfig;
}());
exports.ToolbarConfig = ToolbarConfig;
//# sourceMappingURL=toolbar.component.js.map