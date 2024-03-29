import React, { useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar = ( {searchStrain} ) => {
  const [inputStrain, setInputStrain] = useState('');

  const getInputValue = (event) => {
    // console.log(event)
    setInputStrain(event.target.value.trim())
  }

  return (
    <>
      {/* {console.log(matchingStrains)} */}
      <h3 className='directions'>Search your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form>
        <input name='search' type='text' placeholder='Search' onChange={(event) => getInputValue(event)}></input>
        <Link to='/searchResults' className='fake-button'>
          <button disabled={!inputStrain.length || inputStrain === ' '} type='submit' className='go' onClick={() => {searchStrain(inputStrain)}}>GO</button>
        </Link>
      </form>
    </>
  )
}

export default SearchBar;