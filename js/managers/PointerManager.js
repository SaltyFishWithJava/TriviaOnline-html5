var Phaser = Phaser || {};
var Trivia = Trivia || {};

Trivia.PointerManager = function (gameState) {
    "use strict";
    Object.call(this);
    this.gameState = gameState;

    this.leftPointer = new Trivia.Pointer(this.gameState, {x: 0, y: 0}, 'pointer', 'pointer', {dir: -1});
    this.rightPointer = new Trivia.Pointer(this.gameState, {x: 0, y: 0}, 'pointer', 'pointer', {dir: 1});
};

Trivia.PointerManager.prototype = Object.create(Object.prototype);
Trivia.PointerManager.prototype.constructor = Trivia.PointerManager;

Trivia.PointerManager.prototype.posPointer = function (curLine) {
    if (!this.gameState.missions[curLine]) return;
    var len = this.gameState.missions[curLine].length;
    var totalWidth = len * 85;
    var leftX = WIDTH / 2 - totalWidth / 2 - 80;
    var rightX = WIDTH / 2 - totalWidth / 2 + 85 / 2 + len * 85 + 35;
    var y = 190 + curLine * 85;
    this.leftPointer.reset(leftX, y);
    this.rightPointer.reset(rightX, y);
}

Trivia.PointerManager.prototype.killPointer = function () {
    this.leftPointer.kill();
    this.rightPointer.kill();
}

Trivia.PointerManager.prototype.showPointer = function () {
    this.leftPointer.alpha = 1;
    this.rightPointer.alpha = 1;
}

Trivia.PointerManager.prototype.hidePointer = function () {
    this.leftPointer.alpha = 0;
    this.rightPointer.alpha = 0;
}
