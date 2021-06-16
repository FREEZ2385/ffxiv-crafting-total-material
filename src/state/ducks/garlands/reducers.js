/* REDUCER(S)
It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.
*/

import { handleActions } from 'redux-actions';
import garlandActions from './actions';

const initialData = {
  levelingData: [],
};

const reducer = handleActions(
  {
    [garlandActions.getLevelingActionSuccess]: (state, action) => ({
      levelingData: action.payload,
    }),
  },
  initialData
);

export default reducer;
