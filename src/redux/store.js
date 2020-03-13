import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import all reducers
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/**
 * Mount it on the store.
 *
 * Note that here, we use 'composeWithDevTools' to wrap the applyMiddleware function.
 * We do so, because it gives us support to use Redux Dev Tools, that is a chrome plugin
 * that helps us check the stored states.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
