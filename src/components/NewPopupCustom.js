import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pdfIcon from '../images/dwnload-arrow.svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import heartImage from '../images/heart-snow.png'

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
            <button
                type="button"
                className="d-none"
                data-bs-toggle="modal"
                data-bs-target="#myModal2"
                ref={openBtnRef}
            >
                Open Modal
            </button>

            {/* The actual modal */}
            <div
                className="modal fade"
                id="myModal2"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered popup-container" style={{ width: '780px' }}>
                    <div
                        className="modal-content d-flex flex-row overflow-hidden popup"
                    >
                        {/* Left Side: Text */}
                        <div className={`d-flex flex-column justify-content-center popup-box ${mobileWidth ? 'order-2' : ''}`} style={{ backgroundColor: '#d0d8e6', width: '100%', backgroundImage: `url(${heartImage})`, backgroundRepeat: 'no-repeat', backgroundSize: mobileWidth ? '8rem' : 'contain', backgroundPosition: mobileWidth ? '95% -5rem' : '96% -7rem' }}>
                            {popupData?.Titel && (
                                <div className="block text-start">
                                    {mobileWidth ? (
                                        <div className="popup-heading mb-3" style={{ color: 'rgb(13, 101, 155)', fontWeight: 500, fontSize: 'var(--bs-h35)' }}>
                                            {/* Unsere <b>Öffnungszeiten</b> <br /> über die Festtage */}
                                            <div dangerouslySetInnerHTML={{
                                                __html: popupData?.Titel
                                                    .replace('Öffnungszeiten', '<b>Öffnungszeiten</b> <br />')
                                                    // .replace('über ', 'über <br /> ')
                                            }} />
                                        </div>
                                    ) : (
                                        <div className="popup-heading mb-3" style={{ color: 'rgb(13, 101, 155)', fontWeight: 500, fontSize: 'var(--bs-h35)' }}>
                                            <div dangerouslySetInnerHTML={{
                                                __html: popupData?.Titel
                                                    .replace('Öffnungszeiten', '<b>Öffnungszeiten</b>')
                                                    .replace('über ', 'über <br /> ')
                                            }} />
                                        </div>
                                    )}
                                </div>
                            )}

                            <table className='popup_table' cellpadding="6" cellspacing="0" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'start', fontWeight: '500', fontSize: 'var(--bs-fs18)' }}>
                                {/* <thead style={{backgroundColor: '#e6f0fa'}}> */}
                                <thead style={{ borderBottom: '1px solid rgb(13, 101, 155)' }}>
                                    <tr style={{ fontSize: 'var(--bs-fs20)' }}>
                                        <th></th>
                                        <th>Apotheke</th>
                                        <th>Ärztehaus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popupData?.Festtage_Info?.map((info, i) => (
                                        <tr key={i} style={{ borderBottom: i !== popupData?.Festtage_Info.length - 1 ? '1px solid rgb(13, 101, 155)' : 'none' }}>
                                            <td style={{ padding: '0.4rem 0' }}>{info?.Titel}</td>
                                            <td style={{ padding: '0.4rem 0' }}>{info?.Apotheke}</td>
                                            <td style={{ padding: '0.4rem 0' }}>{info?.Aerztehaus}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>(*durchgehend) </td>
                                    </tr>
                                </tbody>
                            </table>

                            <br />

                            <div className="popup-heading" style={{ color: 'rgb(13, 101, 155)', fontWeight: '600' }}>
                                {popupData?.Untertitel}
                            </div>

                            <table cellpadding="6" cellspacing="0" style={{ borderCollapse: 'collapse', width: '100%', fontWeight: '500', fontSize: 'var(--bs-fs18)' }}>
                                <tbody>
                                    {popupData?.Zeitplan?.map((info, i) => (
                                        <tr key={i} style={{ borderTop: '1px solid rgb(13, 101, 155)' }}>
                                            <td style={{ padding: '0.4rem 0' }}>{info?.Tage}</td>
                                            <td style={{ padding: '0.4rem 0' }}>{info?.Zeit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>





                        </div>
                        <button
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                background: 'rgb(13, 101, 155)',
                                // background: 'rgba(231, 231, 231, 0.95)',
                                border: 'none',
                                borderRadius: '50%',
                                width: mobileWidth ? '28px' : '35px',
                                height: mobileWidth ? '28px' : '35px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 16 16"><path fill-rule="evenodd" d="m3.426 2.024.094.083L8 6.586l4.48-4.479a1 1 0 0 1 1.497 1.32l-.083.095L9.414 8l4.48 4.478a1 1 0 0 1-1.32 1.498l-.094-.083L8 9.413l-4.48 4.48a1 1 0 0 1-1.497-1.32l.083-.095L6.585 8 2.106 3.522a1 1 0 0 1 1.32-1.498Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
