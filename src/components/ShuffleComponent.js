import React, { useEffect, useState } from 'react';
import imgNote from '../images/notefall-2.png'
import imgNotefall from '../images/notefall-2.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ShuffleComponent = ({ data, color }) => {

    const [showInfo, setShowInfo] = useState(false)

    const changeShowInfo = ()=>{
        setShowInfo(!showInfo);
    }

    return (
        <div className={`${color}`}>
            {data?.map((services, index) => (
                <div className='shuffle_item_wrap'>
                    <div key={index} className='row shuffle_row'>
                        <div className='col-12 col-lg-6 img_col'>

                            {/* <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.image?.url}`} alt='' /> */}

                            {Array.isArray(services?.Bild) && services?.Bild?.length > 0 ? (
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    margin={10}
                                    nav={false}
                                    dots={true}
                                    autoplay={true}
                                    autoplayTimeout={3000}
                                    items={1}
                                >
                                    {services?.Bild?.map((img, index) => (
                                        <div key={index} className="item">
                                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${img?.Bild?.url}`} alt={`Service ${index + 1}`} />
                                        </div>
                                    ))}
                                </OwlCarousel>
                            ) : (
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.Bild?.url}`} alt="Service" />
                            )}
                        </div>
                        <div className='col-12 col-lg-6 content_col'>
                            <div className='content_box text-black'>
                                <h2>{services?.Titel}</h2>
                                {services?.Beschreibung && <BlocksRenderer content={services?.Beschreibung} />}
                                {services?.list_items && (
                                    <ul>
                                        {services?.list_items?.map((list_item, index) => (
                                            <li key={index}>
                                                {/* {list_item?.title} */}

                                                {list_item?.Titel?.includes("{info}") ? (
                                                    <>
                                                        {list_item.Titel.replace("{info}", "")}
                                                        <button onClick={changeShowInfo} className='info-icon ms-2'>
                                                            <img src="https://medzentrum.entwicklung-loewenmut.ch/uploads/Union_29_1667bd2206.svg" alt="" />
                                                            {showInfo && <div className='info-container'>
                                                                <p className='m-0'>(Blutdruckmessung plus Medikationscheck plus Messung von Bauchumfang, Body Mass Index BMI und Körperfett)</p>
                                                            </div>}
                                                        </button>
                                                    </>
                                                ) : (
                                                    list_item?.Titel
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}