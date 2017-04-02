/* global Game:false MousePuzzle:false FullscreenPuzzle:false OfflinePuzzle:false NotificationPuzzle:false ScrollPuzzle:false LangPuzzle:false ClipboardPuzzle:false DeviceOrientationPuzzle:false ClickPuzzle:false WaitPuzzle:false */
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
game.registerPuzzle('click', 'github', new ClickPuzzle(game));
game.registerPuzzle('wait', 'clock-o', new WaitPuzzle(game));
game.registerPuzzle('filedrop', 'file', new FiledropPuzzle(game));

document.addEventListener('DOMContentLoaded', () => {
  game.start();

  // this will be replaced by event handlers
  // when each puzzle is selected. only activated
  // puzzles can be completed
  Object.values(game.puzzles).forEach(puzzle => { puzzle.activate(); });

  Array.from(document.querySelectorAll('.completion .puzzle')).forEach($completion => {
    $completion.addEventListener('click', () => {
      Array.from(document.querySelectorAll('.puzzles .puzzle')).forEach($puzzle => {
        $puzzle.classList.remove('active');
      });

      document.querySelector('.completion').classList.add('puzzled');
      document.querySelector(`.puzzles .${$completion.dataset.name}`).classList.add('active');
    });
  });

  Array.from(document.querySelectorAll('.puzzle .back')).forEach($back => {
    $back.addEventListener('click', () => {
      Array.from(document.querySelectorAll('.puzzles .puzzle')).forEach($puzzle => {
        $puzzle.classList.remove('active');
      });

      document.querySelector('.completion').classList.remove('puzzled');
    });
  });

  // document.querySelector('.reset button').addEventListener('click', () => {
  //   game.reset();
  // });
});
