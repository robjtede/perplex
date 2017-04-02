/* global Puzzle:false */
'use strict';

class MousePuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false, false, false, false];
  }

  onActivate () {
    document.querySelector(`.puzzles .puzzle.${this.name}`).addEventListener('event', () => {
      this.completeSubPuzzle(0);
    });
  }
}
