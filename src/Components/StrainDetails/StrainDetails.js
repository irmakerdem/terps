import React from 'react';
// import { Link } from 'react-router-dom';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain, searchStrain} ) => {

  console.log(selectedStrain)
  const terpList = selectedStrain.attributes.product_terpenes.map((terp) => <li key={terp.terpene.data.id}>{terp.terpene.data.attributes.name}</li>);
  const effList = selectedStrain.attributes.effects.data.map((eff) => <li key={eff.id}>{eff.attributes.name}</li>);
  // const simList = selectedStrain.similar.map((cult) => {
  //   return <Link to={`/${cult.attributes.name}`.replace(/\s/g, '')} onClick={() => {searchStrain(cult)}} key={cult}><li>{cult}</li></Link>
  // })
  const cannabList = selectedStrain.attributes.product_cannabinoids.map((terp) => <li key={terp.id}>{terp.cannabinoid.data.attributes.name} : {terp.amount} </li>);

  return (
    <div className='details-container'>
      <h1 className='strain-name'>{selectedStrain.attributes.name}</h1>
      <h3 className='strain-name'>{selectedStrain.attributes.description}</h3>
      <div className='strain-details'>
        <p className='spacing'>Terpenes:</p>
          <ul>{terpList}</ul>
        <p className='spacing'>Effects:</p>
          <ul>{effList}</ul>
        <p className='spacing'>Cannabinoids (%):</p>
          <ul>{cannabList}</ul>
        <p className='spacing'>Similar Strain(s):</p>
          {/* <ul>{simList}</ul> */}
      </div>
    </div>
  )
}

export default StrainDetails;