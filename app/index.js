import {Canvas, Store} from 'bunny.2d';

import reducers from './reducers';
import Splash from './stages/Splash';
import Main from './stages/Main';

// Initialize the canvas
Canvas.init(1334, 750, {
  backgroundColor: 0xFFFFFF
});

// Create a new store and pass it to the game engine
Canvas.setStore(Store.createStore(reducers));

// Add stage components
Canvas.addStage('main', Main);
Canvas.addStage('splash', Splash);

// Set "splash" stage
Canvas.setStage('splash');
