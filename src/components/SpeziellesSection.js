import React from 'react'
import { Accordion } from './Accordion'

export const SpeziellesSection = ({specialsData, color, icons}) => {
    return (
        <div className="container-xxl">
            <div className="row">
                <div className="col-lg-6 img_col">
                    <img src={`https://medzentrum.entwicklung-loewenmut.ch${specialsData?.Bild?.url}`} className='w-100' alt="" />
                </div>
                <div className="col-lg-6 content_col">
                    <div className={`sec_title ${color}`}>
                        <h2>{specialsData?.Uberschrift}</h2>
                    </div>
                    <Accordion data={specialsData?.erweiterbare_Daten} color={color} greyy={true} customClass='content-box' icons={specialsData?.Icons} />
                </div>
            </div>
        </div>
    )
}
