/* global Puzzle:false */
'use strict';

class LangPuzzle extends Puzzle {
  constructor (game) {
    super(game);

    window.addEventListener('languagechange', ev => {
      this.complete();
    });
  }
}
