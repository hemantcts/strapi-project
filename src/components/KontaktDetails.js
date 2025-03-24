import React from 'react'
import iconCall from '../images/icn-call.svg'
import iconEnvelope from '../images/icn-envelope.svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
// import MapComponent from './MapComponent'

export const KontaktDetails = ({ contactData, color }) => {
    return (
        <div className={`row kontakt_row  ${color}`}>
            {contactData?.map((data, index) => (
                <div className={`col-lg-6 kontkt_itm ${index === 0 ? 'green' : ''}`}>
                    <div className={`item_inner`}>
                        <h2 className='h3_large'>{data?.Haupttitel}</h2>
                        <ul>
                            {data?.Details?.map((detail, i) => {
                                const cleanDetail = detail?.Details?.replace(/\s+/g, ""); // Remove spaces
                                const isEmail = cleanDetail.includes("@");
                                const isPhone = /^\+?\d+$/.test(cleanDetail); // Check if it's a phone number
                                const href = isEmail
                                    ? `mailto:${cleanDetail}`
                                    : isPhone
                                        ? `tel:${cleanDetail}`
                                        : "#"; // Default to '#' if neither

                                return (
                                    <li key={i}>
                                        <span className='icon_img'>
                                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${detail?.icon?.url}`} alt='' />
                                        </span>
                                        <a href={href}>{detail?.Details}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='item_offnun'>
                            <h2 className='h3_large'>{data?.time_title}</h2>
                            <div className='offnun_item'>
                                {data?.time_details?.map((time, i) => (
                                    <div key={i} className='offnun_inr'>
                                        <span>{time?.Titel}</span>
                                        {time?.Beschreibung && <BlocksRenderer content={time?.Beschreibung} />}
                                        {/* <span>{time?.Beschreibung}</span> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
