/* global Game:false MousePuzzle:false */
'use strict';

const game = new Game();

let id = 1;
const mousePuzzle = new MousePuzzle(id++, game);

// this will be replaced by event handlers
// when each puzzle is selected. only activated
// puzzles can be completed
mousePuzzle.activate();
