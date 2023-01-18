import React from 'react';
import { Link } from 'react-router-dom';
import SearchResult from '../../Components/SearchResult/SearchResult';
import './ResultsView.scss';

const ResultsView = ( {matchingStrains} ) => {
  let cultivars = matchingStrains.map(str => {
    // console.log(str)
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
      <h1 className='headline'>Your Search Results:</h1>
      {cultivars}
    </>
    )
}

export default ResultsView;