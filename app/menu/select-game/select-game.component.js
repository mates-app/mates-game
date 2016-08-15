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
/**
 * Created by josecullen on 17/07/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var mates_game_service_1 = require('../../mates-commons/mates-game.service');
var current_game_service_1 = require('../../game/current-game.service');
var SelectGameComponent = (function () {
    function SelectGameComponent(matesServices, router, currentGameInstance) {
        this.matesServices = matesServices;
        this.router = router;
        this.currentGameInstance = currentGameInstance;
    }
    SelectGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matesServices.getGameConfigs().subscribe(function (gameConfigs) { return _this.gameConfigs = gameConfigs; }, function (error) { return console.log(error); });
    };
    SelectGameComponent.prototype.play = function (id) {
        var _this = this;
        console.log('play', id);
        this.matesServices.getGameInstance(id).subscribe(function (gameInstance) {
            _this.currentGameInstance.setCurrentInstance(gameInstance);
            var link = ['/game'];
            _this.router.navigate(link);
        }, function (error) { return console.log(error); });
    };
    SelectGameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-game',
            templateUrl: 'select-game.component.html',
            styles: ["\n  \tbutton {\n  \t\twidth : 100%;\n  \t}"
            ]
        }), 
        __metadata('design:paramtypes', [mates_game_service_1.MatesServices, router_1.Router, current_game_service_1.CurrentGameInstance])
    ], SelectGameComponent);
    return SelectGameComponent;
}());
exports.SelectGameComponent = SelectGameComponent;
//# sourceMappingURL=select-game.component.js.map