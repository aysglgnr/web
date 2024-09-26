import React from 'react';
import Navbar from './Components/Navbar'; 
import Header from './Components/Header'; 
import Analysis from './Components/Analysis'; 
import Education from './Components/Education'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Header/> 
     <Education/>
     <Analysis/>
     
    </div>
  );
}

export default App;
