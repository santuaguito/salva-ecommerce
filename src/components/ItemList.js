// aca corro los datos
import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ropa: []
        };
    }
componentDidMount(){
fetch('https://mocki.io/v1/aff56424-b4d0-49f0-aaeb-eabd29e3ceae')
.then (results =>{
    return results.json();
}).then(data => {
    let Imagen = data.results.map((pic) =>{
        return(
            <div key ={key.reuslts}>
                <img src ={pic.Imagen.medium}/>
            </div>
        )
    })
})
}

render(){
    return(
        <div>
            {this.state.Imagen}
        </div>
    )
}