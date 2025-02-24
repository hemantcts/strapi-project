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
                    <div className='col-lg-6 job_col'>
                        <div className='job_content text-black'>
                            <h2>{job?.jobs_info?.heading}</h2>
                            <p>Zur Ergänzung unseres Teams suchen wir ein/e</p>
                            <h3>Arzt/Ärztin Allgemeine Innere Medizin</h3>
                            <div className='job_accordion'>
                                <Accordion data={job?.jobs_info?.accordion_data} greyy={true} isHtml={true} />
                            </div>
                            <div className='job_contact'>
                                <p>{job?.contact_details?.title}</p>
                                <ul>
                                    {job?.contact_details?.details?.map((contact)=>(
                                        <li key={index}>
                                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${contact?.icon?.url}`} /><a href='#'>{contact?.details}</a>
                                        </li>
                                    ))}
                                </ul>
                                <a href='' className='button fill_btn pdf_btn'>pdf download <img src={pdfIcon} alt='#' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 job_img'>
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${job?.jobs_info?.image?.url}`} alt='' className='w-100' />
                    </div>
                </div>
            ))}
        </div>
    )
}
