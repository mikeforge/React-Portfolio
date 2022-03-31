import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

const Header = () => {
    return (
        <section className='header'>
            <section className='header-name'>
                <a href='/' className='header-name'>Mike Kelly</a>
            </section>
            <section className='header-navbar'>
                <Navbar />
            </section>

        </section>
    )
}

export default Header;