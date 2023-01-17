import React from 'react';
import './SearchResult.scss';

const SearchResult = ( {str} ) => {
  return (
    <div className='details-container'>
      <h1>{str.strain}</h1>
    </div>
  )

}

export default SearchResult;