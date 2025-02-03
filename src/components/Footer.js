import React from 'react';
import copyrightImg from '../images/copyright_img.png';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-sec pb-0'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h4>MedZentrum Pfungen</h4>
                        <ul className='p-0'>
                            <li>
                                Riedäckerstrasse 5
                            </li>
                            <li>
                                8422 Pfungen
                            </li>
                        </ul>

                        <h4>Quick Links</h4>
                        <ul className='p-0'>
                            <li>
                                Apotheke
                            </li>
                            <li>
                                Praxis
                            </li>
                            <li>
                                Ernahrungsdiagnostik
                            </li>
                            <li>
                                Gesundheitsthemen
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h4>Apotheke</h4>
                        <ul className='p-0'>
                            <li>
                                <a href="tel:052 305 03 50"><i className="fa-solid fa-phone" /> | 052 305 03 50</a>
                                
                            </li>
                            <li>
                                <a href="mailto:apotheke@medzentrum.ch"><i className="fa-solid fa-envelope" /> | apotheke@medzentrum.ch</a>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                Öffnungszeiten Apotheke
                            </li>
                            <li>
                                Montag bis Freitag
                            </li>
                            <li>
                                8:00 – 12:15 | 13:00 – 18:30
                            </li>
                            <li>
                                Samstag 8:00 – 13:00
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h4>Praxis</h4>
                        <ul className='p-0'>
                            <li>
                                <a href="tel:052 305 03 55"><i className="fa-solid fa-phone" /> | 052 305 03 55</a>
                            </li>
                            <li>
                                <a href="mailto:praxis@medzentrum.ch"><i className="fa-solid fa-envelope" /> | praxis@medzentrum.ch</a>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                Telefonzeiten:
                            </li>
                            <li>
                                Montag bis Freitag
                            </li>
                            <li>
                                8:00 – 12:00 | 14:00 – 17:30
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                Öffnungszeiten Praxis:
                            </li>
                            <li>
                                Montag bis Freitag
                            </li>
                            <li>
                                8:00 – 12:00 | 13:00 – 18:00
                            </li>
                            <li>
                                Samstag nach Vereinbarung
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <div className="icons mb-4">
                            <span className="social-media-icons">
                                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                            </span>
                            <span className="social-media-icons">
                                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram" />
                                </a>
                            </span>
                            <span className="social-media-icons">
                                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in" />
                                </a>
                            </span>
                        </div>
                        <h4>Rechtliches</h4>
                        <ul className='p-0'>
                            <li>
                                Impressum
                            </li>
                            <li>
                                Datenschutzerklärung
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container text-center py-2">
                    © Copyright 2025 | MedZentrum AG, Pfungen | Design by <a href="loewenmut.ch" target='_blank'>Loewenmut.</a> <img src={copyrightImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
