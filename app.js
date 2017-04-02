/* global Game:false MousePuzzle:false FullscreenPuzzle:false */
'use strict';

const game = new Game();

let id = 1;
const mousePuzzle = new MousePuzzle(id++, game);
const fullScreenPuzzle = new FullscreenPuzzle(id++, game);

// this will be replaced by event handlers
// when each puzzle is selected. only activated
// puzzles can be completed
mousePuzzle.activate();
fullScreenPuzzle.activate();
