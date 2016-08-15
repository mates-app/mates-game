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
var Observable_1 = require("rxjs/Observable");
var CounterComponent = (function () {
    function CounterComponent(elementRef) {
        this.elementRef = elementRef;
        this.config = new CounterConfig();
    }
    CounterComponent.prototype.ngOnChanges = function (changes) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', CounterConfig)
    ], CounterComponent.prototype, "config", void 0);
    CounterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'counter',
            template: "\n    <div [ngClass]=\"{animate : shouldAnimate, animateOnce : !shouldAnimate}\">\n      <span id=\"valueNumber\" class=\"valueNumber\" >{{config.value}}</span>\n    </div>",
            styleUrls: ['counter.component.css'],
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
var CounterConfig = (function () {
    function CounterConfig(value, velocity, valueObservable) {
        if (value === void 0) { value = 0; }
        if (velocity === void 0) { velocity = 200; }
        if (valueObservable === void 0) { valueObservable = new Observable_1.Observable(); }
        this.value = value;
        this.velocity = velocity;
        this.valueObservable = valueObservable;
    }
    CounterConfig.prototype.setObservableValue = function (observable) {
        var _this = this;
        observable.subscribe(function (valueObserve) { _this.value = valueObserve; });
    };
    return CounterConfig;
}());
exports.CounterConfig = CounterConfig;
//# sourceMappingURL=counter.component.js.map