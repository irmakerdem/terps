import React from 'react';
import { Link } from 'react-router-dom';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain} ) => {
  // const effList = selectedStrain.effects.join(', ')
  const terpList = selectedStrain.terpenes.map((terp) => <li key={terp}>{terp}</li>);
  const effList = selectedStrain.effects.map((eff) => <li key={eff}>{eff}</li>);
  const simList = selectedStrain.similar.map((cult) => {
    // console.log(cult)
    //cult is string
    return <li key={cult}>{cult}</li>
  })
  // console.log(simList)
  //simlist is array (but also object?)
  
//currently when i search sour and click ONE similar strain, 
//both similar strain names appear in the URL meaning Link to is not set properly
//page also breaks

  return (
    <div className='details-container'>
      <h1 className='strain-name'>{selectedStrain.strain}</h1>
      <div className='strain-details'>
        <p className='spacing'>Terpenes:</p>
        <ul>{terpList}</ul>
        <p className='spacing'>Effects:</p>
          <ul>{effList}</ul>
        <p className='spacing'>Similar Strain(s):</p>
          <Link to={`/${selectedStrain.similar}`}>
            <ul>{simList}</ul>
          </Link>
      </div>
    </div>
  )
}

export default StrainDetails;