/* global Puzzle:false */
'use strict';

class WaitPuzzle extends Puzzle {
  onActivate () {
    setTimeout(this.wait.bind(this), 60000);
  }
  wait () {
    this.complete();
    const n = new Notification('patience is in fact a virtue.');
    n.addEventListener('click', ev => {
      n.close();
    });
  }
}
