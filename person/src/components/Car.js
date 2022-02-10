import React from "react";
import Garage from './Garage'
import Model from "./Model";

class Car extends React.Component{

    constructor(props){
        
        super(props);
        
        this.state = {
            brand: "Hyunday",
            model: "HB20",
            color: "vermelho", 
            year: 2014
        };
        
    }
    
    changeColor = () => {
        this.setState({brand: "Honda", model: "Civic", color: "Azul", year: 2016});
    }

    test() {
        return "Text";
    }
    
    render(){

        return(
            <>
            <div>
            <p>Carro <Model></Model> da {this.state.brand} da cor {this.state.color} de ano {this.state.year}!</p>
            
            <button type="button" onClick={this.changeColor}>Mudar Dados</button>
            <Garage></Garage>
            </div>
            </>
        );
    }
}

export default Car;