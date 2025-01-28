import React from 'react';
import copyrightImg from '../images/copyright_img.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-sec pb-0'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h4>MedZentrum Pfungen</h4>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'>Riedäckerstrasse 5</Link>
                            </li>
                            <li>
                                <Link to='#'>8422 Pfungen</Link>
                            </li>
                        </ul>

                        <h4>Quick Links</h4>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'>APOTHEKE</Link>
                            </li>
                            <li>
                                <Link to='#'>PRAXIS</Link>
                            </li>
                            <li>
                                <Link to='#'>ERNÄHRUNGSDIAGNOSTIK</Link>
                            </li>
                            <li>
                                <Link to='#'>GESUNDHEITSTHEMEN</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h4>Apotheke</h4>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'><i className="fa-solid fa-phone" /> | 052 305 03 55</Link>
                            </li>
                            <li>
                                <Link to='#'><i className="fa-solid fa-envelope" /> | praxis@medzentrum.ch</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'>Öffnungszeiten Apotheke</Link>
                            </li>
                            <li>
                                <Link to='#'>Montag bis Freitag</Link>
                            </li>
                            <li>
                                <Link to='#'>8:00 – 12:15 | 13:00 – 18:30</Link>
                            </li>
                            <li>
                                <Link to='#'>Samstag 8:00 – 13:00</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h4>Praxis</h4>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'><i className="fa-solid fa-phone" /> | 052 305 03 55</Link>
                            </li>
                            <li>
                                <Link to='#'><i className="fa-solid fa-envelope" /> | praxis@medzentrum.ch</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'>Telefonzeiten:</Link>
                            </li>
                            <li>
                                <Link to='#'>Montag bis Freitag</Link>
                            </li>
                            <li>
                                <Link to='#'>8:00 – 12:00 | 14:00 – 17:30</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'>Öffnungszeiten Praxis:</Link>
                            </li>
                            <li>
                                <Link to='#'>Montag bis Freitag</Link>
                            </li>
                            <li>
                                <Link to='#'>8:00 – 12:00 | 13:00 – 18:00</Link>
                            </li>
                            <li>
                                <Link to='#'>Samstag nach Vereinbarung</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <div className="icons mb-4">
                            <span className="social-media-icons"><i className="fa-brands fa-facebook-f" /></span>
                            <span className="social-media-icons"><i className="fa-brands fa-instagram" /></span>
                            <span className="social-media-icons"><i className="fa-brands fa-linkedin-in" /></span>
                        </div>
                        <h4>Rechtliches</h4>
                        <ul className='p-0'>
                            <li>
                                <Link to='#'>Impressum</Link>
                            </li>
                            <li>
                                <Link to='#'>Datenschutzerklärung</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container text-center py-2">
                    © Copyright 2025 | MedZentrum AG, Pfungen | Design by Loewenmut. <img src={copyrightImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
