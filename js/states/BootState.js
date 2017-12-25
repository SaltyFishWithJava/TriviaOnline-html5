var Phaser = Phaser || {};
var Trivia = Trivia || {};

Trivia.BootState = function () {
    "use strict";
    Trivia.BaseState.call(this);
};

Phaser.World.prototype.displayObjectUpdateTransform = function () {
    if (!game.scale.correct) {
        this.x = game.camera.y + game.width;
        this.y = -game.camera.x;
        this.rotation = Phaser.Math.degToRad(Phaser.Math.wrapAngle(90));
    } else {
        this.x = -game.camera.x;
        this.y = -game.camera.y;
        this.rotation = 0;
    }

    PIXI.DisplayObject.prototype.updateTransform.call(this);
}

Trivia.BootState.prototype = Object.create(Trivia.BaseState.prototype);
Trivia.BootState.prototype.constructor = Trivia.BootState;

Trivia.BootState.prototype.preload = function () {
    "use strict";
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.load.image('loading', 'assets/loading.png');
    game.load.spritesheet('dian', 'assets/dian-sheet.png', 60, 12);
    game.load.image("background", "assets/background.png");
    if (game.scale.isLandscape) {
        game.scale.correct = true;
        game.scale.setGameSize(WIDTH, HEIGHT);
    } else {
        game.scale.correct = false;
        game.scale.setGameSize(HEIGHT, WIDTH);
    }
};

Trivia.BootState.prototype.create = function () {
    "use strict";
    game.scale.onOrientationChange.add(function () {
        if (game.scale.isLandscape) {
            game.scale.correct = true;
            game.scale.setGameSize(WIDTH, HEIGHT);
        } else {
            game.scale.correct = false;
            game.scale.setGameSize(HEIGHT, WIDTH);
        }
    }, this)
    game.state.start('PreloadState');
};
