
var Trivia = Trivia || {};

Trivia.TreeAnim = function(gameState, position, texture, group, properties) {
  "use strict";
  Trivia.Prefab.call(this, gameState, position, texture, group, properties);
  this.gameState = gameState;
  this.alpha = 0;
  this.treeAninTime = properties.treeAninTime;
  this.treeAnimSize = properties.treeAnimSize;
};

Trivia.TreeAnim.prototype = Object.create(Trivia.Prefab.prototype);
Trivia.TreeAnim.prototype.constructor = Trivia.TreeAnim;

Trivia.TreeAnim.prototype.update = function () {
  "use strict";
}

Trivia.TreeAnim.prototype.bigAlpha = function() {
  this.alpha = 0.7;
  this.scale.setTo(1);
  game.add.tween(this).to( { alpha: 0 }, this.treeAninTime, Phaser.Easing.Linear.None, true);
  game.add.tween(this.scale).to( { x: this.treeAnimSize * 1.3, y: this.treeAnimSize * 1.3 }, this.treeAninTime, Phaser.Easing.Linear.None, true);
}

Trivia.TreeAnim.prototype.rotateAlpha = function(angle) {
  this.alpha = 0.7;
  this.angle = 0;
  this.scale.setTo(1);
  game.add.tween(this).to( { angle: angle }, this.treeAninTime, Phaser.Easing.Linear.None, true);
  game.add.tween(this).to( { alpha: 0 }, this.treeAninTime, Phaser.Easing.Linear.None, true);
  game.add.tween(this.scale).to( { x: this.treeAnimSize, y: this.treeAnimSize }, this.treeAninTime, Phaser.Easing.Linear.None, true);
}
