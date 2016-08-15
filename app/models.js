"use strict";
var GameInstance = (function () {
    function GameInstance(instanceId, gameId, levels) {
        if (instanceId === void 0) { instanceId = ""; }
        if (gameId === void 0) { gameId = ""; }
        if (levels === void 0) { levels = new Array(); }
        this.instanceId = instanceId;
        this.gameId = gameId;
        this.levels = levels;
    }
    return GameInstance;
}());
exports.GameInstance = GameInstance;
var GameLevel = (function () {
    function GameLevel(gameProblems, scoreConfig) {
        this.gameProblems = gameProblems;
        this.scoreConfig = scoreConfig;
    }
    return GameLevel;
}());
exports.GameLevel = GameLevel;
var GameProblem = (function () {
    function GameProblem(problemExpression, solvedExpression, answerOptions, correctAnswer) {
        this.problemExpression = problemExpression;
        this.solvedExpression = solvedExpression;
        this.answerOptions = answerOptions;
        this.correctAnswer = correctAnswer;
    }
    return GameProblem;
}());
exports.GameProblem = GameProblem;
var ScoreConfig = (function () {
    function ScoreConfig(baseScore, preCount, withTime, extras) {
        this.baseScore = baseScore;
        this.preCount = preCount;
        this.withTime = withTime;
        this.extras = extras;
    }
    return ScoreConfig;
}());
exports.ScoreConfig = ScoreConfig;
var ExtraScore = (function () {
    function ExtraScore(name, extraTime, extraScore, thresholdTime) {
        if (name === void 0) { name = ""; }
        if (extraTime === void 0) { extraTime = 0; }
        if (extraScore === void 0) { extraScore = 0; }
        if (thresholdTime === void 0) { thresholdTime = 100; }
        this.name = name;
        this.extraTime = extraTime;
        this.extraScore = extraScore;
        this.thresholdTime = thresholdTime;
    }
    return ExtraScore;
}());
exports.ExtraScore = ExtraScore;
(function (GameOverType) {
    GameOverType[GameOverType["TIME"] = 0] = "TIME";
    GameOverType[GameOverType["LEVELS"] = 1] = "LEVELS";
    GameOverType[GameOverType["LIVES"] = 2] = "LIVES";
})(exports.GameOverType || (exports.GameOverType = {}));
var GameOverType = exports.GameOverType;
//# sourceMappingURL=models.js.map