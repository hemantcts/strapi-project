import React from 'react'
import { Accordion } from './Accordion'

export const SpeziellesSection = ({specialsData, color}) => {
    return (
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-lg-6 img_col">
                    <img src={`https://medzentrum.entwicklung-loewenmut.ch${specialsData?.image?.url}`} className='w-100' alt="" />
                </div>
                <div className="col-lg-6 content_col">
                    <div className={`sec_title ${color}`}>
                        <h2>{specialsData?.heading}</h2>
                    </div>
                    <Accordion data={specialsData?.accordion_data} color={color} />
                </div>
            </div>
        </div>
    )
}
