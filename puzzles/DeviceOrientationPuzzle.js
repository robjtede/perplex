/* global Puzzle:false */
'use strict';

class DeviceOrientationPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false, false];

    window.addEventListener('deviceorientation', e => {
      /*
        face down: {absolute: undefined, alpha: 232.77287226536586, beta: -179.7372314622933, gamma: 0.33115210230672654}
        face up (iPhone 7 Plus camera bump): {absolute: undefined, alpha: 1.4398019115510656, beta: 0.39098376884278313, gamma: -0.8597150001335055}
        beta 0 face up, beta -180 face down
       */
      /*
      console.log({
        absolute: e.absolute,
        alpha: e.alpha,
        beta: e.beta,
        gamma: e.gamma
      });
      */
      if (e.beta < -178 && e.beta > -182) this.completeSubPuzzle(0);
      if (e.beta < 2 && e.beta > -2) this.completeSubPuzzle(1);
      if (e.gamma < -88 && e.gamma > -92) this.completeSubPuzzle(2);
      if (e.gamma < 92 && e.gamma > 88) this.completeSubPuzzle(3);
    });
  }
}
