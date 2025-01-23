import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                                <Link className="extra-nav-link nav-link" aria-current="page" to="/">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="extra-nav-link nav-link" to="/">Kontakte</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">APOTHEKE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">PRAXIS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">ERNÄHRUNGSDIAGNOSTIK</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-disabled="true">GESUNDHEITSTHEMEN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
