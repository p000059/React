import React from "react";

function Brand(props){

    const brand = props.brand;

    return(
        <>
        {brand.length > 0 &&
            <p>Total de marca: {brand.length}</p>
        }
        </>
    );
}

export default Brand;