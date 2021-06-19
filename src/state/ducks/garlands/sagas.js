import { getItemInfo, testApi } from './apis';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { default as actions } from './actions';
import recipeTableList from '../../../common/craftRecipeList';

function* doGetLevelingAction() {
  try {
    const response = yield call(testApi);
    yield put(actions.getLevelingActionSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* doGetCraftRecipeList({ payload }) {
  try {
    const recipeList = recipeTableList[payload.jobName][payload.recipeCode];
    const responseList = yield all(
      recipeList.map((itemNo) => call(getItemInfo, 'ja', itemNo))
    );
    const itemList = responseList.map((response) => {
      const data = response.data;
      return {
        icon: `https://www.garlandtools.org/files/icons/item/${data.item.icon}.png`,
        name: data.item.name,
        itemLevel: data.item.ilvl,
        id: data.item.id,
      };
    });
    yield put(actions.getCraftRecipeListSuccess(itemList));
  } catch (e) {
    console.error('error of doGetCraftRecipeList');
    console.log(e);
  }
}

function* rootSaga() {
  yield takeEvery(actions.getLevelingAction, doGetLevelingAction);
  yield takeEvery(actions.getCraftRecipeList, doGetCraftRecipeList);
}

export default rootSaga;
