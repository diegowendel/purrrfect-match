import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import all reducers and sagas
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/**
 * Here we setup redux persist configs. We use this library to save redux's store state on
 * user's local storage.
 */
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Mount it on the store.
 *
 * Note that here, we use 'composeWithDevTools' to wrap the applyMiddleware function.
 * We do so, because it gives us support to use Redux Dev Tools, that is a chrome plugin
 * that helps us check the stored states.
 */
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
