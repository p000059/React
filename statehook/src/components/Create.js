import React from "react";
import Dados from "./Dados";
import '../css/App.css'

function Create(){

    const br = () => {
        return ('GM')
    }
    const md = (definition) => {
        return ('Camaro ' + definition)
    }
    const ye = () => {
        return (2016)
    }
    const cl = () => {
        return ('Amarelo')
    }

    return(
        <div className="text">
            <Dados brand={br()} model={md('Concept')} year={ye()} color={cl()}/>
        </div>
    );
}

export default Create;