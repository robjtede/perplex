/* global Puzzle:false */
'use strict';

class FiledropPuzzle extends Puzzle {
  onActivate () {
    document.body.addEventListener('dragover', e => {
      e.preventDefault();
      return false;
    });
    document.body.addEventListener('dragover', e => {
      e.preventDefault();
      return false;
    });
    document.body.addEventListener('drop', e => {
      e.preventDefault();
      console.log('complete filedrop');
      this.complete();
    });
  }
};
