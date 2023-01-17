import React from 'react';
import './StrainCard.scss';

const StrainCard = ( {matchingStrain} ) => {
  return (
      <div className='details-container'>
        <h1>{str.strain}</h1>
        <p>Terpenes: {str.terpenes}</p>
        <p>Effects: {str.effects}</p>
        <p>Similar Strain(s): {str.similar}</p>
      </div>
  )
  }

export default StrainCard;