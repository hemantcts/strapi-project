import React from 'react';
import copyrightImg from '../images/copyright_img.png';
import phoneicon from '../images/icon-phone.svg'
import envelopeicon from '../images/icon-envelope.svg'
import facebookicon from '../images/icon-facebook.svg'
import instagramicon from '../images/icon-instagram.svg'
import linkedinicon from '../images/icon-linkedin.svg'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='wi_full'>
                <div className='container-xxl'>
                    <div className='upper_footer'>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-lg-3 ftr_block'>
                                <h4>MedZentrum Pfungen</h4>
                                <address>Riedäckerstrasse 5<br />CH-8422 Pfungen</address>
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link to='/ubersicht-apotheke'>Apotheke</Link></li>
                                    <li><Link to='/ubersicht-praxis'>Praxis</Link></li>
                                    <li><Link to='/ernahrungsdiagnostik'>Ernährungsdiagnostik</Link></li>
                                    <li><Link to='/ubersicht-gesundheitsthemen'>Gesundheitsthemen</Link></li>
                                </ul>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4 ftr_block'>
                                <h4>Apotheke</h4>
                                <div className='offen_detail'>
                                    <ul className='mb-3'>
                                        <li><a href='tel: 0523050350'><img src={phoneicon} alt='#' /><span>052 305 03 50</span></a></li>
                                        <li><a href='mailto: apotheke@medzentrum.ch'><img src={envelopeicon} alt='#' /><span>apotheke@medzentrum.ch</span></a></li>
                                    </ul>
                                    <p>Öffnungszeiten Apotheke:<br />Montag bis Freitag<br />8:00 – 12:15 | 13:00 – 18:30 <br />Samstag 8:00 – 13:00</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3 ftr_block'>
                                <h4>Praxis</h4>
                                <div className='offen_detail'>
                                    <ul className='mb-3'>
                                        <li><a href='tel: 0523050355'><img src={phoneicon} alt='#' /><span>052 305 03 55</span></a></li>
                                        <li><a href='mailto: praxis@medzentrum.ch'><img src={envelopeicon} alt='#' /><span>praxis@medzentrum.ch</span></a></li>
                                    </ul>
                                    <p>Telefonzeiten:<br />Montag bis Freitag<br />8:00 – 12:00 | 14:00 – 17:30</p>
                                    <p>Öffnungszeiten Praxis:<br />Montag bis Freitag<br />8:00 – 12:00 | 13:00 – 18:00<br />Samstag nach Vereinbarung</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-2 ftr_block'>
                                <div className='ftr_scl d-flex'>
                                    <a href='#'><img src={facebookicon} alt='#' /></a>
                                    <a href='#'><img src={instagramicon} alt='#' /></a>
                                    <a href='#'><img src={linkedinicon} alt='#' /></a>
                                </div>
                                <h4>Rechtliches</h4>
                                <ul>
                                    <li><Link to='/impressum'>Impressum</Link></li>
                                    <li><Link to='/datenschutz'>Datenschutzerklärung</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer_copyright text-center'>
                        <p>© Copyright 2025 | MedZentrum AG, Pfungen | Design by <a href="https://www.loewenmut.ch/" target="_blank">Loewenmut. <img src={copyrightImg} alt='loewenmut' /></a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
