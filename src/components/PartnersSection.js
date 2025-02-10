import React from 'react'

export const PartnersSection = ({adData}) => {
    return (
        <div className="container">
            <h2 className='text-center'> {adData?.heading} </h2>
            <div className="ad-inner-content mt-5 mb-3">
                <div className="row align-items-center justify-content-around">

                    {adData?.partners?.map((partner, index) => (
                        <div key={partner?.id ?? index} className="col-lg-4 col-sm-5 col-8 px-lg-5 mb-lg-0 mb-5">
                            <img
                                src={`https://medzentrum.entwicklung-loewenmut.ch${partner?.image?.url}`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
