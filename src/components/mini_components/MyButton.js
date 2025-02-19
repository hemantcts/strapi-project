import React from 'react'
import iconImg from '../../images/breadcrumb-icon.svg'

export const MyButton = () => {
    return (
        <div className="container-xxl">
            <div className='all_sec_button'>
                <span className='icon-img me-2'><img src={iconImg} alt="" /></span><span className='green-heading'>Apotheke | </span> &nbsp;Übersicht Apotheke
            </div>
        </div>
    )
}
