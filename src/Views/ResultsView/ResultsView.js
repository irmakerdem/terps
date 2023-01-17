import React from 'react';
import { Link } from 'react-router-dom';
import SearchResult from '../../Components/SearchResult/SearchResult';
import './ResultsView.scss';

const ResultsView = ( {matchingStrain} ) => {
  return matchingStrain.map(str => {
    return (
      <Link to='/details' key={str.id}>
        <SearchResult 
          str={str}
          key={str.id}
        />
      </Link>
    )
  })
}

export default ResultsView;