/* global Puzzle:false */
'use strict';

class ClipboardPuzzle extends Puzzle {
  constructor (id, game) {
    super(id, game);
    document.addEventListener('DOMContentLoaded', ev => {
      var c = 0;
      var p = 0;
      var element = document.createElement('p');
      var text = document.createTextNode('Test');
      // text.appendTo(element);
      element.append(text);
      document.body.appendChild(element);
      // element.appendTo(document);
      document.addEventListener('copy', ev => {
        c = 1;
      });
      document.addEventListener('paste', ev => {
        p = 1;
      });
      if (c === 1 && p === 1) {
        this.complete();
      }
    });
  }
}
