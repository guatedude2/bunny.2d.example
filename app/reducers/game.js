import { Store } from 'bunny.2d';

import * as types from '../constants/action-types';

export default Store.handleActions({
  [types.GAME_OVER]: (state, {payload}) => (
    {
      ...state,
      gameOver: true
    }
  ),
}, {
  gameOver: false
});
