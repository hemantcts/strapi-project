import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import HomeMenu from './menu_components/HomeMenu';
import Menu2 from './menu_components/Menu2';

const Navbar = () => {
    const [active, setActive] = useState({link1: false, link2: false, link3: false, link4: false})

    const handleActive = (link)=>{
        let obj = {link1: false, link2: false, link3: false, link4: false};
        if(link===1){
            if(!active.link1){
                obj.link1 = true;
            }
        }
        if(link===2){
            if(!active.link2){
                obj.link2 = true;
            }
        }
        if(link===3){
            if(!active.link3){
                obj.link3 = true;
            }
        }
        if(link===4){
            if(!active.link4){
                obj.link4 = true;
            }
        }
        setActive(obj);
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse align-items-end flex-column" id="navbarNav">
                        {/* <div className="row">
                            <div className="col-12">
                                <ul>
                                    <li>home</li>
                                </ul>
                            </div>
                        </div> */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="extra-nav-link nav-link" aria-current="page" to="#">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="extra-nav-link nav-link" to="#">Kontakte</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link link1 ${active.link1 && 'active'}`} aria-current="page" to="#" onClick={()=>handleActive(1)}>APOTHEKE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link link2 ${active.link2 && 'active'}`} to="#" onClick={()=>handleActive(2)}>PRAXIS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link link3 ${active.link3 && 'active'}`} to="#" onClick={()=>handleActive(3)}>ERNÄHRUNGSDIAGNOSTIK</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link link4 ${active.link4 && 'active'}`} to="#" onClick={()=>handleActive(4)}>GESUNDHEITSTHEMEN</Link>
                            </li>
                        </ul>
                        {active.link1 && <div className="menu">
                            <HomeMenu/>
                        </div>}

                        {active.link2 && <div className="menu ">
                            <Menu2/>
                        </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
