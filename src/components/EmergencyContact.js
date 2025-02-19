import React from 'react';
import svgCall from '../images/icn-call.svg'
import svgMoon from '../images/icn-moon.svg'
import svgSun from '../images/icn-sun.svg'

export const EmergencyContact = () => {
    return (
        <div className='row emergeny_list'>
            <div className="emergency_itm mt_col">
                <div className='item_inner'>
                    <img src={svgCall} alt='#' className='item_icon' />
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h3>0900 55 35 55</h3>
                    </div>
                </div>
            </div>
            <div className="emergency_itm mt_col">
                <div className='item_inner'>
                    <img src={svgCall} alt='#' className='item_icon' />
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h3>0900 55 35 55</h3>
                    </div>
                </div>
            </div>
            <div className="emergency_itm mt_col">
                <div className='item_inner'>
                    <img src={svgCall} alt='#' className='item_icon' />
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h3>0900 55 35 55</h3>
                    </div>
                </div>
            </div>
            <div className="emergency_itm mt_col">
                <div className='item_inner'>
                    <img src={svgSun} alt='#' className='item_icon' />
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h3>0900 55 35 55</h3>
                    </div>
                </div>
            </div>
            <div className="emergency_itm mt_col">
                <div className='item_inner'>
                    <img src={svgMoon} alt='#' className='item_icon' />
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h3>0900 55 35 55</h3>
                    </div>
                </div>
            </div>
            <div className="emergency_itm mt_col">
                <div className='item_inner'>
                    <img src={svgCall} alt='#' className='item_icon' />
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h3>0900 55 35 55</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
