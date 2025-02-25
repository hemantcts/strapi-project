import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const BannerSection = ({ bannerData, color }) => {
    return (
        <section className={`wi_full py_3 banner_sec inner_banner ${color}`} style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch${bannerData?.banner_image?.url}')` }}>
            {bannerData ? (
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner_content text-center">
                                <h1 className='text-uppercase'>{bannerData?.title}</h1>
                                <p className='mb-0'>{bannerData?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner_content text-center">
                                <h1 className='text-uppercase'><Skeleton /></h1>
                                <p className='mb-0'><Skeleton count={2} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </section>
    )
}
