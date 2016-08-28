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
var PopupComponent = (function () {
    function PopupComponent() {
        this.message = 'a message';
        this.status = 'showing';
    }
    PopupComponent.prototype.toggleStatus = function () {
        this.status = this.status === 'showing' ? 'hide' : 'showing';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PopupComponent.prototype, "message", void 0);
    PopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'popup',
            template: "\n    <div class=\"popup\" @popupStatus=\"status\">{{message}}</div>\n  ",
            directives: [
                common_1.NgClass
            ],
            styleUrls: ['popup.component.css'],
            animations: [
                core_1.trigger('popupStatus', [
                    core_1.state('showing', core_1.style({
                        transform: 'scale(0)',
                        top: '30px',
                        opacity: 0,
                    })),
                    core_1.state('hide', core_1.style({
                        transform: 'scale(0)',
                        opacity: 0,
                    })),
                    core_1.transition('showing <=> hide', core_1.group([
                        core_1.animate(1200, core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(50px)', offset: 0.3 }),
                            core_1.style({ opacity: 0.7, transform: 'translateY(20px)', offset: 0.8 }),
                            core_1.style({ opacity: 0, transform: 'translateY(0)', offset: 1.0 })
                        ]))
                    ]))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.component.js.map