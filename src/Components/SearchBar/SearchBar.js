import React, { useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';
// import mockData from './../../mockData';

const SearchBar = ( {searchStrain} ) => {
  const [inputStrain, setInputStrain] = useState('');
  // const [matchingStrain, setMatchingStrain] = useState({});

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
  //       console.log(matchingStrain)
  //       return mock
  //     }
  //   })
  //   console.log(mock)
  //   setMatchingStrain({...matchingStrain, mock})
  //   console.log(matchingStrain)
  //   return matchingStrain
  // }

  return (
    <>
      {/* {console.log(matchingStrain)} */}
      <h3 className='directions'>Search your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form>
        <input name='search' type='text' placeholder='Search' onChange={ (event) => getInputValue(event) }></input>
      </form>
      <Link to='/searchresults' className='fake-button'>
        <button className='go' onClick={() => {searchStrain(inputStrain)}}>GO</button>
      </Link>
    </>
  )
}

export default SearchBar;