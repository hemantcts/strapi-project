import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ShuffleComponent = ({ data, color, shuffle, staticIcons }) => {

    // const [showInfo, setShowInfo] = useState(false)

    // const changeShowInfo = () => {
    //     setShowInfo(!showInfo);
    // }

    const [visibleInfoIndex, setVisibleInfoIndex] = useState(null);
    const [visibleInfoIndex2, setVisibleInfoIndex2] = useState(null);

    const changeShowInfo = (index) => {
        setVisibleInfoIndex(visibleInfoIndex === index ? null : index);
    };


    const filterTitle = (title) => {
        return title.replace(/\s+/g, '-');
    }

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


    return (
        <div className={`${color}`}>
            {data?.map((services, index) => (
                <div className={`${shuffle ? 'odd' : 'even'} shuffle_item_wrap`}>
                    <div key={index} className='row shuffle_row'>
                        <div className='col-12 col-lg-6 img_col'>

                            {/* <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.image?.url}`} alt='' /> */}

                            {Array.isArray(services?.Bild) && services?.Bild?.length > 1 ? (
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    margin={10}
                                    nav={false}
                                    dots={true}
                                    autoplay={true}
                                    autoplayTimeout={3000}
                                    smartSpeed={1000}
                                    items={1}
                                >
                                    {services?.Bild?.map((img, index) => (
                                        <div key={index} className="item">
                                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${img?.Bild?.url}`} alt={`Service ${index + 1}`} />
                                        </div>
                                    ))}
                                </OwlCarousel>
                            ) : Array.isArray(services?.Bild) && services?.Bild?.length === 1 ? (
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.Bild[0]?.Bild?.url}`} alt="Service" />
                            ) : (
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.Bild?.url}`} alt="Service" />
                            )}
                        </div>
                        <div className='col-12 col-lg-6 content_col'>
                            <div className={`content_box text-black ${color} ${staticIcons ? 'icons2' : ''} ${(services?.icons || staticIcons) ? 'icons' : 'no_icons'}`}>
                                <h2>{services?.Titel}</h2>
                                {services?.Beschreibung && <BlocksRenderer content={services?.Beschreibung} />}
                                {services?.list_items && (
                                    <ul>
                                        {services?.list_items?.map((list_item, index) => (
                                            <li className={`${hoveredIndex === index ? 'make_hover' : 'no_hover'}`} key={index}>
                                                {list_item?.link_url ? (
                                                    <>
                                                        <Link onMouseEnter={() => handleMouseEnter(index)}
                                                            onMouseLeave={handleMouseLeave} className={`${color} list_item_links`} to={filterTitle(list_item?.link_url)}>{list_item?.Titel}</Link>
                                                    </>
                                                ) : (
                                                    <>
                                                        {list_item?.Titel}
                                                    </>
                                                )}

                                                {list_item?.info && (
                                                    <>
                                                        {/* {list_item.Titel.replace("{info}", "")} */}
                                                        <button onClick={() => changeShowInfo(index)}onMouseEnter={() => setVisibleInfoIndex2(index)} onMouseLeave={() => setVisibleInfoIndex2(null)} className="info-icon ms-2 text-start">
                                                            <img src="https://medzentrum.entwicklung-loewenmut.ch/uploads/Union_29_1667bd2206.svg" alt="" />
                                                            {(visibleInfoIndex === index || visibleInfoIndex2 === index) && (
                                                                <div className="info-container">
                                                                    <p className="m-0">{list_item?.info}</p>
                                                                </div>
                                                            )}
                                                        </button>
                                                    </>
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