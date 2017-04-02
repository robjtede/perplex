'use strict';

class Puzzle {
  constructor (game) {
    this.game = game;

    this.id = null;
    this.name = null;

    this.activated = false;
  }

  activate () {
    if (!this.activated) {
      this.activated = true;
      this.onActivate();
    }
  }

  deactivate () {
    if (this.activated) {
      this.activated = false;
      this.onDeactivate();
    }
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

    document.querySelector(`.puzzles .puzzle.${this.name} .subpuzzle.sub${id}`).classList.add('completed');

    if (this.subpuzzles.every(val => val === true)) {
      this.complete();
    }
  }

  complete () {
    if (this.activated) this.game.complete(this.id);
  }
}
