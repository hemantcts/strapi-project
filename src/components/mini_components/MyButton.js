import React from 'react'
import iconImg from '../../images/breadcrumb-icon.svg'

export const MyButton = ({ activePage, buttonText, color }) => {

    // const formatText = (text) => {
    //     return text?.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()); 
    // };

    const formatText = (text) => {
        return text?.toLowerCase().replace(/(^|\s)(\p{L})/gu, (match) => match.toUpperCase());
    };
    

    return (
        <div className="container-xxl">
            <div className='all_sec_button'>
                <span className='icon-img me-2'><img src={iconImg} alt="" /></span>
                <span className={`${color ? 'green' : 'blue'}-heading`}>{activePage && `${formatText(activePage)} | `}</span> &nbsp;{formatText(buttonText)}
            </div>
        </div>
    )
}
