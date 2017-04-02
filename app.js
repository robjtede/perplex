/* global Game:false MousePuzzle:false FullscreenPuzzle:false OfflinePuzzle:false NotificationPuzzle:false */
'use strict';

const game = new Game();

game.registerPuzzle('mouse', 'mouse-pointer', new MousePuzzle(game));
game.registerPuzzle('fullscreen', 'arrows-alt', new FullscreenPuzzle(game));
game.registerPuzzle('offline', 'wifi', new OfflinePuzzle(game));
game.registerPuzzle('notification', 'bell-o', new NotificationPuzzle(game));

document.addEventListener('DOMContentLoaded', () => {
  game.start();

  // this will be replaced by event handlers
  // when each puzzle is selected. only activated
  // puzzles can be completed
  Object.values(game.puzzles).forEach(puzzle => { puzzle.activate(); });

  document.querySelector('.reset button').addEventListener('click', () => {
    game.reset();
  });
});
