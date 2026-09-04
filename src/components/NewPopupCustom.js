import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pdfIcon from '../images/dwnload-arrow.svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import popupHeart from '../images/heart-popup-image.png'
import closePopup from '../images/modal-close-new.svg'
import scannerIcon from '../images/scanner.png'
import scIcon1 from '../images/sc-icon-1.svg'
import scIcon2 from '../images/sc-icon-2.svg'
import scIcon3 from '../images/sc-icon-3.svg'
import btnArrow from '../images/white-btn-arrow.svg'

export const NewPopupCustom = () => {
    const openBtnRef = useRef(null);
    const [popupData, setPopupData] = useState(null);
    const [mobileWidth, setMobileWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 575) {
                setMobileWidth(true);
            } else {
                setMobileWidth(false);
            }
        };

        // Check on mount
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openPopup2 = (data) => {
        openBtnRef.current?.click();
    }
    
    useEffect(() => {
        openPopup2();
    }, [])

    return (
        <>
            {/* Hidden button to trigger Bootstrap modal */}
            <button type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#myModal2" ref={openBtnRef} >Open Modal</button>

            {/* The actual modal */}
            <div className="modal fade" id="myModal2" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered popup-container heart_new_popup_modal" style={{ width: '1000px' }}>
                    <div className="modal-content d-flex flex-row overflow-hidden popup">
                        <div className="popup-img" style={{
                                width: '50%',
                                backgroundColor: `#dcf3ff`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                            <img src={popupHeart} alt="" style={{objectFit:'cover', height:'100%', width:'100%'}} />
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" style={{
                                    position: 'absolute',
                                    top: '5px',
                                    right: '5px',
                                    background: 'rgba(231, 231, 231, 0.95)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '28px',
                                    height: '28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}>
                                <img src={closePopup} alt="Close" />
                            </button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center popup-box">
                            <div className="heart-popup-content">
                                <p className='text-uppercase  fw-regular'>Kundenzufriedenheitsumfrage </p>
                                <h2 className='mb-3'>Ihre Meinung liegt uns am <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9739 26.9339L16.026 27C30.221 21.2364 35.6907 7.87569 29.4397 2.11219C23.1882 -3.65137 16.026 4.20722 16.026 4.20722H15.9739C15.9739 4.20722 8.81119 -3.65137 2.56021 2.11219C-3.69064 7.87501 1.77907 21.1704 15.9739 26.9339Z" fill="black"/>
                                <path d="M15.9739 26.9339L16.026 27C30.221 21.2364 35.6907 7.87569 29.4397 2.11219C23.1882 -3.65137 16.026 4.20722 16.026 4.20722H15.9739C15.9739 4.20722 8.81119 -3.65137 2.56021 2.11219C-3.69064 7.87501 1.77907 21.1704 15.9739 26.9339Z" fill="url(#paint0_linear_2489_11648)"/>
                                <defs>
                                <linearGradient id="paint0_linear_2489_11648" x1="30.7046" y1="12.9376" x2="0.0179817" y2="12.9487" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#009E4B"/>
                                <stop offset="1" stop-color="#04659A"/>
                                </linearGradient>
                                </defs>
                                </svg> -en</h2>
                                <p>Ihre Rückmeldung hilft uns, unsere Betreuung und unseren Service weiter zu verbessern.</p>
                                <div className='sc_icon_list'>
                                    <div className='sc_icon_item'>
                                        <img src={scIcon1} alt="Schnell" />
                                        <div className=''>
                                            <h4>Schnell</h4>
                                            <p>Die Teilnahme dauert nur wenige Minuten.</p>
                                        </div>
                                    </div>
                                    <div className='sc_icon_item'>
                                        <img src={scIcon2} alt="Vertraulich" />
                                        <div className=''>
                                            <h4>Vertraulich</h4>
                                            <p>Ihre Angaben werden sorgfältig behandelt.</p>
                                        </div>
                                    </div>
                                    <div className='sc_icon_item'>
                                        <img src={scIcon3} alt="Direkt online" />
                                        <div className=''>
                                            <h4>Direkt online</h4>
                                            <p>Die Umfrage wird über einen Link geöffnet.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn_scanner mt-4'>
                                    <div className='btn_scanner_left'>
                                        <a href={`#`} target='_blank' className='button fill_btn'>ZUR UMFRAGE <img src={btnArrow} alt='#' /></a>
                                        <p><em>Die Umfrage öffnet sich in einem neuen Fenster.</em></p>
                                    </div>
                                    <div className='btn_scanner_right'>
                                        <img src={scannerIcon} alt="Scanner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
