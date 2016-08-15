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
var LoadingLevelComponent = (function () {
    function LoadingLevelComponent() {
        this.startLevelEmitter = new core_1.EventEmitter();
        this.count = 3;
        this.countChange = new core_1.EventEmitter();
        this.startCountdown();
    }
    LoadingLevelComponent.prototype.startCountdown = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.count--;
            if (_this.count <= 0) {
                clearInterval(interval);
            }
        }, 1000);
    };
    LoadingLevelComponent.prototype.startLevel = function () {
        this.startLevelEmitter.emit("");
    };
    __decorate([
        core_1.Output('onStart'), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoadingLevelComponent.prototype, "startLevelEmitter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LoadingLevelComponent.prototype, "count", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoadingLevelComponent.prototype, "countChange", void 0);
    LoadingLevelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'level-load',
            template: "\n<div class=\"flex-container\">\n  <header>\n\n  </header>\n\n  <br>\n\n  <section class=\"content\">\n\n  </section>\n\n  <br>\n\n  <footer>\n    <div style=\"text-align: center\">\n      <button md-mini-fab *ngIf=\"count <= 0\" [style.background-color]=\"'#F76464'\" (click)=\"startLevel()\">\n        <md-icon class=\"material-icons md-24\">play_arrow</md-icon>\n      </button>\n      <button md-mini-fab *ngIf=\"count > 0\"  [style.background-color]=\"'#F76464'\" (click)=\"startLevel()\">\n        {{count}}\n      </button>\n    </div>\n  </footer>\n  </div>  \n\n\n  ",
            styleUrls: ['level-load.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingLevelComponent);
    return LoadingLevelComponent;
}());
exports.LoadingLevelComponent = LoadingLevelComponent;
//# sourceMappingURL=level-load.component.js.map