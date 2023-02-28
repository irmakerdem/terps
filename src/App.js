import React, {useState, useEffect} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Routes/Routes';
import mockData from './mockData';
import { getAllStrains } from './apiCalls';

const App = () => {

  const [matchingStrains, setMatchingStrains] = useState([]);

  useEffect(() => {
    getAllStrains()
    .then(responseee => {
      console.log(responseee.data.data)
      setMatchingStrains(responseee)
    })
    .catch(err => console.log(err))
  }, [])

  const searchStrain = (input) => {
    // console.log("input ➡️", input)
    let foundStrains = mockData.filter((mock) => {
      // console.log("MOCKKKK➡️", mock)
      let name = mock.strain.toLowerCase();
      // console.log("name ➡️", name)
      if (name.includes(input.toLowerCase())) {
        // console.log("my mock➡️", mock)
        return mock;
      } else {
        return null;
      }
    })
    // console.log("foundStrains ➡️", foundStrains)
    let sortedArr = foundStrains.sort((a, b) => {
      return a.strain.localeCompare(b.strain)
    })
    setMatchingStrains(sortedArr)
  }

  const selectResult = (singleStrain) => {
    // console.log("matchingStrains ➡️", matchingStrains)
    // console.log("singleStrain ➡️", singleStrain)
    return matchingStrains.find(st => {
      return st.strain.replace(/ /g, "") === singleStrain.strainName
    })

  }

  return (
    <main className='App'>
      {console.log("matchingStrains", matchingStrains)}
      <NavBar />
      <Routes searchStrain={searchStrain} matchingStrains={matchingStrains} selectResult={selectResult} />
      <Footer />
    </main>
  );
}

export default App;
