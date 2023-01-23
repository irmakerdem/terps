import React from 'react';
import { Link } from 'react-router-dom';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain, searchStrain} ) => {
  const terpList = selectedStrain.terpenes.map((terp) => <li key={terp}>{terp}</li>);
  const effList = selectedStrain.effects.map((eff) => <li key={eff}>{eff}</li>);
  const simList = selectedStrain.similar.map((cult) => {
    return <Link to={`/${cult}`} onClick={() => {searchStrain(cult)}} key={cult}><li key={cult}>{cult}</li></Link>
  })

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