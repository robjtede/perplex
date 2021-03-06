/* global Puzzle:false */
'use strict';

class FullscreenPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false];
  }

  onActivate () {
    var w = screen.width;
    var h = screen.height;
    var x = window.outerWidth;
    var y = window.outerHeight;

    if (x === w && y === h) {
      this.complete();
    };

    window.addEventListener('resize', ev => {
      var w = screen.width;
      var h = screen.height;
      var x = window.outerWidth;
      var y = window.outerHeight;

      if (x === w && y === h) {
        this.completeSubPuzzle(0);
        console.log('fullscreen');
      };
    });
  }
}
