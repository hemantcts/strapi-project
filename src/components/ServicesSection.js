import React, { useEffect, useRef, useState } from 'react'
import img1 from '../images/services-sec-img1.png'
import MyLink from './mini_components/MyLink'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const ServicesSection = ({ servicesData, color }) => {
    const isHtml = (str) => {
        const doc = new DOMParser().parseFromString(str, "text/html");
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    };

    const titleRefs = useRef([]);
    const contentRefs = useRef([]);
    const btnRefs = useRef([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setEqualHeight = (refs) => {
            if (refs.current.length) {
                let maxHeight = 0;

                // Find max height
                refs.current.forEach((el) => {
                    if (el) {
                        el.style.height = 'auto'; // Reset before getting height
                        maxHeight = Math.max(maxHeight, el.offsetHeight);
                    }
                });

                // Apply max height
                refs.current.forEach((el) => {
                    if (el) el.style.height = `${maxHeight}px`;
                });
            }
        };

        setEqualHeight(titleRefs);
        setEqualHeight(contentRefs);
        setEqualHeight(btnRefs);

        window.addEventListener('resize', () => {
            setEqualHeight(titleRefs);
            setEqualHeight(contentRefs);
            setEqualHeight(btnRefs);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setEqualHeight(titleRefs);
                setEqualHeight(contentRefs);
                setEqualHeight(btnRefs);
            });
        };
    }, [servicesData, loading]);

    // useEffect(() => {
    //     setLoading(true);
    // }, [])

    return (
        <div className="row dien_list">
            {servicesData?.map((service, index) => (
                <div className="col-lg-6 dien_itm mt_col" key={index}>
                    <div className='item_inner'>
                        <div className='row'>
                            <div className="item_img">
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${service?.Bild?.url}`} alt="" onLoad={()=>setLoading(!loading)} />
                            </div>

                            <div className="item_text">
                                <h3 ref={(el) => (titleRefs.current[index] = el)} className='fw_medium'>{service?.Titel}</h3>
                                <div ref={(el) => (contentRefs.current[index] = el)} className="content">
                                    {service?.Beschreibung && <BlocksRenderer content={service?.Beschreibung} />}
                                </div>
                                <div class="btn_block">
                                    <MyLink className="button blue_btn text-uppercase" link={service?.Link?.Link_URL} text={service?.Link?.link_text} color={color} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesSection
