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
var TimerService = (function () {
    function TimerService() {
        var _this = this;
        this.gameTimer = new Timer(60, true);
        this.problemTimer = new Timer(0, false);
        this.extraTimer = new Timer(0, true);
        this.extraTimer.timeObservable.subscribe(function (value) {
            if (value <= 0) {
                console.log('start gameTimer');
                _this.extraTimer.stop();
                _this.gameTimer.start();
            }
        });
        this.gameTimer.timeObservable.subscribe(function (value) {
            if (_this.extraTimer.isActive()) {
                console.log('start extraTimer');
                _this.gameTimer.stop();
            }
        });
    }
    TimerService.prototype.setProblemTimerConfig = function (extraTime, withTime) {
        this.extraTimer.restart();
        if (withTime && extraTime > 0) {
            this.extraTimer.plusTime(extraTime);
            this.extraTimer.start();
        }
        else {
            this.problemTimer.stop();
        }
        this.problemTimer.restart();
    };
    TimerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimerService);
    return TimerService;
}());
exports.TimerService = TimerService;
var Timer = (function () {
    function Timer(initialValue, countdown) {
        this.initialValue = initialValue;
        this.countdown = countdown;
        this.timeObservable = new Subject_1.Subject();
        this.plusTimeSubject = new Subject_1.Subject();
        this.restart();
    }
    Object.defineProperty(Timer.prototype, "time", {
        get: function () { return this._time; },
        enumerable: true,
        configurable: true
    });
    Timer.prototype.start = function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this.interval = setInterval(function () {
                _this.timeObservable.next(_this.countdown ? _this._time-- : _this._time++);
            }, 1000);
        }
    };
    Timer.prototype.restart = function () {
        this._time = this.initialValue;
    };
    Timer.prototype.stop = function () {
        if (this._isActive) {
            this._isActive = false;
            clearInterval(this.interval);
        }
    };
    Timer.prototype.isActive = function () {
        return this._isActive;
    };
    Timer.prototype.plusTime = function (plus) {
        this.plusTimeSubject.next(plus);
        this.timeObservable.next(this._time += plus);
    };
    return Timer;
}());
//# sourceMappingURL=timer.service.js.map