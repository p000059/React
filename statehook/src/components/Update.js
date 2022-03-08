import React, { useState } from "react";

export default function Update(){

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Fiesta",
        year: 2015,
        color: "Prata"
    });

    const updateCar = () => {
        setCar(previousState => {
            return {
                ...previousState, 
                brand: "Fiat",
                model: "Cronos",
                year: 2022,
                color: "Azul"
            }
        });
    }

    return(
        <div>
            <div>
                <h2>Função Update</h2>
            </div>
            <div>
                <div><h3>Veículo</h3></div>
                <div>Marca: {car.brand}</div>
                <div>Modelo: {car.model}</div>
                <div>Ano: {car.year}</div>
                <div>Cor: {car.color}</div>
            </div>
            <div>
                <button type="button" onClick={updateCar} >Mudar</button>
            </div>
        </div>
    );
}