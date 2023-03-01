import React from 'react';
import { Link } from 'react-router-dom';
import './StrainDetails.scss';

const StrainDetails = ( {selectedStrain, searchStrain, allStrains} ) => {

  console.log(selectedStrain.attributes.flavors.data)
  const terpList = selectedStrain.attributes.product_terpenes.map((terp) => <li key={terp.terpene.data.id}>{terp.terpene.data.attributes.name}</li>);
  const effList = selectedStrain.attributes.effects.data.map((eff) => <li key={eff.id}>{eff.attributes.name}</li>);
  const simList = allStrains.map((cult) => {
    return <Link to={`/${cult.attributes.name}`.replace(/\s/g, '')} onClick={() => {searchStrain(cult.attributes.name)}} key={cult.id}><li>{cult.attributes.name}</li></Link>
  })
  const cannabList = selectedStrain.attributes.product_cannabinoids.map((cann) => <li key={cann.id}>{cann.cannabinoid.data.attributes.name} : {cann.amount} </li>);
  const flavList = selectedStrain.attributes.flavors.data.map((flav) => <li key={flav.id}>{flav.attributes.name}</li>);
  const aromaList = selectedStrain.attributes.aromas.data.map((arom) => <li key={arom.id}>{arom.attributes.name}</li>);


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
          <ul>{simList}</ul>
        <p className='spacing'>Aromas:</p>
          <ul>{aromaList}</ul> 
        <p className='spacing'>Flavors:</p>
          <ul>{flavList}</ul>  
      </div>
    </div>
  )
}

export default StrainDetails;