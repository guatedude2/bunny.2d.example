import {Game, Store, Input} from 'bunny.2d';

import reducers from './reducers';
import Splash from './stages/Splash';
import Main from './stages/Main';

// Initialize the canvas
Game.init(750, 1334, {
  antialias: false,
  inputs: {
    jump: [Input.TouchOneFinger, Input.LeftMouseButton, Input.KeySpace]
  },
  debugDraw: true
});

// Create a new store and pass it to the game engine
Store.init(reducers);

// Add stage components
Game.addStage('splash', Splash);
Game.addStage('main', Main);

// Set "splash" stage
// Game.setStage('splash');
Game.setStage('main');
