import { compose, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//Root reducer

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);