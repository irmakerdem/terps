import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../../Views/HomeView/HomeView';
import AboutView from '../../Views/AboutView/AboutView';
import TerpenesView from '../../Views/TerpenesView/TerpenesView';
import DetailsView from '../../Views/DetailsView/DetailsView';

const Routes = ( { searchStrain, matchingStrain } ) => {
  console.log(matchingStrain)
  return (
    <Switch>
      <Route exact path='/about'>
        <AboutView />
      </Route>
      <Route exact path='/terpenes'>
        <TerpenesView />
      </Route>
      <Route exact path='/details'>
        <DetailsView matchingStrain={matchingStrain}/>
      </Route>
      <Route exact path='/'>
        <HomeView searchStrain={searchStrain} />
      </Route>
    </Switch>
  )
}

export default Routes;