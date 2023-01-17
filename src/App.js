import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Routes/Routes';
import mockData from './mockData';

const App = () => {

  const [matchingStrains, setmatchingStrains] = useState([]);

  // const searchStrain = (inputStrain) => {
  //   // console.log(inputStrain)
  //   let foundStrain = mockData.find((mock) => {
  //     // console.log(mock)
  //     if (inputStrain === mock.strain) {
  //       console.log(mock.effects)
  //       console.log(matchingStrains)
  //       return mock
  //     }
  //   })
  //   // console.log(mock)
  //   setmatchingStrains(foundStrain)
  //   console.log(matchingStrains)
  //   // return matchingStrains
  // }

  const searchStrain = (inputStrain) => {
    // console.log(inputStrain)
    let foundStrain = mockData.filter((mock) => {
      // console.log("MOCKKKK", mock)
      let name = mock.strain.toLowerCase()
      if (name.includes(inputStrain.toLowerCase())) {
        // console.log("my mock", mock)
        return mock
      }
    })
    setmatchingStrains(foundStrain)
  }

  const selectResult = (matchedStrain) => {
    return matchingStrains.find(st => st.strain === matchedStrain.strainName)
  }

  return (
    <main className='App'>
      <NavBar />
      <Routes searchStrain={searchStrain} matchingStrains={matchingStrains} selectResult={selectResult}/>
      <Footer />
    </main>
  );
}

export default App;
