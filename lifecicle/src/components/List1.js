import React from "react";
import Item from "./Item";

function List1() {

    const itens = [
        {id: 1, name: 'Marcelo', email: 'marcelo.acad@gmail.com', complete: false},
        {id: 2, name: 'Ruth', email: 'ruth.acad@gmail.com', complete: true},
        {id: 3, name: 'Mauricio', email: 'mauricio.acad@gmail.com', complete: false},
        {id: 4, name: 'Evelyn', email: 'evelyn.acad@gmail.com', complete: false},
        {id: 5, name: 'Natanael', email: 'natanael.acad@gmail.com', complete: false},
        {id: 6, name: 'Lucas', email: 'lucas.acad@gmail.com', complete: false},
        {id: 7, name: 'Priscila', email: 'priscila.acad@gmail.com', complete: false}
    ];
    
    return(
        <>
            <ul>
                {itens.map((item) => <Item key={item.id} id={item.id} name={item.name} email={item.email} complete={item.complete}/>)}
            </ul>
        </>
    );
    
}

export default List1;