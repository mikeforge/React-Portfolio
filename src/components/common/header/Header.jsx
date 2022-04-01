import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../common';

import './Header.css';

const Header = () => {
    return (
        <section className='header'>
            <section className='header-main'>
            <section className='header-left_name'>
                <Link to='/' className='header-name'>Mike Kelly</Link>
            </section>
            <section className='header-navbar'>
                <section className='header-navigation'>
                <Navbar />
                </section>
            </section>
            </section>
        </section>
    )
}

export default Header;