import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemList';



class App extends React.Component{
  
  render(){
    const greating = "Bienvenidos a Salva Tienda de ropa";
    return(
      <div className = "container">
        <Navbar/>
        <ItemListContainer greating={ greating }/>
        
      </div>
    )
    
  }
 
}

export default App;

