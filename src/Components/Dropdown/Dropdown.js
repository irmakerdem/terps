import React from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className='dropdown-container'>
      <h3 className='directions'>Select your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form className='dropdown'>
        <select className='dropdown-values'>
          <option value='choose'>🌱 Choose a Cultivar:</option>
          <option value='Blue Dream'>Blue Dream</option>
          <option value='Grandaddy Purple'>Grandaddy Purple</option>
          <option value='OG Kush'>OG Kush</option>
        </select>
        <br></br>
        {/* <Link to={`/${id}`}>
          <button className='button'>GO!</button>
        </Link> */}
        <button className='button'>GO!</button>
      </form>
    </div>
  )
}

export default Dropdown;