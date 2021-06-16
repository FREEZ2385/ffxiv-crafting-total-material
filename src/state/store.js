import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ducks'; // import all reducers from ducks/index.js
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/garlands/sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
