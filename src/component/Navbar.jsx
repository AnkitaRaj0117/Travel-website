import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg"
import "./RegistrationForm.css";
import RegistrationForm from "./RegistrationForm";


function Navbar() {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(state ? false : true);
    }

    return (
        <>
            <nav className="NavbarItems">
                <div className={state ? "left active" : "left"}>
                    <img src={logo}></img>
                    <h1 className="navbar-logo">JANAKK</h1>
                </div>
                <div className="menu-icons" onClick={handleClick}>
                    <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={state ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/" className="nav-links"><i className="fa-solid fa-house-user"></i>Home</Link></li>
                    <li><Link to="/about" className="nav-links"><i className="fa-solid fa-circle-info"></i>About</Link></li>
                    <li><Link to="/service" className="nav-links"><i className="fa-solid fa-briefcase"></i>Service</Link></li>
                    <li><Link to="/contact" className="nav-links"><i className="fa-solid fa-address-book"></i>Contact</Link></li>
                    <li><Link to="/regis"><button>Sign Up</button></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;