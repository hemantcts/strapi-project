import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pdfIcon from '../images/dwnload-arrow.svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Popup = () => {
    const openBtnRef = useRef(null);
    const [popupData, setPopupData] = useState(null);
    const [mobileWidth, setMobileWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 350) {
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

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');

        // if (!hasSeenPopup) {
        if (true) {
            openBtnRef.current?.click(); // trigger modal via hidden button
            localStorage.setItem('hasSeenPopup', 'true');
        }
    }, []);

    const getPopups = async () => {
        const response = await fetch('https://medzentrum.entwicklung-loewenmut.ch/api/popups?populate=*')
        const data = await response.json();
        console.log(data);

        if (data?.data?.length) {
            for (const element of data.data) {
                if (element?.Aktiv) {
                    setPopupData(element);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        getPopups();
    }, [])

    return (
        <>
            {/* Hidden button to trigger Bootstrap modal */}
            <button
                type="button"
                className="d-none"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                ref={openBtnRef}
            >
                Open Modal
            </button>

            {/* The actual modal */}
            <div
                className="modal fade"
                id="myModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered popup-container">
                    <div
                        className="modal-content d-flex flex-row overflow-hidden popup"
                    >
                        {/* Left Side: Text */}
                        <div className={`d-flex flex-column justify-content-center align-items-center popup-box ${mobileWidth ? 'order-2' : ''}`} style={{ backgroundColor: popupData?.Hintergrund_Farbe }}>
                            {popupData?.Titel && (
                                <div className="block">
                                    <div className="popup-heading" style={{ color: popupData?.Titel_Farbe }}>
                                        {popupData?.Titel}
                                    </div>
                                </div>
                            )}
                            {popupData?.Subtitel && (
                                <div className="block">
                                    <div className="popup-discount" style={{ color: popupData?.Titel_Farbe }}>
                                        {popupData?.Subtitel}
                                    </div>
                                </div>
                            )}
                            {popupData?.Beschreibung && (
                                <div className="block">
                                    <div className="popup-description">
                                        {/* {popupData?.Beschreibung} */}
                                        <BlocksRenderer content={popupData?.Beschreibung} />
                                    </div>
                                    
                                </div>
                            )}
                            {(popupData?.Button?.Link_Text && popupData?.Button?.Link_URL) && (
                                <a
                                    href={popupData?.Button?.Link_URL}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-primary popup-btn"
                                    style={{ backgroundColor: popupData?.Button_Farbe }}
                                >
                                    {popupData?.Button?.Link_Text}
                                </a>
                            )}

                            {popupData?.PDF_Link &&
                                <a href={`https://medzentrum.entwicklung-loewenmut.ch${popupData?.PDF_Link?.url}`} target='_blank' className='button fill_btn pdf_btn px-2 py-3 w-100'>pdf download <img src={pdfIcon} alt='#' /></a>
                            }
                        </div>

                        {/* Right Side: Image */}
                        <div
                            className={`popup-img ${mobileWidth ? 'order-1' : ''}`}
                            style={{
                                width: '50%',
                                backgroundImage: `url(https://medzentrum.entwicklung-loewenmut.ch${popupData?.Bild?.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}
                        >
                            {/* Custom Close Button */}
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
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
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m3.426 2.024.094.083L8 6.586l4.48-4.479a1 1 0 0 1 1.497 1.32l-.083.095L9.414 8l4.48 4.478a1 1 0 0 1-1.32 1.498l-.094-.083L8 9.413l-4.48 4.48a1 1 0 0 1-1.497-1.32l.083-.095L6.585 8 2.106 3.522a1 1 0 0 1 1.32-1.498Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
