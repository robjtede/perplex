/* global Puzzle:false */
'use strict';

class LangPuzzle extends Puzzle {
  constructor (game) {
    super(game);

    this.subpuzzles = [false, false, false, false];
  }

  onActivate () {
    const solutions = () => {
      console.log(window.navigator.languages);

      if (window.navigator.languages.includes('de')) {
        this.completeSubPuzzle(0);
      }

      if (
          window.navigator.languages.includes('en-US') ||
          window.navigator.languages.includes('en-GB')
        ) {
        this.completeSubPuzzle(1);
      }

      if (window.navigator.languages.includes('fr')) {
        this.completeSubPuzzle(2);
      }

      if (window.navigator.languages.includes('es')) {
        this.completeSubPuzzle(3);
      }
    };

    solutions();

    window.addEventListener('languagechange', solutions);
  }
}
