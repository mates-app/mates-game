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
var http_1 = require('@angular/http');
var counter_component_1 = require('./counter.component');
// import {MathJaxDirective} from '../directives/mathjax.directive';
var AnswerButtonsComponent = (function () {
    function AnswerButtonsComponent() {
        this.answers = new Array();
        this.answer = new core_1.EventEmitter();
    }
    ;
    AnswerButtonsComponent.prototype.sendAnswer = function (answer) {
        this.answer.emit(answer);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AnswerButtonsComponent.prototype, "answers", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AnswerButtonsComponent.prototype, "answer", void 0);
    AnswerButtonsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'answer-buttons',
            templateUrl: 'answer-buttons.component.html',
            styleUrls: ['answer-buttons.component.css'],
            directives: [counter_component_1.CounterComponent, common_1.NgClass,
            ],
            providers: [http_1.HTTP_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [])
    ], AnswerButtonsComponent);
    return AnswerButtonsComponent;
}());
exports.AnswerButtonsComponent = AnswerButtonsComponent;
//# sourceMappingURL=answer-buttons.component.js.map