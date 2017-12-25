var Phaser = Phaser || {};
var Trivia = Trivia || {};

Trivia.BaseState = function () {
    "use strict";
    Phaser.State.call(this);
};

Trivia.BaseState.prototype = Object.create(Phaser.State.prototype);
Trivia.BaseState.prototype.constructor = Trivia.BaseState;
