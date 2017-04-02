/* global Puzzle:false */
'use strict';

class ClipboardPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);
    document.addEventListener('DOMContentLoaded', ev => {
      document.addEventListener('copy', ev => {
        this.complete();
      });
    });
  }
}
