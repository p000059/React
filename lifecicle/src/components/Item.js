import React from "react";

function Item(props) {
    
    return <li>{props.id} - {props.name} , {props.email} {props.complete}</li>;
    
}

export default Item;