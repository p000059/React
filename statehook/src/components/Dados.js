import React from "react";
import '../css/App.css'

function Dados(props){

    return(
        <div>
            <div>
                <h2 className="textDestak">Função Criar</h2>
            </div>
            <div><h3>Veículo</h3></div>
            <div>Marca: {props.brand}</div>
            <div>Modelo: {props.model}</div>
            <div>Ano: {props.year}</div>
            <div>Cor: {props.color}</div>
        </div>
    );
}

export default Dados;