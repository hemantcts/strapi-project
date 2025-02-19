import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import burgermenu from '../images/burger-menu.svg'
import closemenu from '../images/close-icon.svg'
import loewenmutlogo from '../images/loewenmut-logo.svg'
import HomeMenu from './menu_components/HomeMenu';
import Menu2 from './menu_components/Menu2';
import copyrightImg from '../images/copyright_img.png'
import icon from '../images/accordion-icon.svg'
import Menu3 from './menu_components/Menu3';

const Navbar = () => {
    const [active, setActive] = useState({ link1: false, link2: false, link3: false, link4: false })

    const handleActive = (link) => {
        let obj = { link1: false, link2: false, link3: false, link4: false };
        if (link === 1) {
            if (!active.link1) {
                obj.link1 = true;
            }
        }
        if (link === 2) {
            if (!active.link2) {
                obj.link2 = true;
            }
        }
        if (link === 3) {
            if (!active.link3) {
                obj.link3 = true;
            }
        }
        if (link === 4) {
            if (!active.link4) {
                obj.link4 = true;
            }
        }
        setActive(obj);
    }

    return (
        <div>
            <header>
        <nav className='navbar navbar-expand-lg'>
            <div className='nav_overlay'></div>
            <div className='container-xxl'>
                <Link className='navbar-brand' to='/'><img src={logo} alt='logo' /></Link>
                <button className='navbar-toggler' type='button' data-bs-target='#mainNavbar' aria-expanded='false'>
                    <img src={burgermenu} alt='menu' />
                </button>
                <div className='collapse navbar-collapse' id='mainNavbar'>
                <div className='open--menu--header'>
                        <img src={logo} alt='menu' className='open-menu-logo' />
                        <img src={closemenu} alt='menu' className='close_navbtn' />
                    </div>
                    <div className='header-menu-h ms-auto'>
                        <ul className='navbar-nav main--menu'>
                            <li className='nav-item megamenu-fw apotheke_menu'>
                                <Link className={`nav-link link1 ${active.link1 && 'active'}`} to="#" onClick={() => handleActive(1)}>Apotheke <b className='caret'></b></Link>
                                {active.link1 && <ul className="dropdown-menu half menu home_menu">
                                    <HomeMenu />
                                </ul>}
                            </li>
                            <li className='nav-item megamenu-fw praxis_menu'>
                                <Link className={`nav-link link2 ${active.link2 && 'active'}`} to="#" onClick={() => handleActive(2)}>Praxis <b className='caret'></b></Link>
                                {active.link2 && <ul className="dropdown-menu half menu">
                                    <Menu2 />
                                </ul>}                        
                            </li>
                            <li className='nav-item megamenu-fw ubersicth_menu'>
                                <Link className={`nav-link link3 ${active.link3 && 'active'}`} to="#" onClick={() => handleActive(3)}>Ernährungsdiagnostik <b className='caret'></b></Link>
                                {active.link3 && <ul className="dropdown-menu half menu">
                                    <Menu3 />
                                </ul>}
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link link4 ${active.link4 && 'active'}`} to="#" onClick={() => handleActive(5)}>Gesundheitsthemen</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav top_menu'>
                            <li className='nav-item'>
                                <div className='search_hdr position-relative'>
                                    <input type="text" className='search_bar' placeholder='Proin gravida' />
                                    <div className="search_icon"></div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <Link className="extra-nav-link nav-link" to="#">Jobs</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="extra-nav-link nav-link" to="#">Kontakte</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hdr_copygt'>
                        <p>© Copyright 2025 | MedZentrum AG, Pfungen | Design by <a href='https://www.loewenmut.ch/' target='_blank'>Loewenmut. <img src={loewenmutlogo} alt='loewenmut' /></a></p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        </div>
    )
}

export default Navbar
