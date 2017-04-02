/* global Game:false MousePuzzle:false FullscreenPuzzle:false OfflinePuzzle:false NotificationPuzzle:false ScrollPuzzle:false LangPuzzle:false ClipboardPuzzle:false DeviceOrientationPuzzle:false */
'use strict';

const game = new Game();

game.registerPuzzle('mouse', 'mouse-pointer', new MousePuzzle(game));
game.registerPuzzle('fullscreen', 'arrows-alt', new FullscreenPuzzle(game));
game.registerPuzzle('offline', 'wifi', new OfflinePuzzle(game));
game.registerPuzzle('notification', 'bell-o', new NotificationPuzzle(game));
game.registerPuzzle('scroll', 'hand-o-down', new ScrollPuzzle(game));
game.registerPuzzle('lang', 'language', new LangPuzzle(game));
game.registerPuzzle('clipboard', 'clipboard', new ClipboardPuzzle(game));
game.registerPuzzle('orientation', 'mobile', new DeviceOrientationPuzzle(game));

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
