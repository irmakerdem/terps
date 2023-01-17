import React from 'react';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain} ) => {
  console.log(selectedStrain)
  return (
    <div className='details-container'>
      <h1>{selectedStrain.strain}</h1>
      <p>Terpenes: {selectedStrain.terpenes}</p>
      <p>Effects: {selectedStrain.effects}</p>
      <p>Similar Strain(s): {selectedStrain.similar}</p>
    </div>
)
  }

export default StrainDetails;