import React from 'react'
import iconImg from '../../images/breadcrumb-icon.svg'

export const MyButton = ({activePage, buttonText}) => {
    return (
        <div className="container-xxl">
            <div className='all_sec_button'>
                <span className='icon-img me-2'><img src={iconImg} alt="" /></span><span className='green-heading'>{activePage && `${activePage} | `}</span> &nbsp;{buttonText}
            </div>
        </div>
    )
}
