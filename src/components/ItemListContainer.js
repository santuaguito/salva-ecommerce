import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { itemsData } from './api';


export default function ItemListContainer({greating}) {

     const [numero, setNumero] = useState(0);
     const [items ,setItems] = useState([]);
     
     useEffect(() => {
         setTimeout(()=>{
             setItems(itemsData);
             console.log(items);
         }, 2000);
     });

     const handleIncrement = () =>{
         setNumero(numero + 1);
     };

     const handleDecrement = () =>{
        setNumero(numero - 1);
    };


    return (
        <div>
            <h2 className ="title">{ greating }</h2>
            
            <div>
                <p> (numero) </p>
                <Button onClick = {handleDecrement}>-</Button>
                <Button onClick = {handleIncrement}>+</Button>
            </div>
             

        </div>
        
    )
}

