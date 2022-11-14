import React from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import trichomes from './../../assets/trichome-logo.png';
import './HomeView.scss';

const HomeView = () => {
  return (
    <div className='homeview-container'>
      <img src={trichomes} alt='trichomes illustration' className='trichomes'></img>
      <Dropdown />
    </div>
  )
}

export default HomeView;