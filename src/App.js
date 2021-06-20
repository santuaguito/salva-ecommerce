import React from 'react';
import './App.css';
import './components/Navbar';
import './components/Catalogo';

import Navbar from './components/Navbar';

class App extends React.Component{
  render(){
    return(
      <div className = "container">
        <Navbar/>
      </div>
    )
    
  }
 
}

export default App;
