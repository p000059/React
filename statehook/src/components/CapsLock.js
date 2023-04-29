import React from 'react';

function CapsLock(props){
    const textInput = props.children;
    const textCaps = textInput.toUpperCase();
    
    return <div>{textCaps}</div>
}

function Pagina(){
    return <CapsLock>Show!!</CapsLock>
}