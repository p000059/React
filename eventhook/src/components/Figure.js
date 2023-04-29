import React, { useState } from "react";
import LampOn from '../img/on.jpg';
import LampOff from '../img/off.jpg';

export default function Figure(){

    const [on, setOn] = useState(false);

    return(
        <div>
            <figure className="figureFull">
                <img src={on ? LampOn : LampOff} alt="On" />        
            </figure>
            <button className="button" onClick={() => setOn(!on)}>{on ? 'Desligar' : 'Ligar'}</button>
        </div>
    )
}