/* global Puzzle:false */
'use strict';

class ClickPuzzle extends Puzzle {

  onActivate () {
    document.querySelector('.github').addEventListener('click', ev => {
      this.complete();
    });
  }
}
