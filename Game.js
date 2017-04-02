'use strict';

class Game {
  constructor () {
    this.n = 0;
  }

  start () {
    this.render();
  }

  complete (id) {
    console.log(`completed ${id}`);
    window.localStorage.setItem(`perplex-puzzle-${id}`, true);

    document.querySelector('.puzzles').innerHTML = '';
    this.render();
  }

  render () {
    const puzzles = document.querySelector('.puzzles');

    const completions = Array.from(Array(this.n)).map((puzzle, index) => {
      const completed = !!window.localStorage.getItem(`perplex-puzzle-${index + 1}`);
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
