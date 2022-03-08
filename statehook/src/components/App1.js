import React from "react";
import { useState } from "react";

export default function App1(){
    
    const [color, useColor] = useState("");

    return(
        <>
            <div>
                <p>Cor: {color}</p>        
            </div>
        </>
    );
}