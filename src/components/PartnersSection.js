import React from 'react'

export const PartnersSection = ({adData}) => {
    return (
        <div className="container-xxl">
            <div className='sec_title text-center'>
                <h2 className='text-white'>{adData?.heading}</h2>
            </div>
            <div className="partner_wrap row align-items-center justify-content-around">
                {adData?.partners?.map((partner, index) => (
                    <div key={partner?.id ?? index} className="img_item">
                        <img
                            src={`https://medzentrum.entwicklung-loewenmut.ch${partner?.image?.url}`}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
