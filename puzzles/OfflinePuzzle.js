/* global Puzzle:false */
'use strict';

class OfflinePuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    window.addEventListener('offline', () => {
      // const condition = navigator.onLine ? 'online' : 'offline';
      this.complete();
    });
  }
}
