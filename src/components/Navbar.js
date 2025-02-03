import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
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
            <nav className="navbar navbar-expand-lg d-none d-lg-flex">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse align-items-end flex-column" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ms-3 position-relative">
                                <input type="text" className='search_bar' placeholder='Proin gravida' />
                                <div className="search_icon"></div>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="extra-nav-link nav-link" to="#">Jobs</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="extra-nav-link nav-link" to="#">Kontakte</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link link1 ${active.link1 && 'active'}`} to="#" onClick={() => handleActive(1)}>APOTHEKE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link link2 ${active.link2 && 'active'}`} to="#" onClick={() => handleActive(2)}>PRAXIS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link link3 ${active.link3 && 'active'}`} to="#" onClick={() => handleActive(3)}>ERNÄHRUNGSDIAGNOSTIK</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link link4 ${active.link4 && 'active'}`} to="#" onClick={() => handleActive(4)}>GESUNDHEITSTHEMEN</Link>
                            </li>
                        </ul>
                        {active.link1 && <div className="menu home_menu">
                            <HomeMenu />
                        </div>}

                        {active.link2 && <div className="menu">
                            <Menu2 />
                        </div>}

                        {active.link3 && <div className="menu">
                            <Menu3 />
                        </div>}
                    </div>
                </div>
            </nav>

            {/* mobile navbar */}

            <nav className="navbar navbar-expand-lg mobile-nav d-flex d-lg-none">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse align-items-end flex-column" id="navbarNav">
                        <div className="container nav-box">
                            <div>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className={`nav-link pb-0 link1 ${active.link1 && 'active'}`} to="#" onClick={() => handleActive(1)}>
                                            APOTHEKE <i className='ms-1 arrow_icon'><img src={icon} alt="" style={{width: "15px"}} /> </i>
                                        </Link>
                                        <div className={`home_menu_mobile_links ${active.link1 && 'active'}`}>
                                            <ul className='mobile-list-out ps-0'>
                                                <li className='mobile-list-items border-0'>
                                                    <Link>
                                                        Übersicht Apotheke
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Termin buchen Apotheke
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        TEAM APOTHEKE
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Notfall
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Angebote
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Öffnungszeiten und Kontakt
                                                    </Link>
                                                </li>
                                            </ul>
                                            <Link className='home_menu_btn' to='/'>
                                                Termin Apotheke buchen
                                            </Link>
                                        </div>

                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link pb-0 link2 ${active.link2 && 'active'}`} to="#" onClick={() => handleActive(2)}>
                                            PRAXIS <i className='ms-1 arrow_icon'><img src={icon} alt="" style={{width: "15px"}} /> </i>
                                        </Link>
                                        <div className={`home_menu_mobile_links ${active.link2 && 'active'}`}>
                                            <ul className='mobile-list-out ps-0'>
                                                <li className='mobile-list-items border-0'>
                                                    <Link>
                                                        Übersicht Praxis
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Termin buchen Praxis
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        TEAM PRAXIS
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Notfall
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Dienstleistungen Praxis
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Öffnungszeiten und Kontakt
                                                    </Link>
                                                </li>
                                            </ul>
                                            <Link className='menu_btn1' to='/'>
                                                Termin Apotheke buchen
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link pb-0 link3 ${active.link3 && 'active'}`} to="#" onClick={() => handleActive(3)}>
                                            ERNÄHRUNGSDIAGNOSTIK <i className='ms-1 arrow_icon'><img src={icon} alt="" style={{width: "15px"}} /> </i>
                                        </Link>
                                        <div className={`home_menu_mobile_links ${active.link3 && 'active'}`}>
                                            <ul className='mobile-list-out ps-0'>
                                                <li className='mobile-list-items border-0'>
                                                    <Link>
                                                        Übersicht Ernährungsdiagnostik
                                                    </Link>
                                                </li>
                                                <li className='mobile-list-items'>
                                                    <Link>
                                                        Angebote
                                                    </Link>
                                                </li>
                                            </ul>
                                            <Link className='menu_btn1' to='/'>
                                                Termin buchen Beratung
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link pb-0 link4 ${active.link4 && 'active'}`} to="#" onClick={() => handleActive(4)}>
                                            GESUNDHEITSTHEMEN <i className='ms-1 arrow_icon'><img src={icon} alt="" style={{width: "15px"}} /> </i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link pb-0" to="#">
                                            JOBS
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link pb-0" to="#">
                                            KONTAKTE
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="copyright" style={{ position: "static", bottom: "0", fontSize: "14px", fontWeight: "300" }}>
                                    <div className="py-2 pe-5">
                                        © Copyright 2025 | MedZentrum AG, Pfungen | Design by Loewenmut. <img src={copyrightImg} alt="" style={{ width: "20px" }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
