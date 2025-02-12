import React from 'react'

export const BannerSection = ({bannerData, color}) => {
    return (
        <div className={`banner_component`}>
            {/* <div className={`banner_banner ${color}`} style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch${bannerData?.banner_image?.url}')` }}> */}
            <div className={`banner_banner ${color}`} style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch/uploads/pharmacy_banner_img_19336f21ef.png')` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className='d-flex'>
                                <div className="col-1 banner_padding"></div>
                                <div className="col-11">
                                    <div className="banner_heading text-center py-5 px-sm-3">
                                        <h1>{bannerData?.title}</h1>
                                        <p className='mb-0'>{bannerData?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
