import React, { useState } from 'react'

export const PartnersSection = ({ adData }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


    return (
        <div className="container-xxl">
            <div className='sec_title text-center'>
                <h2 className='text-white'>{adData?.Uberschrift}</h2>
            </div>
            <div className="partner_wrap row align-items-center justify-content-around">
                {adData?.Partners?.map((partner, index) => (
                    <div
                        key={index} className="img_item"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}

                    >
                        <a href={partner?.Link_URl} target='_blank' rel='noopener noreferrer'>
                            <img
                                src={`https://medzentrum.entwicklung-loewenmut.ch${hoveredIndex === index
                                        ? partner?.farbige_Bild?.url
                                        : partner?.patner_bild?.url
                                    }`}
                                alt=""
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
