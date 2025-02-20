import React from 'react'
import iconCall from '../images/icn-call.svg'
import iconEnvelope from '../images/icn-envelope.svg'

export const KontaktDetails = ({data, color}) => {
    return (
        <div className={`row kontakt_row  ${color}`}>
            <div className="col-lg-6 kontkt_itm">
                <div className='item_inner green'>
                    <h2 className='h3_large'>Apotheke</h2>
                    <ul>
                        <li><span className='icon_img'><img src={iconCall} alt='' /></span><a href='tel: 0523050350'>052 305 03 50</a></li>
                        <li><span className='icon_img'><img src={iconEnvelope} alt='' /></span><a href='mailto: apotheke@medzentrum.ch '>apotheke@medzentrum.ch </a></li>
                    </ul>
                    <div className='item_offnun'>
                        <h2 className='h3_large'>Öffnungszeiten</h2>
                        <div className='offnun_item'>
                            <div className='offnun_inr'>
                                <span>Mo bis Fr</span>
                                <span>8:00 – 12:15 | 13:00 – 18:30</span>
                            </div>
                            <div className='offnun_inr'>
                                <span>Samstag</span>
                                <span>8:00 – 13:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 kontkt_itm">
                <div className='item_inner'>
                    <h2 className='h3_large'>Praxis</h2>
                    <ul>
                        <li><span className='icon_img'><img src={iconCall} alt='' /></span><a href='tel: 0523050355'>052 305 03 55</a></li>
                        <li><span className='icon_img'><img src={iconEnvelope} alt='' /></span><a href='mailto: praxis@medzentrum.ch '>praxis@medzentrum.ch </a></li>
                    </ul>
                    <div className='item_offnun'>
                        <h2 className='h3_large'>Öffnungszeiten</h2>
                        <div className='offnun_item'>
                            <div className='offnun_inr'>
                                <span>Mo bis Fr</span>
                                <span>8:00 – 12:00 | 13:00 – 18:00</span>
                            </div>
                            <div className='offnun_inr'>
                                <span>Samstag nach Vereinbarung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
