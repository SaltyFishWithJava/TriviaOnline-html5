var Phaser = Phaser || {};
var Trivia = Trivia || {};

// TODO: if no group, prefab will not display, for not added in world
Trivia.Prefab = function(gameState, position, texture, group, properties) {
  "use strict";
  Phaser.Sprite.call(this, gameState.game, position.x, position.y, texture);
  this.anchor.setTo(0.5, 0.5);
  this.gameState = gameState;
  if(group) {
    this.gameState.groups[group].add(this);
  }
};

Trivia.Prefab.prototype = Object.create(Phaser.Sprite.prototype);
Trivia.Prefab.prototype.constructor = Trivia.Prefab;
