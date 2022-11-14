import React from 'react';
import './Dropdown.scss';

const Dropdown = () => {
  return (
    <>
      <p>Select your favorite cultivar to view cultivars of similar terpene profiles.</p>
      <form>
        <select>
          <option value='choose'>🌱 Choose A Cultivar:</option>
          <option value='Blue Dream'>Blue Dream</option>
          <option value='Grandaddy Purple'>Grandaddy Purple</option>
          <option value='OG Kush'>OG Kush</option>
        </select>
        <button>GO!</button>
      </form>   
    </>
  )
}

export default Dropdown;