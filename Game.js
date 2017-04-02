'use strict';

class Game {
  constructor () {
    this.n = 0;
    this.puzzles = [];
  }

  start () {
    this.render();
  }

  registerPuzzle (name, icon, puzzle) {
    this.puzzles.push(puzzle);

    puzzle.name = name;
    puzzle.icon = icon;
    puzzle.id = this.n;
    this.n++;
  }

  complete (id) {
    const puzzle = this.puzzles[id];
    console.log(`completed ${puzzle.name} puzzle`);
    window.localStorage.setItem(`perplex-puzzle-${id}`, true);

    this.render();
  }

  reset () {
    window.localStorage.clear();
    this.render();
  }

  render () {
    const $puzzles = document.querySelector('.completion');
    $puzzles.innerHTML = '';

    this.puzzles.forEach((puzzle, index) => {
      const complete = !!window.localStorage.getItem(`perplex-puzzle-${index}`);

      const $completion = document.createElement('div');

      $completion.classList.add('puzzle');
      if (complete) $completion.classList.add('complete');

      const $icon = document.createElement('i');
      $icon.classList.add('fa');
      $icon.classList.add('fa-3x');
      $icon.classList.add(`fa-${puzzle.icon}`);
      $completion.appendChild($icon);

      $puzzles.appendChild($completion);
    });
  }
}
