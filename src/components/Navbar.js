import React from "react"
import logo from './images/logo.png'
import 'styles/Nav.css';


export default function Navbar() {
    return (
        <nav>
        <img src={logo} alt="travelers logo " />
        </nav>
    )
}