import React from "react";
import { useState } from "react";

export default function Read(){

    const [car] = useState({

        brand: "Ford",
        model: "Fiesta",
        year: 2015,
        color: "Prata"
    });

    return(
        <div className="text">
            <div>
                <h2 className="textDestak">Função Read</h2>
            </div>
            <div>
                <div><h3>Veículo</h3></div>
                <div>Marca: {car.brand}</div>
                <div>Modelo: {car.model}</div>
                <div>Ano: {car.year}</div>
                <div>Cor: {car.color}</div>
            </div>
        </div>
    );
}
