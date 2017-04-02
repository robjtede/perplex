/* global Puzzle:false */
'use strict';

class OfflinePuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false, false];

    window.addEventListener('offline', () => {
      this.completeSubPuzzle(0);
    });

    window.addEventListener('online', () => {
      this.completeSubPuzzle(1);
    });
  }

  onActivate () {
    const online = navigator.onLine;

    this.completeSubPuzzle(Number(online));
  }
}
