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
var icon_1 = require('@angular2-material/icon');
var components_1 = require("torbi.ng2-choices-game/components");
var SelectGameComponent = (function () {
    function SelectGameComponent(matesServices, router, gameControl, mdIconRegistry) {
        this.matesServices = matesServices;
        this.router = router;
        this.gameControl = gameControl;
        this.mdIconRegistry = mdIconRegistry;
        this.isStarted = false;
        mdIconRegistry
            .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }
    SelectGameComponent.prototype.menu = function () {
        console.log('click');
        var link = ['/menu'];
        this.router.navigate(link);
    };
    SelectGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matesServices.getGameConfigs().subscribe(function (gameConfigs) { return _this.gameConfigs = gameConfigs; }, function (error) { return console.log(error); });
    };
    SelectGameComponent.prototype.play = function (id) {
        var _this = this;
        console.log('play', id);
        this.matesServices.getGameInstance(id).subscribe(function (gameInstance) {
            _this.gameControl.setGameInstance(gameInstance);
            _this.gameControl.start();
            _this.isStarted = true;
            _this.gameControl.onScoreChange()
                .subscribe(function (score) {
                _this.matesServices.pushScore(_this.gameControl.getGameInstance().gameId, "57bccba3ee005b59204559a4", score.allScore());
                console.log('score', score.allScore());
            });
            // let link = ['/game']
            // this.router.navigate(link)
        }, function (error) { return console.log(error); });
    };
    SelectGameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-game',
            templateUrl: 'select-game.component.html',
            styleUrls: ['select-game.component.css'],
            viewProviders: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [mates_game_service_1.MatesServices, router_1.Router, components_1.GameControl, icon_1.MdIconRegistry])
    ], SelectGameComponent);
    return SelectGameComponent;
}());
exports.SelectGameComponent = SelectGameComponent;
//# sourceMappingURL=select-game.component.js.map