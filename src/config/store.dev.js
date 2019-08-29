import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import defaultStore from './reducers';

const windowGlobal = typeof window !== 'undefined' && window
const history = createBrowserHistory();

export default () => {

  const reducerMap  = {
    router: connectRouter(history),
    ...defaultStore
  }
  const middleware  = [];
  const enhancers   = [];
  const rootReducer = combineReducers(reducerMap);

  middleware.push(thunkMiddleware);
  middleware.push(routerMiddleware(history))
  enhancers.push(applyMiddleware(...middleware));

  const composeEnhancers = windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(rootReducer,enhancer);


  return { store, history };
}