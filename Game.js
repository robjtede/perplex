'use strict';

class Game {
  constructor () {
    this.n = 0;
    this.puzzles = [];
  }

  start () {
    this.render();
  }

  registerPuzzle (name, puzzle) {
    this.puzzles.push(puzzle);

    puzzle.name = name;
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
    const puzzles = document.querySelector('.completion');
    puzzles.innerHTML = '';

    const completions = Array.from(Array(this.n)).map((puzzle, index) => {
      const completed = !!window.localStorage.getItem(`perplex-puzzle-${index}`);
      return `Puzzle ${index}: ${completed}`;
    });

    const list = document.createElement('ul');

    completions.forEach((puzzle, index) => {
      const item = document.createElement('li');
      item.textContent = puzzle;

      list.appendChild(item);
    });

    puzzles.appendChild(list);
  }
}
