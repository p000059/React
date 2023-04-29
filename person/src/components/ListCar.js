import React from "react";
import Car from "./Car";

function ListCar(){

    const car = ['Ford Mustang','Fiat Punto','Wolks Passat'];

    return (
        <>
            <ul>
                {car.map((car) => <Car brand="car"></Car>)}
            </ul>
        </>
    );
}

export default ListCar;
