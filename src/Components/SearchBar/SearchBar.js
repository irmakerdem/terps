import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <>
      <h3 className='directions'>Search your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form>
        <input name='search' type='text' placeholder='Search'></input>
      </form>
    </>
  )
}

export default SearchBar;