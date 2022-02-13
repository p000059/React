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
                <Link to="./pages/Blogs">Blogs</Link>
            </li>
            <li>
                <Link to="../pages/Contact.js">Contact</Link>
            </li>
            <li>
                <Link to="../pages/Register.js">Register</Link>
            </li>
            <li>
                <Link to="../components/Form.js">Form</Link>
            </li>
            <li>
                <Link to="../components/FormFunction.js"></Link>
            </li>
            <li>
                <Link to="../components/FormFunctionOne.js"></Link>
            </li>
            </ul>
        </nav>
    
        <Outlet />
        </>
    );    
}