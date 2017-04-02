/* global Game:false MousePuzzle:false FullscreenPuzzle:false OfflinePuzzle:false NotificationPuzzle:false */
'use strict';

const game = new Game();

let id = 1;

const mousePuzzle = new MousePuzzle(id++, game);
const fullScreenPuzzle = new FullscreenPuzzle(id++, game);
const offlinePuzzle = new OfflinePuzzle(id++, game);
const notificationPuzzle = new NotificationPuzzle(id++, game);

// this will be replaced by event handlers
// when each puzzle is selected. only activated
// puzzles can be completed
mousePuzzle.activate();
fullScreenPuzzle.activate();
offlinePuzzle.activate();
notificationPuzzle.activate();

document.addEventListener('DOMContentLoaded', () => {
  game.start();

  document.querySelector('.reset button').addEventListener('click', () => {
    game.reset();
  });
});
