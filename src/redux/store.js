import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import all reducers
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
