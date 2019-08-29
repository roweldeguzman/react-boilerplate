import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import defaultStore from './reducers';

const history = createBrowserHistory();

export default () => {

  const reducerMap  = { ...defaultStore }
  const enhancer    = applyMiddleware(thunkMiddleware);
  const rootReducer = combineReducers(reducerMap);

  const store = createStore(rootReducer, enhancer);


  return { store, history };
}