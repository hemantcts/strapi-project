import React from 'react'
import copyrightImg from '../images/copyright_img.png'

const Footer = () => {
    return (
        <div className='footer-sec pb-0'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h5>MedZentrum Pfungen</h5>
                        <ul className='p-0'>
                            <li>Riedäckerstrasse 5</li>
                            <li>8422 Pfungen</li>
                        </ul>

                        <h5>Quick Links</h5>
                        <ul className='p-0'>
                            <li>APOTHEKE</li>
                            <li>PRAXIS</li>
                            <li>ERNÄHRUNGSDIAGNOSTIK</li>
                            <li>GESUNDHEITSTHEMEN</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h5>Apotheke</h5>
                        <ul className='p-0'>
                            <li><i class="fa-solid fa-phone"/> | 052 305 03 55</li>
                            <li><i class="fa-solid fa-envelope"/> | praxis@medzentrum.ch</li>
                        </ul>
                        <ul className='p-0'>
                            <li>Öffnungszeiten Apotheke</li>
                            <li>Montag bis Freitag</li>
                            <li>8:00 – 12:15 | 13:00 – 18:30</li>
                            <li>Samstag 8:00 – 13:00</li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <h5>Praxis</h5>
                        <ul className='p-0'>
                            <li><i class="fa-solid fa-phone"/> | 052 305 03 55</li>
                            <li><i class="fa-solid fa-envelope"/> | praxis@medzentrum.ch</li>
                        </ul>
                        <ul className='p-0'>
                            <li>Telefonzeiten:</li>
                            <li>Montag bis Freitag</li>
                            <li>8:00 – 12:00 | 14:00 – 17:30</li>
                        </ul>
                        <ul className='p-0'>
                            <li>Öffnungszeiten Praxis:</li>
                            <li>Montag bis Freitag</li>
                            <li>8:00 – 12:00 | 13:00 – 18:00</li>
                            <li>Samstag nach Vereinbarung</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <div className="icons mb-4">
                            <span className="social-media-icons"><i class="fa-brands fa-facebook-f"/></span>
                            <span className="social-media-icons"><i class="fa-brands fa-instagram" /></span>
                            <span className="social-media-icons"><i class="fa-brands fa-linkedin-in" /></span>
                        </div>
                        <h5>Rechtliches</h5>
                        <ul className='p-0'>
                            <li>Impressum</li>
                            <li>Datenschutzerklärung</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container text-center py-3">
                    © Copyright 2025 | MedZentrum AG, Pfungen | Design by Loewenmut. <img src={copyrightImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
