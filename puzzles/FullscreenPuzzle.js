/* global Puzzle:false */
'use strict';

class FullscreenPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);
    var w = screen.width;
    var h = screen.height;
    var x = window.outerWidth;
    var y = window.outerHeight;

    if (x === w && y === h) {
      this.complete();
      console.log('fullscreen');
    };

    window.addEventListener('resize', ev => {
      var w = screen.width;
      var h = screen.height;
      var x = window.outerWidth;
      var y = window.outerHeight;

      if (x === w && y === h) {
        this.complete();
        console.log('fullscreen');
      };
    });
  }
}
