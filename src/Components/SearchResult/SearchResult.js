import React from 'react';
import './SearchResult.scss';

const SearchResult = ( {str} ) => {
  return (
    <div className='result'>
      <h2>{str.strain}</h2>
    </div>
  )
}

export default SearchResult;