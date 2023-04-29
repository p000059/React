import React from "react";

function Time(){

    return(
        <div className="time">
            {new Date().toLocaleTimeString()}
        </div>
    );
}

export default Time;