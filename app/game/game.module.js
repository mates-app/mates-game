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
var current_game_service_1 = require('./current-game.service');
var game_status_service_1 = require('./game-status.service');
var timer_service_1 = require('./timer.service');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var grid_list_1 = require('@angular2-material/grid-list');
var icon_1 = require('@angular2-material/icon');
var toolbar_1 = require('@angular2-material/toolbar');
var level_load_component_1 = require('./level-load/level-load.component');
var level_play_component_1 = require('./level-play/level-play.component');
var answer_buttons_component_1 = require('./commons/answer-buttons.component');
var counter_component_1 = require('./commons/counter.component');
var math_problem_expression_component_1 = require('./commons/math-problem-expression.component');
var toolbar_component_1 = require('./commons/toolbar.component');
var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                card_1.MdCardModule,
                button_1.MdButtonModule,
                grid_list_1.MdGridListModule,
                icon_1.MdIconModule,
                toolbar_1.MdToolbarModule,
            ],
            exports: [
                level_load_component_1.LoadingLevelComponent,
                level_play_component_1.PlayingLevelComponent,
                answer_buttons_component_1.AnswerButtonsComponent,
                counter_component_1.CounterComponent,
                math_problem_expression_component_1.MathProblemExpression,
                toolbar_component_1.ToolbarComponent
            ],
            declarations: [
                level_load_component_1.LoadingLevelComponent,
                level_play_component_1.PlayingLevelComponent,
                answer_buttons_component_1.AnswerButtonsComponent,
                counter_component_1.CounterComponent,
                math_problem_expression_component_1.MathProblemExpression,
                toolbar_component_1.ToolbarComponent
            ],
            providers: [
                current_game_service_1.CurrentGameInstance,
                game_status_service_1.GameStatusService,
                timer_service_1.TimerService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GameModule);
    return GameModule;
}());
exports.GameModule = GameModule;
//# sourceMappingURL=game.module.js.map