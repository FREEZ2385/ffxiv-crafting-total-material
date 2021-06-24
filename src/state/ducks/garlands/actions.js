/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/

import { createActions } from 'redux-actions';

const garlandsActions = createActions({
  // Dummy Actions
  getLevelingAction: () => ({}),
  getLevelingActionSuccess: (data) => ({ data }),

  // Actions of Recipe List
  getCraftRecipeList: (jobName, recipeCode) => ({ jobName, recipeCode }),
  getCraftRecipeListSuccess: (data) => ({ data }),

  // Actions of Crafting List
  addCraftingList: (itemData) => ({ itemData }),
  setCraftingEA: (index, value) => ({ index, value }),
  deleteCraftingList: (index) => ({ index }),
});

export default garlandsActions;
