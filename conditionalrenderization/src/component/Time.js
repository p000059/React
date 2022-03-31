import React from "react";

export default function Time(){

    const cumprimento = () => {
        
        const hora = new Date().getHours()

        if(hora >= 0 && hora < 13){

            return <p>
                Bom dia!
            </p>
        }else if(hora >= 13 && hora < 18){

            return <p>
                Boa tarde!
            </p>
        }else{
            return <p>
                Boa Noite!
            </p>
        }
    }

    return(
        <footer className="time">
            {new Date().toLocaleTimeString()}
            {cumprimento()}
        </footer>
    )
}