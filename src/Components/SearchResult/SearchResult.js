import React from 'react';
import './SearchResult.scss';

const SearchResult = ( {str} ) => {
  // console.log(str)
  return (
    <div className='result'>
      <h2>{str.attributes.name}</h2>
    </div>
  )
}

export default SearchResult;