
var Phaser = Phaser || {};
var Trivia = Trivia || {};

var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, 'game');

game.state.add("BootState", new Trivia.BootState());
game.state.add("PreloadState", new Trivia.PreloadState());
game.state.add("MenuState", new Trivia.MenuState());
game.state.add("StartState", new Trivia.StartState());
game.state.add("WinState", new Trivia.WinState());
game.state.start("BootState");
