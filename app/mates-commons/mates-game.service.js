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
var MatesServices = (function () {
    function MatesServices(http) {
        this.http = http;
        this.pathGameInstance = "http://" + location.hostname + ":3000/game-instance/";
        this.pathGameConfigs = "http://" + location.hostname + ":3000/game-config/";
        this.pathAllPublicGameConfigs = "http://" + location.hostname + ":3000/game-config/public/all";
        this.pathPushScore = "http://" + location.hostname + ":3000/game-match/score";
        this.pathGameMatch = "http://" + location.hostname + ":3000/game-match";
        this.pathUser = "http://" + location.hostname + ":3000/users";
    }
    MatesServices.prototype.createMatch = function (createGameBody) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.pathGameMatch, JSON.stringify(createGameBody), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatesServices.prototype.getPublicMatches = function (type) {
        return this.http.get(this.pathGameMatch + "/public/" + type)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatesServices.prototype.getGameInstance = function (id) {
        return this.http.get(this.pathGameInstance + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatesServices.prototype.getGameConfigs = function () {
        return this.http.get(this.pathGameConfigs)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatesServices.prototype.getAllPublicGameConfigs = function () {
        return this.http.get(this.pathAllPublicGameConfigs)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatesServices.prototype.pushScore = function (gameId, userId, scoreToAdd) {
        var body = JSON.stringify({
            gameMatchId: gameId,
            userId: userId,
            scoreToAdd: scoreToAdd
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http
            .put(this.pathPushScore, body, options)
            .map(function (res) { return res; })
            .subscribe(function (res) { return console.log(res); });
    };
    MatesServices.prototype.extractData = function (res) {
        var body = res.json();
        console.log('extractData', res, body);
        return body || {};
    };
    MatesServices.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    MatesServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MatesServices);
    return MatesServices;
}());
exports.MatesServices = MatesServices;
//# sourceMappingURL=mates-game.service.js.map