import React from "react";


class Garage extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            condition: "Vazia"
        }
    }

    changeConditionGarage = (msg) => {
        this.setState({condition: msg});
    }

    render(){

        return (
            <>
            <div>
                <div>
                    <p>Garage {this.state.condition}</p>
                </div>
                <div>
                    <button type="button" onClick={() => this.changeConditionGarage("Ocupada")}>Mudar Condição</button>
                </div>
            </div>
            </>
        );
    }
}

export default Garage;