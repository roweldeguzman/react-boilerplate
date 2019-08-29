import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./screens/home'));

const LoadingMessage = () => ("Loading...")

export default () => (

  <Suspense fallback={<LoadingMessage />}>

    <Switch>

      <Route path="/" exact component={Home} />
            
    </Switch>

  </Suspense>

);