import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../../Views/HomeView/HomeView';
import AboutView from '../../Views/AboutView/AboutView';
import TerpenesView from '../../Views/TerpenesView/TerpenesView';
import ResultsView from '../../Views/ResultsView/ResultsView';
import StrainDetails from '../StrainDetails/StrainDetails';

const Routes = ( { searchStrain, matchingStrains, selectResult, allStrains } ) => {
  return (
    <Switch>
      <Route exact path='/about'>
        <AboutView />
      </Route>
      <Route exact path='/terpenes'>
        <TerpenesView />
      </Route>
      <Route exact path='/searchResults'>
        <ResultsView matchingStrains={matchingStrains}/>
      </Route>
      <Route exact path='/:strainName' render={({match}) => {
        console.log("match on route ➡️", match)
        let selectedStrain = selectResult(match.params)
        console.log(selectedStrain)
        return <StrainDetails allStrains={allStrains} selectedStrain={selectedStrain} searchStrain={searchStrain} />
        }
      }
      />
      <Route exact path='/'>
        <HomeView searchStrain={searchStrain} />
      </Route>
    </Switch>
  )
}

export default Routes;