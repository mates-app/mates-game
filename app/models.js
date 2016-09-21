"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var components_1 = require("torbi.ng2-choices-game/components");
var GameConfig = (function () {
    function GameConfig(_id, name) {
        this._id = _id;
        this.name = name;
    }
    return GameConfig;
}());
exports.GameConfig = GameConfig;
var GameMatch = (function () {
    function GameMatch(gameId, name, isPublic, isMultiPlayer) {
        this.gameId = gameId;
        this.name = name;
        this.isPublic = isPublic;
        this.isMultiPlayer = isMultiPlayer;
    }
    return GameMatch;
}());
exports.GameMatch = GameMatch;
var GameMatesInstance = (function (_super) {
    __extends(GameMatesInstance, _super);
    function GameMatesInstance() {
        _super.apply(this, arguments);
    }
    return GameMatesInstance;
}(components_1.GameInstance));
exports.GameMatesInstance = GameMatesInstance;
//# sourceMappingURL=models.js.map