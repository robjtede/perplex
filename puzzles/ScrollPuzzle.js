/* global Puzzle:false */
'use strict';

class ScrollPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false];
  }

  onActivate () {
    window.addEventListener('scroll', ev => {
      const x = document.documentElement.scrollHeight;

      const y = window.scrollY + window.innerHeight;

      if (y >= x) {
        this.completeSubPuzzle(0);
      }
    }, {
      passive: true
    });
  }
};
