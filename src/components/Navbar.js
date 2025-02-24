import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import burgermenu from '../images/burger-menu.svg'
import closemenu from '../images/close-icon.svg'
import loewenmutlogo from '../images/loewenmut-logo.svg'
import HomeMenu from './menu_components/HomeMenu';
import Menu2 from './menu_components/Menu2';
// import copyrightImg from '../images/copyright_img.png'
// import icon from '../images/accordion-icon.svg'
import Menu3 from './menu_components/Menu3';

const Navbar = () => {
    const [active, setActive] = useState({ link1: false, link2: false, link3: false, link4: false })
    const [hover, setHover] = useState({ link1: false, link2: false, link3: false, link4: false })
    // const [isClicked, setClicked ] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHoverEnabled, setIsHoverEnabled] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsHoverEnabled(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('body_overflow', !menuOpen);
    };

    const handleActive = (link) => {
        if (!isHoverEnabled) {
            setActive((prev) => ({ ...prev, [`link${link}`]: !prev[`link${link}`] }));
        }
    };

    const handleMouseEnter = (link) => {
        if (isHoverEnabled) {
            setHover((prev) => ({ ...prev, [`link${link}`]: true }));
        }
    };

    const handleMouseLeave = (link) => {
        if (isHoverEnabled) {
            setTimeout(() => {
                setHover((prev) => ({ ...prev, [`link${link}`]: false }));
            }, 100);
        }
    };


    return (
        <div>
            <header>
                <nav className={`navbar navbar-expand-lg ${sticky ? 'sticky' : ''}`}>
                    <div className='nav_overlay'></div>
                    <div className='container-xxl'>
                        <Link className='navbar-brand' to='/'><img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Frame_8cd1fd56fd.svg' alt='logo' /></Link>
                        <button className='navbar-toggler' onClick={toggleMenu} type='button' data-bs-target='#mainNavbar' aria-expanded='false'>
                            <img src={burgermenu} alt='menu' />
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id='mainNavbar'>
                            <div className='open--menu--header'>
                                <img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Frame_8cd1fd56fd.svg' alt='menu' className='open-menu-logo' />
                                <img src={closemenu} alt='menu' className='close_navbtn' onClick={toggleMenu} />
                            </div>
                            <div className='header-menu-h ms-auto'>
                                <ul className='navbar-nav main--menu'>
                                    <li className='nav-item megamenu-fw apotheke_menu'>
                                        <Link className={`nav-link link1 ${(active.link1 || hover.link1) && 'active'}`} to="#" onClick={() => handleActive(1)}
                                            onMouseEnter={() => handleMouseEnter(1)}
                                            onMouseLeave={(e) => {
                                                if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget.closest('.home_menu')) {
                                                    handleMouseLeave(1);
                                                }
                                            }}
                                        >Apotheke <b className='caret'></b></Link>
                                        {(active.link1 || hover.link1) && <ul
                                            onMouseEnter={() => handleMouseEnter(1)}
                                            onMouseLeave={(e) => {
                                                if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget?.closest('.apotheke_menu')) {
                                                    handleMouseLeave(1);
                                                }
                                            }}
                                            className="dropdown-menu d-block half menu home_menu">
                                            <HomeMenu />
                                        </ul>}
                                    </li>
                                    <li className='nav-item megamenu-fw praxis_menu'>
                                        <Link className={`nav-link link2 ${(active.link2 || hover.link2) && 'active'}`} to="#" onClick={() => handleActive(2)}
                                            onMouseEnter={() => handleMouseEnter(2)}
                                            onMouseLeave={(e) => {
                                                if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget?.closest('.menu1')) {
                                                    handleMouseLeave(2);
                                                }
                                            }}
                                        >Praxis <b className='caret'></b></Link>
                                        {(active.link2 || hover.link2) && <ul
                                            onMouseEnter={() => handleMouseEnter(2)}
                                            onMouseLeave={(e) => {
                                                if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget.closest('.praxis_menu')) {
                                                    handleMouseLeave(2);
                                                }
                                            }}
                                            className="dropdown-menu d-block half menu1">
                                            <Menu2 />
                                        </ul>}
                                    </li>
                                    <li className='nav-item megamenu-fw ubersicth_menu'>
                                        <Link className={`nav-link link3 ${(active.link3 || hover.link3) && 'active'}`} to="#" onClick={() => handleActive(3)}
                                            onMouseEnter={() => handleMouseEnter(3)}
                                            onMouseLeave={(e) => {
                                                if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget.closest('.menu2')) {
                                                    handleMouseLeave(3);
                                                }
                                            }}
                                        >Ernährungsdiagnostik <b className='caret'></b></Link>
                                        {(active.link3 || hover.link3) && <ul
                                            onMouseEnter={() => handleMouseEnter(3)}
                                            onMouseLeave={(e) => {
                                                if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget.closest('.ubersicth_menu')) {
                                                    handleMouseLeave(3);
                                                }
                                            }}
                                            className="dropdown-menu d-block half menu2">
                                            <Menu3 />
                                        </ul>}
                                    </li>
                                    <li className='nav-item'>
                                        <Link className={`nav-link link4 ${(active.link4 || hover.link4) && 'active'}`} to='/ubersicht-gesundheitsthemen' onClick={() => handleActive(4)}
                                            onMouseEnter={() => handleMouseEnter(4)}
                                            onMouseLeave={() => handleMouseLeave(4)}
                                        >Gesundheitsthemen</Link>
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
                                        <Link className="extra-nav-link nav-link" to="/jobs">Jobs</Link>
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
