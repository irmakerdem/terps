import React from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <>
      <h3 className='directions'>Search your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form>
        <input name='search' type='text' placeholder='Search'></input>
      </form>
      <Link to='/details'>
        <button className='go'>GO</button>
      </Link>
    </>
  )
}

export default SearchBar;