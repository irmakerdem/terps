import React from 'react';
import './DetailsView.scss';

const DetailsView = ( {matchingStrain} ) => {
  // console.log(typeof matchingStrain)
  let myArr = matchingStrain.map(str => str)
  // console.log(myArr[0].strain)
  return (
      <div className='details-container'>
        {/* {console.log(matchingStrain)} */}
        <h1>{myArr[0].strain}</h1>
        <p>Terpenes: {myArr[0].terpenes}</p>
        <p>Effects: {myArr[0].effects}</p>
        <p>Similar Strain(s): {myArr[0].similar}</p>
      </div>
  )
}

export default DetailsView;