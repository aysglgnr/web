import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='/' className='logo'>
                <img src={logo} alt='' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={500}>Header</Link></li>
                <li><Link to='education' smooth={true} duration={500}>Education</Link></li>
                <li><Link to='map2' smooth={true} duration={500}>Map</Link></li>
                {/* Gereksiz tekrarları kaldırdım */}
            </ul>
        </nav>
    );
}

export default Navbar;
