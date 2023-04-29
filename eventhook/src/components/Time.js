import React from "react";

function Time(){

    return(
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
}

export default Time;