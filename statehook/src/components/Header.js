import React from "react";
import Logo from '../img/horizontal_on_white_by_logaster.png'

function Header(){
    return(
        <div className="row">
            <div className="col">
                <header className="box">
                    <img src={Logo} alt="Logo" />
                </header>
            </div>
        </div>
    );
}

export default Header;
