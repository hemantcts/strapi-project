import React from 'react'
import iconCall from '../images/icn-call.svg'
import iconEnvelope from '../images/icn-envelope.svg'
// import MapComponent from './MapComponent'

export const KontaktDetails = ({contactData, color}) => {
    return (
        <div className={`row kontakt_row  ${color}`}>
            {contactData?.map((data, index)=>(
                <div className={`col-lg-6 kontkt_itm ${index===0? 'green' : ''}`}>
                <div className={`item_inner`}>
                    <h2 className='h3_large'>{data?.main_title}</h2>
                    <ul>
                        {data?.details?.map((detail, i)=>(
                            <li key={i}><span className='icon_img'><img src={`https://medzentrum.entwicklung-loewenmut.ch${detail?.icon?.url}`} alt='' /></span><a href={`tel: ${detail?.details}`}>{detail?.details}</a></li>
                        ))}
                    </ul>
                    <div className='item_offnun'>
                        <h2 className='h3_large'>{data?.time_title}</h2>
                        <div className='offnun_item'>
                            {data?.time_details?.map((time, i)=>(
                                <div key={i} className='offnun_inr'>
                                    <span>{time?.title}</span>
                                    <span>{time?.description}</span>
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
