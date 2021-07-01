/* REDUCER(S)
It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.
*/

import { handleActions } from 'redux-actions';
import commonActions from './actions';

const initialData = {
  isLoading: false,
};

const reducer = handleActions(
  {
    [commonActions.openLoading]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [commonActions.closeLoading]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
  initialData
);

export default reducer;
