import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import defaultStore from './reducers';

const windowGlobal = typeof window !== 'undefined' && window

export default () => {

  const reducerMap  = { ...defaultStore }
  const middleware  = [];
  const enhancers   = [];
  const rootReducer = combineReducers(reducerMap);

  middleware.push(thunkMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const composeEnhancers = windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(rootReducer,enhancer);


  return store;
}