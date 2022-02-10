import React from "react";

function Car2(props) {
    return <li>Carro da marca {props.brand}</li>
}

function App2(props){

    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    
    return (
        <>
        <ul>
            {cars.map((cars) => <Car2 key={cars.id} brand={cars.brand} />)}
        </ul>
        </>
    );
}


export default App2;