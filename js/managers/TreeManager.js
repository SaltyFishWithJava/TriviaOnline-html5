
var Phaser = Phaser || {};
var Trivia = Trivia || {};

Trivia.TreeManager = function(gameState) {
  "use strict";
  Object.call(this);
  this.gameState = gameState;
  var position = {
    x: 435 + 1043/2,
    y: 1041/2 + 20
  };
  this.curTree = new Trivia.Tree(this.gameState, position, 'tree', 'tree');
  this.lastTree = new Trivia.Tree(this.gameState, position, 'tree', 'tree');

  var treeAnimProps = {
    treeAninTime: 800,
    treeAnimSize: 10
  }
  this.treeAnimLray = new Trivia.TreeAnim(this.gameState, position, 'tree-anim-lray', 'tree', treeAnimProps);
  this.treeAnimSray = new Trivia.TreeAnim(this.gameState, position, 'tree-anim-sray', 'tree', treeAnimProps);
  this.treeAnimCircle = new Trivia.TreeAnim(this.gameState, position, 'tree-anim-circle', 'tree', treeAnimProps);

};

Trivia.TreeManager.prototype = Object.create(Object.prototype);
Trivia.TreeManager.prototype.constructor = Trivia.TreeManager;

Trivia.TreeManager.prototype.winLevel = function(level, callback) {
  if(level == 1) {
    this.curTree.changeIndex(level);
    this.curTree.showAndHide(callback, this.treeAnim, this);
  } else {
    this.lastTree.changeIndex(level - 1);
    this.lastTree.hide();
    this.curTree.changeIndex(level);
    this.curTree.showAndHide(callback, this.treeAnim, this);
  }
}

Trivia.TreeManager.prototype.through = function(level) {
  this.curTree.changeIndex(level);
  this.curTree.show();
}

Trivia.TreeManager.prototype.disappearCurrentTree = function(callback) {
  this.curTree.disappear(callback);
}

Trivia.TreeManager.prototype.treeAnim = function() {
  this.gameState.emitter.emit(5, this.curTree);

  this.treeAnimCircle.bigAlpha();
  this.treeAnimLray.rotateAlpha(180);
  this.treeAnimSray.rotateAlpha(-180);
}
