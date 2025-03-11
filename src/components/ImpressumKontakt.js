import React from 'react'
import iconPhone from '../images/call-blue.svg'
import iconLocation from '../images/location-blue.svg'
import iconEnvelope from '../images/envelope-blue.svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const ImpressumKontakt = ({ contactData, color }) => {
    const getHref = (details) => {
        if (!details) return ''; // If empty, return blank href

        // Phone number regex (basic)
        const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
        if (phoneRegex.test(details.trim())) {
            return `tel:${details.replace(/\s/g, '')}`; // Remove spaces
        }

        // Email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(details.trim())) {
            return `mailto:${details.trim()}`;
        }

        return ''; // Default case (no href)
    };

    return (
        <div className='row imp_address_row'>
            {contactData?.map((contact, index) => (
                <div key={index} className='col-lg-6 imp_itm'>
                    <div className='imp_shadow'>
                        <h3 className='font-volk mb-4'>{contact?.title}</h3>
                        <ul>
                            {contact?.Details?.map((innerDetails, index) => (
                                <li key={index} className='pe-5'>
                                    <img
                                        src={`https://medzentrum.entwicklung-loewenmut.ch${innerDetails?.icon?.url}`}
                                        alt=''
                                    />
                                    {getHref(innerDetails?.Details) !== '' ? (
                                        <a className='pe-5' href={getHref(innerDetails?.Details)}>
                                            {innerDetails?.Details}
                                        </a>
                                    ) : (
                                        <span>{innerDetails?.Details}</span>
                                    )
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
