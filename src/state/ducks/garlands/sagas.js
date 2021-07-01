import { getLevelingItemInfo, testApi, getRecipeInfo } from './apis';
import { call, put, takeEvery } from 'redux-saga/effects';
import { default as actions } from './actions';
import recipeTableList from '../../../common/craftRecipeList';
import {
  calculateCraftingListInRecipe,
  moveDuplicatingRecipeInRecipe,
} from '../../../common/functions';

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
        recipe: data.recipes[0].id,
      };
    });
    yield put(actions.getCraftRecipeListSuccess(itemList));
  } catch (e) {
    console.error('error of doGetCraftRecipeList');
    console.log(e);
  }
}

function* doCalculateCraftingList({ payload }) {
  try {
    // level 1 calculate
    const recipeLists = [];
    for (const item of payload.craftingList) {
      const recipeList = yield call(getRecipeInfo, 'ja', item.recipe);
      recipeLists.push({ ...recipeList.data, ea: item.ea });
    }
    const levelOneData = calculateCraftingListInRecipe(recipeLists, {});

    // level 2 calculate
    recipeLists.splice(0, recipeLists.length);
    for (const item of levelOneData.anotherRecipeData) {
      const recipeList = yield call(getRecipeInfo, 'ja', item.recipe);
      recipeLists.push({ ...recipeList.data, ea: item.ea });
    }
    const levelTwoData = calculateCraftingListInRecipe(
      recipeLists,
      levelOneData.crystal
    );

    // level 3 calculate
    recipeLists.splice(0, recipeLists.length);
    for (const item of levelTwoData.anotherRecipeData) {
      const recipeList = yield call(getRecipeInfo, 'ja', item.recipe);
      recipeLists.push({ ...recipeList.data, ea: item.ea });
    }
    const levelThreeData = calculateCraftingListInRecipe(
      recipeLists,
      levelTwoData.crystal
    );

    // level 4 calculate
    recipeLists.splice(0, recipeLists.length);
    for (const item of levelThreeData.anotherRecipeData) {
      const recipeList = yield call(getRecipeInfo, 'ja', item.recipe);
      recipeLists.push({ ...recipeList.data, ea: item.ea });
    }
    const levelFourData = calculateCraftingListInRecipe(
      recipeLists,
      levelThreeData.crystal
    );

    moveDuplicatingRecipeInRecipe(
      levelOneData.materialData,
      levelTwoData.materialData
    );
    moveDuplicatingRecipeInRecipe(
      levelTwoData.materialData,
      levelThreeData.materialData
    );
    moveDuplicatingRecipeInRecipe(
      levelThreeData.materialData,
      levelFourData.materialData
    );

    yield put(
      actions.calculateCraftingListSuccess({
        level1: levelOneData.materialData,
        level2: levelTwoData.materialData,
        level3: levelThreeData.materialData,
        level4: levelFourData.materialData,
        crystal: levelFourData.crystal,
      })
    );
  } catch (e) {
    console.error('error of doGetCraftRecipeList');
    console.log(e);
  }
}

function* rootSaga() {
  yield takeEvery(actions.getLevelingAction, doGetLevelingAction);
  yield takeEvery(actions.getCraftRecipeList, doGetCraftRecipeList);
  yield takeEvery(actions.calculateCraftingList, doCalculateCraftingList);
}

export default rootSaga;
