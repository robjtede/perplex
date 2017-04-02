'use strict';

class Puzzle {
  constructor (id, game) {
    this.id = id;
    this.game = game;
    this.activated = false;

    this.game.n++;
  }

  activate () {
    this.activated = true;
    this.onActivate();
  }

  deactivate () {
    this.activated = false;
    this.onDeactivate();
  }

  onActivate () {
    // throw new Error('this method must be overriden');
  }
  onDeactivate () {
    // throw new Error('this method must be overriden');
  }

  complete () {
    if (this.activated) this.game.complete(this.id);
  }
}
