import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import all reducers
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

export default store;
