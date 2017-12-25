
var Trivia = Trivia || {};

Trivia.Tree = function(gameState, position, texturePrefix, group, properties) {
  "use strict";
  Trivia.Prefab.call(this, gameState, position, '', group, properties);
  this.gameState = gameState;
  this.texturePrefix = texturePrefix;
  this.alpha = 0;
};

Trivia.Tree.prototype = Object.create(Trivia.Prefab.prototype);
Trivia.Tree.prototype.constructor = Trivia.Tree;

Trivia.Tree.prototype.update = function () {
  "use strict";
}

Trivia.Tree.prototype.changeIndex = function(index) {
  this.loadTexture(this.texturePrefix + index);
}

Trivia.Tree.prototype.show = function() {
  this.alpha = 1;
}

Trivia.Tree.prototype.hide = function() {
  this.alpha = 1;
  game.add.tween(this).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
}

Trivia.Tree.prototype.disappear = function(callback) {
  game.add.tween(this).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.In, true);
  var tween = game.add.tween(this.scale).to({x: 0.5, y: 0.5}, 1500, Phaser.Easing.Exponential.In, true);
  tween.onComplete.add(callback, this.gameState);
}

Trivia.Tree.prototype.showAndHide = function(callback, treeAnim, treeManager) {
  var tweenIn = game.add.tween(this).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None);
  var tweenOut = game.add.tween(this).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 1000);
  tweenOut.onComplete.add(callback, this.gameState);
  tweenIn.chain(tweenOut);
  tweenIn.start();
  treeAnim.call(treeManager);
}
