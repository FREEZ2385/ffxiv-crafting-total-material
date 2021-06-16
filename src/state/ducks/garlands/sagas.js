import { testApi } from './apis';
import { call, put, takeEvery } from 'redux-saga/effects';
import { default as actions } from './actions';

function* doGetLevelingAction() {
  try {
    const response = yield call(testApi);
    yield put(actions.getLevelingActionSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* rootSaga() {
  yield takeEvery(actions.getLevelingAction, doGetLevelingAction);
}

export default rootSaga;
