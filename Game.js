'use strict';

class Game {
  constructor () {
    this.n = 0;
    this.puzzles = [];
  }

  start () {
    this.render();
  }

  registerPuzzle (name, icon, bgc, c, puzzle) {
    this.puzzles.push(puzzle);

    puzzle.bgc = bgc;
    puzzle.c = c;
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

      $completion.dataset.name = puzzle.name;
      $completion.classList.add('puzzle');
      if (complete) $completion.classList.add('complete');

      const $icon = document.createElement('i');
      $icon.classList.add('fa');
      $icon.classList.add('fa-3x');
      $icon.classList.add(`fa-${puzzle.icon}`);
      $completion.appendChild($icon);

      $puzzles.appendChild($completion);
    });

    Array.from(document.querySelectorAll('.completion .puzzle')).forEach($completion => {
      $completion.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.puzzles .puzzle')).forEach($puzzle => {
          $puzzle.classList.remove('active');
        });

        document.querySelector('.completion').classList.add('puzzled');
        document.querySelector('.back').classList.add('puzzled');
        document.querySelector(`.puzzles .${$completion.dataset.name}`).classList.add('active');

        const nextPuzzle = this.puzzles.find(pz => pz.name === $completion.dataset.name);
        nextPuzzle.activate();
        if (nextPuzzle.bgc && nextPuzzle.c) {
          document.documentElement.style.setProperty(`--bgc`, nextPuzzle.bgc);
          document.documentElement.style.setProperty(`--c`, nextPuzzle.c);
        }
      });
    });

    Array.from(document.querySelectorAll('.back')).forEach($back => {
      $back.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.puzzles .puzzle')).forEach($puzzle => {
          $puzzle.classList.remove('active');

          Object.values(this.puzzles).forEach(puzzle => {
            puzzle.deactivate();
          });
        });

        document.querySelector('.completion').classList.remove('puzzled');
        document.querySelector('.back').classList.remove('puzzled');

        document.documentElement.style.setProperty(`--bgc`, 'rgb(94, 0, 90)');
        document.documentElement.style.setProperty(`--c`, 'rgb(150, 0, 139)');
      });
    });
  }
}
