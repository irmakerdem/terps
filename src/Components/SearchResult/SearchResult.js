import React from 'react';
import './SearchResult.scss';

const SearchResult = ( {str} ) => {
  return (
      <div className='result'>
        <h3>{str.strain}</h3>
      </div>
  )
}

export default SearchResult;