/* global Puzzle:false */
'use strict';

class ScrollPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    let x;

    document.addEventListener('DOMContentLoaded', ev => {
      x = document.documentElement.scrollHeight;
    });

    window.addEventListener('scroll', ev => {
      const y = window.scrollY + window.innerHeight;

      if (x === y) {
        this.complete();
      }
    });
  }
};
