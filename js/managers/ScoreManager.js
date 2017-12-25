
var Phaser = Phaser || {};
var Trivia = Trivia || {};

Trivia.ScoreManager = function(gameState) {
  "use strict";
  Object.call(this);
  this.gameState = gameState;
  // 左右分数
  game.leftScore = 0;
  game.rightScore = 0;
};

Trivia.ScoreManager.prototype = Object.create(Object.prototype);
Trivia.ScoreManager.prototype.constructor = Trivia.ScoreManager;

Trivia.ScoreManager.prototype.levelScore = function() {
  this.updateScore('left', (this.gameState.levelManager.itemCount + this.gameState.LevelTime - this.gameState.timeCount) * 10);
  this.updateScore('right', (this.gameState.levelManager.itemCount + this.gameState.LevelTime - this.gameState.timeCount) * 10);
}

Trivia.ScoreManager.prototype.updateScore = function(side, score) {
  if(side == "left") {
    game.leftScore += score;
    if(game.leftScore < 0) {
      game.leftScore = 0;
    }
    this.gameState.leftScore.text = game.leftScore + "";
  } else {
    game.rightScore += score;
    if(game.rightScore < 0) {
      game.rightScore = 0;
    }
    this.gameState.rightScore.text = game.rightScore + "";
    this.gameState.rightScore.x = 1920 - this.gameState.rightScore.width - 20;
  }
}
