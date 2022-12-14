import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../../Views/HomeView/HomeView';
import AboutView from '../../Views/AboutView/AboutView';
import TerpenesView from '../../Views/TerpenesView/TerpenesView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/about'>
        <AboutView />
      </Route>
      <Route exact path='/terpenes'>
        <TerpenesView />
      </Route>
      <Route exact path='/'>
        <HomeView />
      </Route>
    </Switch>
  )
}

export default Routes;