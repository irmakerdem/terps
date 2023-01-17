import React from 'react';
import './DetailsView.scss';

const DetailsView = ( {matchingStrain} ) => {
  return matchingStrain.map(str => {
    return (
        <div className='details-container'>
          <h1>{str.strain}</h1>
          <p>Terpenes: {str.terpenes}</p>
          <p>Effects: {str.effects}</p>
          <p>Similar Strain(s): {str.similar}</p>
        </div>
    )
  })
}

export default DetailsView;