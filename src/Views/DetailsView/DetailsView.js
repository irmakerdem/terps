import React from 'react';
import './DetailsView.scss';

const DetailsView = ( {matchingStrain} ) => {
  console.log(matchingStrain)
  return (
    <div className='details-container'>
      <p>STRAIN NAME</p>
      <p>{matchingStrain.strain}</p>
      <p>Terpenes: {matchingStrain.terpenes}</p>
      <p>Effects: {matchingStrain.effects}</p>
      <p>Similar Strain(s): {matchingStrain.similar}</p>
    </div>
  )
}

export default DetailsView;