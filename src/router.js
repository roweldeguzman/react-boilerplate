import React, { lazy, Suspense, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./screens/home'));
const SecondComponent = lazy(() => import("./screens/second"));
const ThirdComponent = lazy(() => import("./screens/third"));


function Loader() {
  useEffect(() => {
    console.log("mounting...")

    return () => {
      console.log("unmount...")
    }
  }, [])
  return(
    <div>
      message
    </div>
  )
}

const LoadingMessage = () => <Loader />

export default () => (

  <Suspense fallback={<LoadingMessage />}>

    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/second" exact component={SecondComponent} />
      <Route path="/third" exact component={ThirdComponent} />

    </Switch>

  </Suspense>

);