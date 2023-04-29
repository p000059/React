import React from "react";
import Name from "./Name";
import Email from "./Email";

function Form(){
    
    return(
        <>
        <form>
            <div>
                <Name></Name>
            </div>
            <div>
                <Email></Email>
            </div>            
        </form>
        </>
    );
}

export default Form;