
var Phaser = Phaser || {};
var Trivia = Trivia || {};

Trivia.SoundManager = function() {
  "use strict";
  Object.call(this);
  this.soundMenu = game.add.audio("sound-menu", 1, true);
  this.soundWin = game.add.audio("sound-win");
  this.soundRight = game.add.audio("sound-right");
  this.soundNextLevel = game.add.audio("sound-nextlevel");
  this.soundGameOver = game.add.audio("sound-gameover");
  this.soundError = game.add.audio("sound-error");
  this.soundStartLevel = game.add.audio("sound-startlevel");
};

Trivia.SoundManager.prototype = Object.create(Object.prototype);
Trivia.SoundManager.prototype.constructor = Trivia.SoundManager;

Trivia.SoundManager.prototype.playSound = function(key) {
  try {
    this[key].play();
  } catch (e) {}
}

Trivia.SoundManager.prototype.playSoundMenu = function() {
  if(!this.soundMenu.isPlaying) {
    this.soundMenu.play();
  }
}

Trivia.SoundManager.prototype.stopSoundMenu = function() {
  this.soundMenu.stop();
}

Trivia.SoundManager.prototype.playSoundWin = function() {
  this.playSound('soundWin');
}

Trivia.SoundManager.prototype.playSoundRight = function() {
  this.playSound('soundRight');
}

Trivia.SoundManager.prototype.playSoundNextLevel = function() {
  this.playSound('soundNextLevel');
}

Trivia.SoundManager.prototype.playSoundGameOver = function() {
  this.playSound('soundGameOver');
}

Trivia.SoundManager.prototype.playSoundError = function() {
  this.playSound('soundError');
}

Trivia.SoundManager.prototype.playSoundStartLevel = function() {
  this.playSound('soundStartLevel');
}
