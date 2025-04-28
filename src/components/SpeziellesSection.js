import React from 'react'
import { Accordion } from './Accordion'
import { MyButton } from './mini_components/MyButton'
import MyLink from './mini_components/MyLink'

export const SpeziellesSection = ({specialsData, color, icons}) => {
    return (
        <div className="container-xxl">
            <div className="row">
                <div className="col-lg-6 img_col">
                    <img src={`https://medzentrum.entwicklung-loewenmut.ch${specialsData?.Bild?.url}`} className='w-100' alt="" />

                    {specialsData?.Button && <div className='text-center mt-4'>
                        <MyLink text={specialsData?.Button?.Link_Text} link={specialsData?.Button?.Link_URL} fullBtn={true} />
                    </div>}

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
