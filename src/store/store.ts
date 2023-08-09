import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer'; //To be used as an argument for the store

export type RootState = ReturnType<typeof rootReducer>;

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
   }
}

type ExtendedPersistCoonfig = PersistConfig<RootState> & {
   whitelist: (keyof RootState)[];
}

//To utilize local storage: key for object ref name in local storage, whitelist: object that shouldn't be persisted or stored in the localStorage
const persistConfig: ExtendedPersistCoonfig = {
   key: 'root',
   storage,
   whitelist: ['user']
};

//Persisted reducer
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
   process.env.NODE_ENV !== 'production' && logger, 
   sagaMiddleware
].filter((middleware): middleware is Middleware  => Boolean(middleware));

const composeEnhancer = 
   (process.env.NODE_ENV !== 'production' &&
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga)


export const persistor = persistStore(store);