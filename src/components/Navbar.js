import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg'
import burgermenu from '../images/burger-menu.svg'
import closemenu from '../images/close-icon.svg'
import loewenmutlogo from '../images/loewenmut-logo.svg'
import HomeMenu from './menu_components/HomeMenu';
import Menu2 from './menu_components/Menu2';
// import copyrightImg from '../images/copyright_img.png'
// import icon from '../images/accordion-icon.svg'
import Menu3 from './menu_components/Menu3';

const Navbar = ({ activeLink }) => {
    const allUrls = [
        "https://medzentrum.entwicklung-loewenmut.ch/api/appointment-booking?populate[banner_section][populate]=banner_image&populate[booking_section][populate]",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-emergency?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-service?populate[banner_section][populate]=banner_image&populate[services_data][populate]=*&populate[pharmacy_services_data][populate]=image&populate[pharmacy_services_data][populate]=list_items",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-team?populate[banner_section][populate]=banner_image&populate[founder_section][populate]=*&populate[founder_data][populate]=image&populate[team_data][populate]=types",
        "https://medzentrum.entwicklung-loewenmut.ch/api/dienstleistungen-praxis?populate[banner_section][populate]=banner_image&populate[services_data][populate]=*&populate[pharmacy_services_data][populate]=image&populate[pharmacy_services_data][populate]=list_items",
        "https://medzentrum.entwicklung-loewenmut.ch/api/oeffnungszeiten-und-kontakt?populate[banner_section][populate]=banner_image&populate[contact_details][populate]=details.icon&populate[contact_details][populate]=time_details",
        "https://medzentrum.entwicklung-loewenmut.ch/api/overview-practice?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/praxis-notfall?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/praxis-team?populate[banner_section][populate]=banner_image&populate[founder_section][populate]=*&populate[founder_data][populate]=image&populate[team_data][populate]=types",
        "https://medzentrum.entwicklung-loewenmut.ch/api/terminbuchung-praxis?populate[banner_section][populate]=banner_image&populate[booking_section][populate]",
        "https://medzentrum.entwicklung-loewenmut.ch/api/uebersicht-gesundheitsthemen?populate[banner_section][populate]=banner_image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/ubersicht-ernaehrungsdiagnostik?populate[banner_section][populate]=banner_image&populate[health_section][populate]=*&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[author_section][populate]=image&populate[ad_section][populate]=partners.image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/job?populate[banner_section][populate]=banner_image&populate[jobs_section]=*&populate[jobs][populate]=jobs_info.image&populate[jobs][populate]=jobs_info.accordion_data&populate[jobs][populate]=contact_details.details.icon",
        "https://medzentrum.entwicklung-loewenmut.ch/api/impressum?populate[banner_section][populate]=banner_image&populate[contact_section][populate]=details.icon&populate[data_section][populate]=*",
        "https://medzentrum.entwicklung-loewenmut.ch/api/datenschutzerklaerung?populate[banner_section][populate]=banner_image&populate[data_protection_section][populate]=accordion_data"
    ];
    const navigate = useNavigate();
    const [active, setActive] = useState({ link1: false, link2: false, link3: false, link4: false, link5: false, link6: false })
    const [hover, setHover] = useState({ link1: false, link2: false, link3: false, link4: false, link5: false, link6: false })
    // const [isClicked, setClicked ] = useState(false);
    // const [pageData, setPageData] = useState([]);

    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHoverEnabled, setIsHoverEnabled] = useState(window.innerWidth >= 992);
    const [searchKeyword, setSearchKeyword] = useState('');
    // const [matchedKeys, setMatchedKeys] = useState([]);


    const handleChange = (e) => {
        setSearchKeyword(e.target.value);
        console.log(e.target.value)
    }

    const handleClick = () => {
        navigate(`/search-result?s=${searchKeyword}`);
    };



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

    useEffect(() => {
        if (activeLink) {
            console.log(activeLink);
            setActive(activeLink);
        }
    }, [activeLink])

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
                                        {(hover.link1) && <ul
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
                                        {(hover.link2) && <ul
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
                                        {(hover.link3) && <ul
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
                                <ul className='navbar-nav top_menu align-items-center'>
                                    <li className='nav-item'>
                                        <div className='search_hdr position-relative'>
                                            <input type="text" value={searchKeyword} onChange={handleChange} className='search_bar' placeholder='Proin gravida' />
                                            <button className="search_icon" onClick={handleClick}></button>
                                        </div>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className={`extra-nav-link nav-link link5 ${(active.link5 || hover.link5) && 'active'}`} to="/jobs" onClick={() => handleActive(5)}
                                            onMouseEnter={() => handleMouseEnter(5)}
                                            onMouseLeave={() => handleMouseLeave(5)}
                                        >Jobs</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className={`extra-nav-link nav-link link6 ${(active.link6 || hover.link6) && 'active'}`} to='/kontakt' onClick={() => handleActive(6)}
                                            onMouseEnter={() => handleMouseEnter(6)}
                                            onMouseLeave={() => handleMouseLeave(6)}
                                        >Kontakte</Link>
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
