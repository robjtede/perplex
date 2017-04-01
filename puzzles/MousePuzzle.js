/* global Puzzle:false */
'use strict';

class MousePuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    document.addEventListener('mousemove', ev => {
      const x = ev.clientX;

      if (x > 500) this.complete();
    });
  }
}
