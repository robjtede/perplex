/* global Puzzle:false */
'use strict';

class ClipboardPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false, false];
  }

  onActivate () {
    document.addEventListener('copy', ev => {
      this.completeSubPuzzle(0);
    });

    document.addEventListener('paste', ev => {
      this.completeSubPuzzle(1);
    });
  }
}
