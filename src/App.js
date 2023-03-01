import React, {useState, useEffect} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Routes/Routes';
// import mockData from './mockData';
import { getAllStrains } from './apiCalls';

const App = () => {

  const [matchingStrains, setMatchingStrains] = useState([]);
  const [allStrains, setAllStrains] = useState([]);

  useEffect(() => {
    getAllStrains()
    .then(responseee => {
      // console.log(responseee)
      setAllStrains(responseee.data.data)
    })
    .catch(err => console.log(err))
  }, [])

  const searchStrain = (input) => {
    // console.log("input ➡️", input)
    // console.log(allStrains)
    let foundStrains = allStrains.filter((strain) => {
      // console.log(strain)
      let name = strain.attributes.name.toLowerCase();
      // console.log(name)
      if (name.includes(input.toLowerCase())) {
        // console.log(strain)
        return strain;
      } else {
        return null;
      }
    })
    // console.log("foundStrains ➡️", foundStrains)
    let sortedArr = foundStrains.sort((a, b) => {
      return a.attributes.name.localeCompare(b.attributes.name)
    })
    setMatchingStrains(sortedArr)
    // console.log(matchingStrains)
  }

  // const searchStrain = (input) => {
  //   // console.log("input ➡️", input)
  //   let foundStrains = mockData.filter((mock) => {
  //     // console.log("MOCKKKK➡️", mock)
  //     let name = mock.strain.toLowerCase();
  //     // console.log("name ➡️", name)
  //     if (name.includes(input.toLowerCase())) {
  //       // console.log("my mock➡️", mock)
  //       return mock;
  //     } else {
  //       return null;
  //     }
  //   })
  //   // console.log("foundStrains ➡️", foundStrains)
  //   let sortedArr = foundStrains.sort((a, b) => {
  //     return a.strain.localeCompare(b.strain)
  //   })
  //   setMatchingStrains(sortedArr)
  // }

  const selectResult = (singleStrain) => {
    // console.log("matchingStrains ➡️", matchingStrains)
    // console.log("singleStrain ➡️", singleStrain)
    return matchingStrains.find(st => {
      return st.attributes.name.replace(/ /g, "") === singleStrain.strainName
    })

  }

  return (
    <main className='App'>
      {/* {console.log("matchingStrains", matchingStrains)} */}
      <NavBar />
      <Routes allStrains ={allStrains} searchStrain={searchStrain} matchingStrains={matchingStrains} selectResult={selectResult} />
      <Footer />
    </main>
  );
}

export default App;
