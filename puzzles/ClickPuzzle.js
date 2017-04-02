/* global Puzzle:false */
'use strict';

class ClickPuzzle extends Puzzle {
  onActivate () {
    document.querySelector('[data-name=click]').addEventListener('click', ev => {
      this.complete();
    });
  }
}
