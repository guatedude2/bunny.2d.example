import { Store } from 'bunny.2d';
import * as types from '../constants/action-types';

export const gameOver = Store.createAction(types.GAME_OVER);
