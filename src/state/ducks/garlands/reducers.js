/* REDUCER(S)
It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.
*/

import { handleActions } from 'redux-actions';
import garlandActions from './actions';

const initialData = {
  levelingData: [],
  craftRecipeList: [],
  craftingList: [],
};

const pushCrafingList = (list, value) => {
  const addedList = list;
  if (addedList.length > 0) {
    if (!addedList.some((data) => data.id === value.id)) addedList.push(value);
  } else {
    addedList.push(value);
  }
  return addedList;
};

const reducer = handleActions(
  {
    [garlandActions.getLevelingActionSuccess]: (state, action) => ({
      ...state,
      levelingData: action.payload.data,
    }),

    [garlandActions.getCraftRecipeListSuccess]: (state, action) => ({
      ...state,
      craftRecipeList: action.payload.data,
    }),

    [garlandActions.addCraftingList]: (state, action) => ({
      ...state,
      craftingList: pushCrafingList(
        state.craftingList,
        action.payload.itemData
      ),
    }),
  },
  initialData
);

export default reducer;
