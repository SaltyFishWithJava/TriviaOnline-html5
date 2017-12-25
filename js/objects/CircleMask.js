var Trivia = Trivia || {};

Trivia.CircleMask = function (gameState, position, texture, group, properties) {
    "use strict";
    Trivia.Prefab.call(this, gameState, position, texture, group, properties);
    this.gameState = gameState;
    this.scale.setTo(0.1);
};

Trivia.CircleMask.prototype = Object.create(Trivia.Prefab.prototype);
Trivia.CircleMask.prototype.constructor = Trivia.CircleMask;

Trivia.CircleMask.prototype.update = function () {
    "use strict";
}

Trivia.CircleMask.prototype.show = function () {
    game.add.tween(this.scale).to({x: 6.5, y: 6.5}, 0, Phaser.Easing.Exponential.Out, true);
}

Trivia.CircleMask.prototype.disappear = function () {
    game.add.tween(this.scale).to({x: 0, y: 0}, 500, Phaser.Easing.Exponential.In, true);
}

Trivia.CircleMask.prototype.big = function () {
    game.add.tween(this.scale).to({x: 9, y: 9}, 1000, Phaser.Easing.Exponential.In, true);
}

Trivia.CircleMask.prototype.small = function () {
    game.add.tween(this.scale).to({x: 4, y: 4}, 1500, Phaser.Easing.Exponential.In, true);
}
