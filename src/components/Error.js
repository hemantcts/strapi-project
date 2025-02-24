import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import iconError from '../images/error-image.svg'
import arrowIcon from '../images/white-arrow.svg'
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className='error'>
            <header>
                <Navbar />
            </header>
            <section className="wi_full error_sec">
                <div className="container-xxl">
                    <div className='row align-items-center flex-lg-row-reverse'>
                        <div className='col-lg-6 img_col'>
                            <img src={iconError} alt='' />
                        </div>
                        <div className='col-lg-6 content_col'>
                            <h1>Diese Seite konnte leider nicht gefunden werden</h1>
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
