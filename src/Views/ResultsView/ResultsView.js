import React from 'react';
import { Link } from 'react-router-dom';
import SearchResult from '../../Components/SearchResult/SearchResult';
import NoStrain from '../../Components/NoStrain/NoStrain';
import './ResultsView.scss';

const ResultsView = ( {matchingStrains} ) => {

  let cultivars = matchingStrains.map(str => {
    // console.log(str)
    return (
      <Link to={`/${str.strain}`.replace(/\s/g, '')} key={str.id}>
        <SearchResult
          str={str}
          key={str.id}
        />
      </Link>
    )
  })
  return (
    <>
      {cultivars.length ? <><h1 className='headline'>Your Search Results:</h1> {cultivars} </> : <NoStrain />}
    </>
  )
}

export default ResultsView;