import { createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk'; //Middleware that can be used in place of sagaMiddleware
import createSagaMiddleware from 'redux-saga';
// import { loggerMiddleware } from './middleware/logger';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

// const middleWares = [loggerMiddleware];

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composeEnhancer = 
   (process.env.NODE_ENV !== 'production' &&
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);