import { Store } from 'bunny.2d';

import * as types from '../constants/action-types';

export default Store.handleActions({
  [types.INCREMENT]: (state, {payload}) => (
    {
      ...state,
      count: state.count + payload.amount
    }
  ),
}, {
  count: 0
});
