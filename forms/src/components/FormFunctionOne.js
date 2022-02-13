import React, {useEffect, useState} from "react";

export  default function FormFunctionOne(){

    //Desestruturação
    const [name, setName] = useState(undefined);
    
    useEffect(

        () => {
            if(name === undefined){
                setName(sessionStorage.getItem('name') || '')
            }
            else{
                sessionStorage.getItem('name', name)
            }
        }, [name]
    );

    return(
        <>
            <div>
                Nome: <input type="text" value={name} onChange={(event)=> {setName(event.target.value)} }></input>
            </div>
            <div>{name}</div>
        </>
    );

}
