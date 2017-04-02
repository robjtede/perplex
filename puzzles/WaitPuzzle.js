/* global Puzzle:false */
'use strict';

class WaitPuzzle extends Puzzle {
  constructor (game) {
    super(game);

    this.subpuzzles = [false];
  }

  onActivate () {
    setTimeout(this.wait1.bind(this), 2000);
    setTimeout(this.wait2.bind(this), 5000);
    setTimeout(this.wait3.bind(this), 10000);
    setTimeout(this.wait4.bind(this), 20000);
  }

  wait1 () {
    this.completeSubPuzzle(0);

    const n = new Notification('Waiting is hard...');
    n.addEventListener('click', () => n.close());
  }

  wait2 () {
    this.completeSubPuzzle(1);

    const n = new Notification('Can you do it?');
    n.addEventListener('click', () => n.close());
  }

  wait3 () {
    this.completeSubPuzzle(2);

    const n = new Notification('Patience is, in fact, a virtue.');
    n.addEventListener('click', () => n.close());
  }

  wait4 () {
    this.completeSubPuzzle(3);

    const n = new Notification('Man, that was painful.');
    n.addEventListener('click', () => n.close());
  }
}
