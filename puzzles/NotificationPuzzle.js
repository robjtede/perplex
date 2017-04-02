/* global Puzzle:false */
'use strict';

class NotificationPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);

    this.subpuzzles = [false];
    this.granted = window.Notification.permission === 'granted';

    window.Notification.requestPermission(result => {
      this.granted = window.Notification.permission === 'granted';
      if (result !== 'granted') throw new Error('You must allow notifications to solve this puzzle.');
    });
  }

  onActivate () {
    if (this.granted) {
      const n1 = new Notification('hey there');
      n1.addEventListener('click', ev => {
        n1.close();
        const n2 = new Notification('you\'re getting good at this');
        n2.addEventListener('click', ev => {
          n2.close();
          const n3 = new Notification('you deserve a cookie');
          n3.addEventListener('click', ev => {
            n3.close();
            const n4 = new Notification('have a cookie 🍪');
            n4.addEventListener('click', ev => {
              n4.close();
              const n5 = new Notification('oh, you wanted the solution instead?');
              n5.addEventListener('click', ev => {
                n5.close();
                this.completeSubPuzzle(0);
                const n6 = new Notification('there you go. happy?');
                n6.addEventListener('click', ev => {
                  n6.close();
                  const n7 = new Notification('good. happy puzzling!');
                  n7.addEventListener('click', ev => {
                    n7.close();
                  });
                });
              });
            });
          });
        });
      });
    }
  }
}
