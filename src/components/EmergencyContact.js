import React from 'react';
import svgCall from '../images/icn-call.svg'
import svgMoon from '../images/icn-moon.svg'
import svgSun from '../images/icn-sun.svg'

export const EmergencyContact = ({ contactData, color }) => {
    return (
        <div className='row emergeny_list'>
            {contactData?.map((contact, index) => (
                <div key={index} className="emergency_itm mt_col">
                    <div className='item_inner'>
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${contact?.icons?.url}`} alt='' className='item_icon' />
                        <div className='itm_info'>
                            <p>{contact?.info_title}</p>
                            <h3>{contact?.phone}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
