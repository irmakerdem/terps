import React from 'react';
import SearchResult from '../../Components/SearchResult/SearchResult';
import './DetailsView.scss';

const DetailsView = ( {matchingStrain} ) => {
  return matchingStrain.map(str => {
    return (
      <SearchResult 
        str={str}
        key={str.id}
      />
    )
  })
}

export default DetailsView;