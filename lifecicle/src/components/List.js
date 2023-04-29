import React from "react";

class List extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            itens: ["A1","A2","A3","A4","A5","A6"]
        }
    }

    render(){
        return(
            <>
                <ul>
                    {this.state.itens.map((itens, index) => <li key={index}>{itens}</li>)}
                </ul>
            </>
        );
    }
}

export default List;