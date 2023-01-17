import React from 'react';
import './StrainDetails.scss';

const StrainDetails = ( {matchingStrain} ) => {
  return (
      <div className='details-container'>
        <img></img>
        <h1>{str.strain}</h1>
        <p>Terpenes: {str.terpenes}</p>
        <p>Effects: {str.effects}</p>
        <p>Similar Strain(s): {str.similar}</p>
      </div>
  )
  }

export default StrainDetails;