import React from 'react';
import svgCall from '../images/icn-call.svg'
import svgMoon from '../images/icn-moon.svg'
import svgSun from '../images/icn-sun.svg'

export const EmergencyContact = () => {
    return (
        <div className='row emergeny_list'>
            <div className="emergency_itm">
                <div className='item_inner'>
                    <span className='item_icon'><img src={svgCall} alt='#' /></span>
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h4>0900 55 35 55</h4>
                    </div>
                </div>
            </div>
            <div className="emergency_itm">
                <div className='item_inner'>
                    <span className='item_icon'><img src={svgCall} alt='#' /></span>
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h4>0900 55 35 55</h4>
                    </div>
                </div>
            </div>
            <div className="emergency_itm">
                <div className='item_inner'>
                    <span className='item_icon'><img src={svgCall} alt='#' /></span>
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h4>0900 55 35 55</h4>
                    </div>
                </div>
            </div>
            <div className="emergency_itm">
                <div className='item_inner'>
                    <span className='item_icon'><img src={svgSun} alt='#' /></span>
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h4>0900 55 35 55</h4>
                    </div>
                </div>
            </div>
            <div className="emergency_itm">
                <div className='item_inner'>
                    <span className='item_icon'><img src={svgMoon} alt='#' /></span>
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h4>0900 55 35 55</h4>
                    </div>
                </div>
            </div>
            <div className="emergency_itm">
                <div className='item_inner'>
                    <span className='item_icon'><img src={svgCall} alt='#' /></span>
                    <div className='itm_info'>
                        <p>Notfalldienst-Apotheke</p>
                        <h4>0900 55 35 55</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
