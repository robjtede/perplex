/* global Puzzle:false */
'use strict';

class MousePuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false, false, false, false];
  }

  onActivate () {
    document.querySelector(`.puzzles .puzzle.${this.name} .subpuzzle.sub0`).addEventListener('mouseenter', () => {
      this.completeSubPuzzle(0);
    });

    document.querySelector(`.puzzles .puzzle.${this.name} .subpuzzle.sub1`).addEventListener('mouseenter', () => {
      this.completeSubPuzzle(1);
    });

    document.querySelector(`.puzzles .puzzle.${this.name} .subpuzzle.sub2`).addEventListener('mouseenter', () => {
      this.completeSubPuzzle(2);
    });

    document.querySelector(`.puzzles .puzzle.${this.name} .subpuzzle.sub3`).addEventListener('mouseenter', () => {
      this.completeSubPuzzle(3);
    });
  }
}
