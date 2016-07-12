import { Store } from 'bunny.2d';
import * as types from '../constants/action-types';

export const increment = Store.createAction(types.INCREMENT, (amount) => ({ amount }));
