import React from 'react';
import { Link } from 'react-router-dom';
import SearchResult from '../../Components/SearchResult/SearchResult';
import './ResultsView.scss';

const ResultsView = ( {matchingStrains} ) => {
  let cultivars = matchingStrains.map(str => {
    return (
        <Link to={`/${str.strain}`} key={str.id}>
          <SearchResult 
            str={str}
            key={str.id}
          />
        </Link>
    )
  })
  return (
    <>
      <h2>Your Search Results:</h2>
      {cultivars}
    </>
    )
}

export default ResultsView;