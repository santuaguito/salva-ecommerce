import React from 'react';
import './navBar.css';



function Navbar() {
    return (
        <div className = "Navbar">
            <h1>Salva Tienda de Ropa</h1>
            <nav className = "Nav">   
                    <ul className = "NavMenu">
                        <li><button className ="boton"><a href = "#">Inicio</a></button></li>
                        <li><button className ="boton"><a href = "#">Productos</a></button></li>
                        <li><button className ="boton"><a href = "#">Nosotros</a></button></li>
                        <li><button className ="boton"><a href = "#">Contacto</a></button></li>

                    </ul>
       
                
            </nav>
            
           
        </div>
        
    )
    
}


export default Navbar;



