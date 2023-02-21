import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Routes/Routes';
import mockData from './mockData';

const App = () => {

  const [matchingStrains, setmatchingStrains] = useState([]);

  // const handleEnter = (event) => {
  //   console.log(event)
  //   event.preventDefault();
  // }

  const searchStrain = (inputStrain) => {
    // console.log(event)
    // event.preventDefault();
    // console.log(inputStrain)
    // handleEnter();
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
