import React from 'react'
import iconPhone from '../images/call-blue.svg'
import iconLocation from '../images/location-blue.svg'
import iconEnvelope from '../images/envelope-blue.svg'

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
                            {/* {contact?.details?.map((innerDetails, index)=>(
                                <li key={index} className='pe-5'><img src={`https://medzentrum.entwicklung-loewenmut.ch${innerDetails?.icon?.url}`} alt='' /><a className='pe-5'>{innerDetails?.details}</a></li>
                            ))} */}
                            {contact?.details?.map((innerDetails, index) => (
                                <li key={index} className='pe-5'>
                                    <img
                                        src={`https://medzentrum.entwicklung-loewenmut.ch${innerDetails?.icon?.url}`}
                                        alt=''
                                    />
                                    {getHref(innerDetails?.details) !== '' ? (
                                        <a className='pe-5' href={getHref(innerDetails?.details)}>
                                            {innerDetails?.details}
                                        </a>
                                    ) : (
                                        <span>{innerDetails?.details}</span>
                                    )
                                    }
                                    {/* <a className='pe-5' href={getHref(innerDetails?.details)}>
                                        {innerDetails?.details}
                                    </a> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            {/* <div className='col-lg-6 imp_itm'>
                <div className='imp_shadow'>
                    <h3 className='font-volk mb-4'>Konzeption und Realisation</h3>
                    <ul>
                        <li><img src={iconLocation} alt='' /><a>Loewenmut Punkt GmbH<br />Ida-Sträuli-Strasse 95<br />CH-8404 Winterthur</a></li>
                        <li><img src={iconPhone} alt='' /><a href='tel: 0522247788'>052 224 77 88</a></li>
                        <li><img src={iconEnvelope} alt='' /><a href='mailto: info@loewenmut.ch'>info@loewenmut.ch</a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}
