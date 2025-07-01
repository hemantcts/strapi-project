import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import iconError from '../images/error-image.svg'
import arrowIcon from '../images/white-arrow.svg'
import { Link } from 'react-router-dom';
import { StickyButton } from './mini_components/StickyButton';

export const Thankyou = () => {
    return (
        <div className='error'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>

            <Navbar />
            <section className="wi_full error_sec">
                <div className="container-xxl">
                    <div className='row align-items-center flex-lg-row-reverse'>
                        <div className='col-lg-6 img_col'>
                            <img src='https://backend.medzentrum.ch/uploads/tick_icon_med_8629b0b7b6.svg' alt='' />
                        </div>
                        <div className='col-lg-6 content_col'>
                            <h1>Vielen Dank</h1>
                            <p style={{fontSize:'var(--bs-fs30)', fontWeight:'250'}}>Wir werden uns so bald wie möglich mit Ihnen in Verbindung setzen.</p>
                            <div className='btn_block'>
                                <Link to='/' className='button fill_btn'>Zur Startseite <img src={arrowIcon} alt='#' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
