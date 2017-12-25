
var Trivia = Trivia || {};

Trivia.Pointer = function(gameState, position, texture, group, properties) {
  "use strict";
  Trivia.Prefab.call(this, gameState, position, texture, group, properties);
  this.gameState = gameState;
  this.scale.x = -properties.dir;
  this.alpha = 0;
};

Trivia.Pointer.prototype = Object.create(Trivia.Prefab.prototype);
Trivia.Pointer.prototype.constructor = Trivia.Pointer;

Trivia.Pointer.prototype.update = function () {
  "use strict";
}
