/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/

import { createAction } from 'redux-actions';

const garlandsActions = {
  getLevelingAction: createAction('getLevelingAction'),
  getLevelingActionSuccess: createAction('getLevelingActionSuccess'),
};

export default garlandsActions;
