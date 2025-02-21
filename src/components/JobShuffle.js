import React from 'react'
import imgJob from '../images/job-1.png'
import imgJob2 from '../images/job-2.png'
import iconCall from '../images/icon-phone.svg'
import iconMail from '../images/icon-envelope.svg'
import iconWeb from '../images/icon-website.svg'
import pdfIcon from '../images/dwnload-arrow.svg'

export const JobShuffle = ({ data, color }) => {
    return (
        <div className='job_list_wrapper'>
            <div className='row job_row'>
                <div className='col-lg-6 job_col'>
                    <div className='job_content text-black'>
                        <h2>Werden Sie ein Teil unseres Teams</h2>
                        <p>Zur Ergänzung unseres Teams suchen wir ein/e</p>
                        <h3>Arzt/Ärztin Allgemeine Innere Medizin</h3>
                        <div className='job_accordion'></div>
                        <div className='job_contact'>
                            <p>Frau Dr. med. Eva Naegeli (leitende Ärztin) freut sich über Ihre Kontaktaufnahme</p>
                            <ul>
                                <li><img src={iconCall} /><a href='tel :0797093986'>079 709 39 86</a></li>
                                <li><img src={iconMail} /><a href='mailto: eva.naegeli@hin.ch'>eva.naegeli@hin.ch</a></li>
                                <li><img src={iconWeb} /><a href='https://medzentrum.ch/' target='_blank'>www.medzentrum.ch</a></li>
                            </ul>
                            <a href='' className='button fill_btn pdf_btn'>pdf download <img src={pdfIcon} alt='#' /></a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 job_img'>
                    <img src={imgJob} alt='' className='w-100' />
                </div>
            </div>
            <div className='row job_row'>
                <div className='col-lg-6 job_col'>
                    <div className='job_content text-black'>
                        <h2>Werden Sie ein Teil unseres Teams</h2>
                        <p>Zur Ergänzung unseres Teams suchen wir ein/e</p>
                        <h3>Arzt/Ärztin Allgemeine Innere Medizin</h3>
                        <div className='job_accordion'></div>
                        <div className='job_contact'>
                            <p>Frau Dr. med. Eva Naegeli (leitende Ärztin) freut sich über Ihre Kontaktaufnahme</p>
                            <ul>
                                <li><img src={iconCall} /><a href='tel :0797093986'>079 709 39 86</a></li>
                                <li><img src={iconMail} /><a href='mailto: eva.naegeli@hin.ch'>eva.naegeli@hin.ch</a></li>
                                <li><img src={iconWeb} /><a href='https://medzentrum.ch/' target='_blank'>www.medzentrum.ch</a></li>
                            </ul>
                            <a href='' className='button fill_btn pdf_btn'>pdf download <img src={pdfIcon} alt='#' /></a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 job_img'>
                    <img src={imgJob2} alt='' className='w-100' />
                </div>
            </div>
        </div>
    )
}
