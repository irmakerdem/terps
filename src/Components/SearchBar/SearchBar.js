import React, { useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';
// import mockData from './../../mockData';

const SearchBar = () => {
  const [myStrain, setMyStrain] = useState("");

  const data = [
    {
      "id": 1,
      "strain": "Gelato",
      "terpenes": ["linalool, limonene"],
      "effects": ["calm"],
      "similar strains": ["Purple Punch"]
    },
    {
      "id": 2,
      "strain": "Sour Diesel",
      "terpenes": ["linalool, humulene, camphene"],
      "effects": ["euphoric", "focus", "cerebral"],
      "similar strains": ["Skywalker OG", "Gelatti Cake"]
    },
    {
      "id": 3,
      "strain": "Kush Envy",
      "terpenes": ["limonene"],
      "effects": ["anti-inflammatory", "uplifting"],
      "similar strains": ["Wedding Cake", "Crescendo"]
    },
  ]

  const getInputValue = (event) => {
    //event is the click in search bar
    setMyStrain(event.target.value) 
    // console.log(event.target.value)
    return event.target.value
  }

  const searchStrain = () => {
    // console.log(myStrain)
    data.find((mock) => {
      console.log(mock)
      if (myStrain === mock.strain) {
        console.log(mock.effects)
        return mock
      }
    })
  }

  return (
    <>
      <h3 className='directions'>Search your favorite cultivar to view cultivars of similar terpene profiles.</h3>
      <form>
        <input name='search' type='text' placeholder='Search' onChange={ (event) => getInputValue(event) }></input>
      </form>
      <Link to='/details'>
        <button className='go' onClick={() => searchStrain()}>GO</button>
      </Link>
    </>
  )
}

export default SearchBar;