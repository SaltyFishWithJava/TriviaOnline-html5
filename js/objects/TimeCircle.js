
var Trivia = Trivia || {};

Trivia.TimeCircle = function(gameState, position, group, properties) {
  "use strict";
  Phaser.Graphics.call(this, gameState.game, position.x, position.y);
  this.gameState = gameState;
  if(group) {
    this.gameState.groups[group].add(this);
  }
  this.anchor.setTo(0.5, 0.5);
};

Trivia.TimeCircle.prototype = Object.create(Phaser.Graphics.prototype);
Trivia.TimeCircle.prototype.constructor = Trivia.TimeCircle;

Trivia.TimeCircle.prototype.update = function () {
  "use strict";
}

Trivia.TimeCircle.prototype.setTime = function(sec) {
  this.clear();
  // clear之后一定要设置lineStyle
  this.lineStyle(3, 0xFFFFFF);
  this.arc(0, 0, 460, -Math.PI/2 + sec * Math.PI/this.gameState.LevelTime, Math.PI/2);
  this.arc(0, 0, 460, Math.PI/2, Math.PI*3/2 - sec * Math.PI/this.gameState.LevelTime);
}

