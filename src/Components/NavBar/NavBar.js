import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <h1 className='title'>GET TERP'D</h1>
      <div className='nav-tabs-container'>
        <h2>Terpenes</h2>      
        <h2>About Us</h2>
      </div>
    </nav>
  )
}

export default NavBar;