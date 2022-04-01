import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
return (
    <section className="navbar">  
        <Link to="/about" className="navbar-item">About Me</Link>
        <Link to="/portfolio" className="navbar-item">Portfolio</Link>
        <Link to="/contact" className="navbar-item">Contact Me</Link>
        <Link to="/resume" className="navbar-item">Resume</Link>
    </section>
)
}

export default Navbar;