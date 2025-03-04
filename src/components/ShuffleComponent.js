import React, { useEffect, useState } from 'react';
import imgNote from '../images/notefall-2.png'
import imgNotefall from '../images/notefall-2.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const ShuffleComponent = ({ data, color }) => {

    return (
        <div className={`${color}`}>
            {data?.map((services, index) => (
                <div className='shuffle_item_wrap'>
                    <div key={index} className='row shuffle_row'>
                        <div className='col-12 col-lg-6 img_col'>

                            {/* <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.image?.url}`} alt='' /> */}

                            {Array.isArray(services?.image) && services?.image?.length > 0 ? (
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
                                    {services?.image?.map((img, index) => (
                                        <div key={index} className="item">
                                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${img?.image?.url}`} alt={`Service ${index + 1}`} />
                                        </div>
                                    ))}
                                </OwlCarousel>
                            ) : (
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.image?.url}`} alt="Service" />
                            )}
                        </div>
                        <div className='col-12 col-lg-6 content_col'>
                            <div className='content_box text-black'>
                                <h2>{services?.title}</h2>
                                {services?.description && (<div dangerouslySetInnerHTML={{ __html: services?.description }} />)}
                                {services?.list_items && (
                                    <ul>
                                        {services?.list_items?.map((list_item, index) => (
                                            <li key={index}>{list_item?.title}</li>
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