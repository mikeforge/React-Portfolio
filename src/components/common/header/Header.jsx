import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

const Header = () => {
    return (
        <section className='header'>
            <section className='header-main'>
            <section className='header-left_name'>
                <a href='/' className='header-name'>Mike Kelly</a>
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