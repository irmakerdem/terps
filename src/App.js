import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Routes/Routes';
import mockData from './mockData';

const App = () => {

  const [matchingStrain, setMatchingStrain] = useState({});

  // const searchStrain = (inputStrain) => {
  //   // console.log(inputStrain)
  //   let foundStrain = mockData.find((mock) => {
  //     // console.log(mock)
  //     if (inputStrain === mock.strain) {
  //       console.log(mock.effects)
  //       console.log(matchingStrain)
  //       return mock
  //     }
  //   })
  //   // console.log(mock)
  //   setMatchingStrain(foundStrain)
  //   console.log(matchingStrain)
  //   // return matchingStrain
  // }

  const searchStrain = (inputStrain) => {
    // console.log(inputStrain)
    let foundStrain = mockData.find((mock) => {
      // console.log(mock)
      let name = mock.strain.toLowerCase()
      if (name.includes(inputStrain.toLowerCase())) {
        console.log(mock.effects)
        console.log(matchingStrain)
        return mock
      }
    })
    // console.log(mock)
    setMatchingStrain(foundStrain)
    console.log(matchingStrain)
    // return matchingStrain
  }

  return (
    <main className='App'>
      <NavBar />
      <Routes searchStrain={searchStrain} matchingStrain={matchingStrain}/>
      <Footer />
    </main>
  );
}

export default App;
