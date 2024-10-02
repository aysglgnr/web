import React from 'react';
import Navbar from './Components/Navbar'; 
import Header from './Components/Header'; 
import Analysis from './Components/Analysis'; 
import Education from './Components/Education'; 
import FlipBook from './Components/Flipbook';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Header/> 
     <Education/>
     <div align="center">
     <FlipBook/>
     </div>
     <Analysis/>
    </div>
  );
}

export default App;
