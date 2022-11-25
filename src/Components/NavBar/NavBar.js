import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <button className='title'>GET TERP'D</button>
      </Link>
      <div className='nav-tabs-container'>
        <Link to='/terpenes'>
          {/* <h2 className='terpenes'>Terpenes</h2>    */}
          <button className='terpenes'>Terpenes</button>      
        </Link>
        <Link to='about'>
          {/* <h2 className='about'>About Us</h2> */}
          <button className='about'>About Us</button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;