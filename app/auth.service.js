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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.pathUsers = "http://" + location.hostname + ":3000/users";
    }
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('extractData', res, body);
        return body || {};
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.get(this.pathUsers + "/is-valid/" + user.username)
            .map(function (res) {
            _this.isLoggedIn = res.json();
            return _this.isLoggedIn;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.signup = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.pathUsers, JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map