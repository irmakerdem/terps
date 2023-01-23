import React, { useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar = ( {searchStrain} ) => {
  const [inputStrain, setInputStrain] = useState('');
  // const [matchingStrains, setmatchingStrains] = useState({});

  const getInputValue = (event) => {
    //event is the click in search bar
    setInputStrain(event.target.value)
    // console.log(inputStrain)
    //what we tyoed get's svaed as state
    // searchStrain(event.target.value)
  }

  // const searchStrain = () => {
  //   console.log(inputStrain)
  //   let mock = mockData.find((mock) => {
  //     // console.log(mock)
  //     if (inputStrain === mock.strain) {
  //       console.log(mock.effects)
  //       console.log(matchingStrains)
  //       return mock
  //     }
  //   })
  //   console.log(mock)
  //   setmatchingStrains({...matchingStrains, mock})
  //   console.log(matchingStrains)
  //   return matchingStrains
  // }

  return (
    <>
      {/* {console.log(matchingStrains)} */}
      <h3 className='directions'>Search your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form>
        <input name='search' type='text' placeholder='Search' onChange={ (event) => getInputValue(event) }></input>
      </form>
      <Link to='/searchResults' className='fake-button'>
        <button className='go' onClick={() => {searchStrain(inputStrain)}}>GO</button>
      </Link>
    </>
  )
}

export default SearchBar;