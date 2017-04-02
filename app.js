/* global Game:false MousePuzzle:false FullscreenPuzzle:false OfflinePuzzle:false NotificationPuzzle:false ScrollPuzzle:false LangPuzzle:false ClipboardPuzzle:false DeviceOrientationPuzzle:false ClickPuzzle:false WaitPuzzle:false WaitPuzzle:false FiledropPuzzle:false */
'use strict';

const game = new Game();

game.registerPuzzle('mouse', 'mouse-pointer', '#000088', '#0000ff', new MousePuzzle(game));
game.registerPuzzle('fullscreen', 'arrows-alt', '#008800', '#00ff00', new FullscreenPuzzle(game));
game.registerPuzzle('offline', 'wifi', '#880000', '#ff0000', new OfflinePuzzle(game));
game.registerPuzzle('notification', 'bell-o', '#008888', '#00ffff', new NotificationPuzzle(game));
game.registerPuzzle('scroll', 'hand-o-down', '#cc7700', '#ffff00', new ScrollPuzzle(game));
game.registerPuzzle('lang', 'language', '#008888', '#00ffff', new LangPuzzle(game));
game.registerPuzzle('clipboard', 'clipboard', '#33aa99', '#00ffff', new ClipboardPuzzle(game));
game.registerPuzzle('orientation', 'mobile', '#aa00aa', '#ff00ff', new DeviceOrientationPuzzle(game));
game.registerPuzzle('wait', 'clock-o', '#008800', '#00ff00', new WaitPuzzle(game));
// game.registerPuzzle('click',        'github',        new ClickPuzzle(game));
// game.registerPuzzle('filedrop',    'file',           new FiledropPuzzle(game));

document.addEventListener('DOMContentLoaded', () => {
  game.start();

  // document.querySelector('.reset button').addEventListener('click', () => {
  //   game.reset();
  // });
});
