import React from 'react';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain} ) => {
  // const effList = selectedStrain.effects.join(', ')
  const effList = selectedStrain.effects.map((eff) => <li key={eff}>{eff}</li>);
  const simList = selectedStrain.similar.map((cult) => <li key={cult}>{cult}</li>);
  const terpList = selectedStrain.terpenes.map((terp) => <li key={terp}>{terp}</li>);
  return (
    <div className='details-container'>
      <h1 className='strain-name'>{selectedStrain.strain}</h1>
      <div className='strain-details'>
        <p className='spacing'>Terpenes:</p>
        <ul>{terpList}</ul>
        <p className='spacing'>Effects:</p>
          <ul>{effList}</ul>
        <p className='spacing'>Similar Strain(s):</p>
          <ul>{simList}</ul>
      </div>
    </div>
)
  }

export default StrainDetails;