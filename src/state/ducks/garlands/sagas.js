import { getLevelingItemInfo, testApi } from './apis';
import { call, put, takeEvery } from 'redux-saga/effects';
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
    const filteredOption = recipeTableList[payload.jobName][payload.recipeCode];
    const response = yield call(
      getLevelingItemInfo,
      'ja',
      filteredOption.id,
      filteredOption.minLevel,
      filteredOption.maxLevel
    );
    const searchList = response.data['results'];
    const itemList = searchList.map((data) => {
      return {
        icon: `https://xivapi.com/${data.icon}`,
        name: data.name,
        id: data.id,
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
