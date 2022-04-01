import React from 'react';

import './Navbar.css';


const Navbar = () => {
return (
    <section className="navbar">  
        <a href="/about" className="navbar-item">About Me</a>
        <a href="/portfolio" className="navbar-item">Portfolio</a>
        <a href="/contact" className="navbar-item">Contact Me</a>
        <a href="/resume" className="navbar-item">Resume</a>
    </section>
)
}

export default Navbar;