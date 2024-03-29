/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/

import { createActions } from 'redux-actions';

const commonActions = createActions({
  openLoading: () => ({}),
  closeLoading: () => ({}),

  changeLanguage: (lng) => ({ lng }),
  changeLanguageSuccess: (lng) => ({ lng }),

  changePage: () => ({}),
});

export default commonActions;
