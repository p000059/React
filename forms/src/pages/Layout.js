import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout(){
    
    return(
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="./Blogs">Blogs</Link>
            </li>
            <li>
                <Link to="./Contact">Contact</Link>
            </li>
            <li>
                <Link to="./Register">Register</Link>
            </li>
            <li>
                <Link to="./FormOne">Form One</Link>
            </li>
            <li>
                <Link to="./FormFunction">Form Function</Link>
            </li>
            <li>
                <Link to="./Form">Forms</Link>
            </li>
            </ul>
        </nav>
    
        <Outlet />
        </>
    );    
}