import React from 'react';

import { Provider } from 'react-redux'
import store from './store/configureStore';
import Home from './screens/home';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)