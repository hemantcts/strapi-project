import React from 'react'
import imgJob from '../images/job-1.png'
import imgJob2 from '../images/job-2.png'
import iconCall from '../images/icon-phone.svg'
import iconMail from '../images/icon-envelope.svg'
import iconWeb from '../images/icon-website.svg'
import pdfIcon from '../images/dwnload-arrow.svg'
import { Accordion } from './Accordion'

export const JobShuffle = ({ data, color }) => {
    return (
        <div className='job_list_wrapper'>
            {data?.map((job, index) => (
                <div className='row job_row'>
                    <div className='col-lg-6 job_img'>
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${job?.Job_Informationen?.Bild?.url}`} alt='' className='w-100' />
                    </div>
                    <div className='col-lg-6 job_col'>
                        <div className='job_content text-black'>
                            <h2>{job?.Job_Informationen?.Uberschrift}</h2>
                            <p>{job?.Job_Informationen?.Beschreibung}</p>
                            <h3>{job?.Job_Informationen?.Titel}</h3>
                            <div className='job_accordion'>
                                <Accordion data={job?.Job_Informationen?.erweiterbare_Daten} greyy={true} isHtml={true} />
                            </div>
                            <div className='job_contact'>
                                <p>{job?.Kontaktdaten?.Titel}</p>
                                <ul>
                                    {job?.Kontaktdaten?.Details?.map((contact)=>(
                                        <li key={index}>
                                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${contact?.icon?.url}`} /><a href='#'>{contact?.Details}</a>
                                        </li>
                                    ))}
                                </ul>
                                <a href={`https://medzentrum.entwicklung-loewenmut.ch${job?.PDF_Link?.url}`} target='_blank' className='button fill_btn pdf_btn'>pdf download <img src={pdfIcon} alt='#' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
