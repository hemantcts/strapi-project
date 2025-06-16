import React from 'react';
import svgCall from '../images/icn-call.svg'
import svgMoon from '../images/icn-moon.svg'
import svgSun from '../images/icn-sun.svg'

export const EmergencyContact = ({ contactData, color }) => {
    const removeSpace = (phone) => phone.replace(/\s+/g, '');
    
    return (
        <div className={`${color}`}>
            <div className='row emergeny_list'>
                {contactData?.map((contact, index) => (
                    <div key={index} className="emergency_itm">
                        <div className='item_inner'>
                            <span className='item_icon'>
                                <a href={`tel:${removeSpace(contact?.phone)}`}>
                                    <img src={`https://backend.medzentrum.ch${contact?.icons?.url}`} alt='#' />
                                </a>
                            </span>
                            <div className='itm_info'>
                                <p>{contact?.info_title}</p>
                                <h3>
                                    <a href={`tel:${removeSpace(contact?.phone)}`}>{contact?.phone}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
