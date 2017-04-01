'use strict';

class Puzzle {
  constructor (id, game) {
    this.id = id;
    this.game = game;
    this.activated = false;
  }

  activate () {
    this.activated = true;
  }

  deactivate () {
    this.activated = false;
  }

  complete () {
    if (this.activated) this.game.complete(this.id);
  }
}
