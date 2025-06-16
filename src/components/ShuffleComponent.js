import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ShuffleComponent = ({ data, color, shuffle, staticIcons, validPage }) => {

    // const [showInfo, setShowInfo] = useState(false)

    // const changeShowInfo = () => {
    //     setShowInfo(!showInfo);
    // }

    const [visibleInfoIndex, setVisibleInfoIndex] = useState(null);
    const [visibleInfoIndex2, setVisibleInfoIndex2] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRefs = useRef([]);
    const infoButtonRefs = useRef([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setEqualHeight = () => {
            if (containerRefs.current.length && validPage) {
                let maxHeight = 0;

                // Find max height
                containerRefs.current.forEach((el) => {
                    if (el) {
                        el.style.height = 'auto'; // Reset before getting height
                        maxHeight = Math.max(maxHeight, el.offsetHeight);
                    }
                });

                // Apply max height to all
                containerRefs.current.forEach((el) => {
                    if (el) el.style.height = `${maxHeight}px`;
                });
            }
        };

        setEqualHeight();
        window.addEventListener('resize', setEqualHeight);
        return () => window.removeEventListener('resize', setEqualHeight);
    }, [data, loading]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                infoButtonRefs.current.length &&
                !infoButtonRefs.current.some((ref) => ref && ref.contains(event.target))
            ) {
                setVisibleInfoIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const changeShowInfo = (index) => {
        setVisibleInfoIndex(visibleInfoIndex === index ? null : index);
    };

    const filterTitle = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const isTouchDevice = () => {
        return (
            typeof window !== 'undefined' &&
            ('ontouchstart' in window || navigator.maxTouchPoints > 0)
        );
    };


    return (
        <div className={`${color}`}>
            {data?.map((services, index) => (
                <div key={index} ref={(el) => (containerRefs.current[index] = el)} className={`${shuffle ? 'odd' : 'even'} shuffle_item_wrap`}>
                    <div className='row shuffle_row'>
                        <div className='col-12 col-lg-6 img_col'>

                            {/* <img src={`https://backend.medzentrum.ch${services?.image?.url}`} alt='' /> */}

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
                                            <img src={`https://backend.medzentrum.ch${img?.Bild?.url}`} alt={`Service ${index + 1}`} />
                                        </div>
                                    ))}
                                </OwlCarousel>
                            ) : Array.isArray(services?.Bild) && services?.Bild?.length === 1 ? (
                                <img src={`https://backend.medzentrum.ch${services?.Bild[0]?.Bild?.url}`} alt="Service" />
                            ) : (
                                <img src={`https://backend.medzentrum.ch${services?.Bild?.url}`} alt="Service" onLoad={()=>setLoading(!loading)} />
                            )}
                        </div>
                        <div className='col-12 col-lg-6 content_col'>
                            <div className={`content_box text-black ${color} ${staticIcons ? 'icons2' : ''} ${(services?.icons || staticIcons) ? 'icons' : 'no_icons'}`}>
                                <h2 className='break-word'>{services?.Titel}</h2>
                                {services?.Beschreibung && <BlocksRenderer content={services?.Beschreibung} />}
                                {services?.list_items && (
                                    <ul>
                                        {services?.list_items?.map((list_item, index) => (
                                            <li className={`${hoveredIndex === index ? 'make_hover' : 'no_hover'}`} key={index}>
                                                {list_item?.link_url ? (
                                                    <>
                                                        <Link onMouseEnter={!isTouchDevice() ? () => handleMouseEnter(index) : undefined}
                                                            onMouseLeave={!isTouchDevice() ? handleMouseLeave : undefined} className={`${color} list_item_links`} to={filterTitle(list_item?.link_url)}>{list_item?.Titel}</Link>
                                                    </>
                                                ) : (
                                                    <>
                                                        {list_item?.Titel}
                                                    </>
                                                )}

                                                {list_item?.info && (
                                                    <>
                                                        {/* {list_item.Titel.replace("{info}", "")} */}
                                                        <button
                                                            ref={(el) => (infoButtonRefs.current[index] = el)}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                changeShowInfo(index);
                                                            }}
                                                            onMouseEnter={() => setVisibleInfoIndex2(index)}
                                                            onMouseLeave={() => setVisibleInfoIndex2(null)}
                                                            className="info-icon ms-2 text-start">
                                                            <img src="https://backend.medzentrum.ch/uploads/Union_29_1667bd2206.svg" alt="" />
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