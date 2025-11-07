import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pdfIcon from '../images/dwnload-arrow.svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import heartImage from '../images/heart-snow.png'

export const PopupCustom = () => {
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

    // useEffect(() => {
    //     const hasSeenPopup = localStorage.getItem('hasSeenPopup');

    //     // if (!hasSeenPopup) {
    //     if (true && popupData !== null) {
    //         openBtnRef.current?.click(); // trigger modal via hidden button
    //         localStorage.setItem('hasSeenPopup', 'true');
    //     }
    // }, []);

    const openPopup = (data) => {
        if (data) {
            console.log('data got', data);
            openBtnRef.current?.click(); // trigger modal via hidden button
            localStorage.setItem('hasSeenPopup', 'true');
        }
    }

    const getPopups = async () => {
        const response = await fetch('https://backend.medzentrum.ch/api/popups?populate=*')
        const data = await response.json();
        console.log(data);

        let popup;

        if (data?.data?.length) {
            for (const element of data.data) {
                if (element?.Aktiv) {
                    setPopupData(element);
                    popup = element;
                    break;
                }
            }

            openPopup(popup);
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
                <div className="modal-dialog modal-dialog-centered popup-container" style={{ width: '780px' }}>
                    <div
                        className="modal-content d-flex flex-row overflow-hidden popup"
                    >
                        {/* Left Side: Text */}
                        <div className={`d-flex flex-column justify-content-center popup-box ${mobileWidth ? 'order-2' : ''}`} style={{ backgroundColor: '#d0d8e6', width: '100%', backgroundImage: `url(${heartImage})`, backgroundRepeat: 'no-repeat', backgroundSize: mobileWidth ? '8rem' : 'contain', backgroundPosition: mobileWidth ? '95% -5rem' : '96% -7rem' }}>
                            {true && (
                                <div className="block text-start">
                                    {mobileWidth ? (
                                        <div className="popup-heading mb-3" style={{ color: 'rgb(13, 101, 155)', fontWeight: 500, fontSize: 'var(--bs-h35)' }}>
                                            Unsere <b>Öffnungszeiten</b> <br /> über die Festtage
                                        </div>
                                    ) : (
                                        <div className="popup-heading mb-3" style={{ color: 'rgb(13, 101, 155)', fontWeight: 500, fontSize: 'var(--bs-h35)' }}>
                                            Unsere <b>Öffnungszeiten</b> über <br /> die Festtage
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
                                    <tr style={{ borderBottom: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Mi. 24.12.25</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–16.00*</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–12.00</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Do. 25. + Fr. 26.12.25</td>
                                        <td style={{ padding: '0.4rem 0' }}>geschlossen</td>
                                        <td style={{ padding: '0.4rem 0' }}>geschlossen</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Sa. 27.12.25</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–16.00*</td>
                                        <td style={{ padding: '0.4rem 0' }}>geschlossen</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Mi. 31.12.25</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–16.00*</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–12.00</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Do. 1. + Fr. 2.1.26</td>
                                        <td style={{ padding: '0.4rem 0' }}>geschlossen</td>
                                        <td style={{ padding: '0.4rem 0' }}>geschlossen</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '0.4rem 0' }}>Sa. 3.1.26</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–16.00*</td>
                                        <td style={{ padding: '0.4rem 0' }}>geschlossen</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>(*durchgehend) </td>
                                    </tr>
                                </tbody>
                            </table>

                            <br />

                            <div className="popup-heading" style={{ color: 'rgb(13, 101, 155)', fontWeight: '600' }}>
                                Das sind die «normalen» Öffnungszeiten:
                            </div>

                            <table cellpadding="6" cellspacing="0" style={{ borderCollapse: 'collapse', width: '100%', fontWeight: '500', fontSize: 'var(--bs-fs18)' }}>
                                <tbody>
                                    <tr style={{ borderTop: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Montag – Freitag</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–12.15 / 13.00–18.30<br />(Ärztehaus: Nur bis 18.00)</td>
                                    </tr>
                                    <tr style={{ borderTop: '1px solid rgb(13, 101, 155)' }}>
                                        <td style={{ padding: '0.4rem 0' }}>Samstag</td>
                                        <td style={{ padding: '0.4rem 0' }}>8.00–13.00 (nur Apotheke)</td>
                                    </tr>
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
