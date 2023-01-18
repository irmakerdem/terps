import React from 'react';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain} ) => {
  const effList = selectedStrain.effects.join(', ')
  const simList = selectedStrain.similar.map((cult) => <li key={cult}>{cult}</li>);
  
  return (
    <div className='details-container'>
      <h1 className='strain-name'>{selectedStrain.strain}</h1>
      <div className='strain-details'>
        <p>Terpenes: <br></br>{selectedStrain.terpenes}</p>
        <p>Effects: <br></br>{effList}</p>
        <p>Similar Strain(s):</p>
          <ul>{simList}</ul>
      </div>
    </div>
)
  }

export default StrainDetails;