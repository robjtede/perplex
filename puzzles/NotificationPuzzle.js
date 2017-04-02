/* global Puzzle:false */
'use strict';

class NotificationPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.granted = window.Notification.permission === 'granted';

    window.Notification
      .requestPermission()
      .then(result => {
        this.granted = window.Notification.permission === 'granted';
        if (result !== 'granted') throw new Error('You must allow notification to solve this puzzle.');
      });
  }

  onActivate () {
    if (this.granted) {
      const n = new Notification('title');
      n.addEventListener('click', ev => {
        n.close();
        this.complete();
      });
    }
  }
}
