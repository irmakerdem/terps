import React from 'react';
import './DetailsView.scss';

const DetailsView = () => {
  return (
    <div className='details-container'>
      <p>OG Kush</p>
      {/* <p>Terpenes: {data.terpenes}</p> */}
      <p>Terpenes:</p>
      <p>Effects:</p>
      <p>Similar Strains:</p>
    </div>
  )
}

export default DetailsView;