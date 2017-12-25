
var Trivia = Trivia || {};

Trivia.Mission = function(gameState, position, texture, group, properties) {
  "use strict";
  Trivia.Prefab.call(this, gameState, position, texture, group, properties);
  this.gameState = gameState;
  this.myTexture = texture;
  this.frame = 1;
  this.isDone = false;
  this.index = properties.index;
};

Trivia.Mission.prototype = Object.create(Trivia.Prefab.prototype);
Trivia.Mission.prototype.constructor = Trivia.Mission;

Trivia.Mission.prototype.update = function () {
  "use strict";
}

Trivia.Mission.prototype.changeMission = function(position, texture, index) {
  this.reset(position.x, position.y);
  this.loadTexture(texture);
  this.myTexture = texture;
  this.index = index;
  this.frame = 1;
  this.isDone = false;
}

Trivia.Mission.prototype.done = function() {
  var effect = this.gameState.missionEffectGroup.getFirstExists(false);
  if(effect) {
    effect.reset(this.x, this.y);
    effect.loadTexture(this.myTexture);
  } else {
    effect = game.add.sprite(this.x, this.y, this.myTexture);
    effect.frame = 1;
    effect.anchor.setTo(0.5);
    this.gameState.missionEffectGroup.add(effect);
  }
  game.add.tween(effect).to({alpha: 0}, 300, Phaser.Easing.Linear.None, true);
  var tween = game.add.tween(effect.scale).to({x: 2, y:2}, 300, Phaser.Easing.Linear.None, true);
  tween.onComplete.add(function() {
    effect.kill();
  }, this);
  this.frame = 0;
  this.gameState.emitter.emit(this.index, this);
  this.isDone = true;
}


