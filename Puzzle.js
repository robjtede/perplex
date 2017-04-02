'use strict';

class Puzzle {
  constructor (game) {
    this.game = game;

    this.id = null;
    this.name = null;

    this.activated = false;
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

  completeSubPuzzle (id) {
    console.log(`completed subpuzzle ${id} on ${this.name} puzzle`);
    this.subpuzzles[id] = true;

    if (this.subpuzzles.every(val => val === true)) {
      this.complete();
    }
  }

  complete () {
    if (this.activated) this.game.complete(this.id);
  }
}
