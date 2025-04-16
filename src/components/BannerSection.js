import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const BannerSection = ({ bannerData, color, teamBanner }) => {
    return (
        <>
            {!teamBanner ?

                (<section className={`wi_full py_3 banner_sec inner_banner ${color}`} style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch${bannerData?.Banner_Bild?.url}')` }}>
                   {bannerData?.Banner_Bild && <img className='mobile_bnr_img' src={`https://medzentrum.entwicklung-loewenmut.ch${bannerData?.Banner_Bild?.url}`} />}
                    {bannerData ? (
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-12">
                                    <div className="banner_content text-center">
                                        <h1 className='text-uppercase'>{bannerData?.Titel}</h1>
                                        {bannerData?.Beschreibung && <BlocksRenderer content={bannerData?.Beschreibung} />}
                                        {/* <p className='mb-0'>{bannerData?.Beschreibung}</p> */}
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
                ) : (
                    <section className={`wi_full py_3 banner_sec inner_banner team_banner ${color}`}>
                        {bannerData?.Banner_Bild && <img className='team_bnr_img visible_desktop' src={`https://medzentrum.entwicklung-loewenmut.ch${bannerData?.Banner_Bild?.url}`} />}
                        {bannerData?.Mobile_Banner_Bild && <img className='team_bnr_img visible_mobile' src={`https://medzentrum.entwicklung-loewenmut.ch${bannerData?.Mobile_Banner_Bild?.url}`} />}
                        {bannerData ? (
                            <div className="container-xxl">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="banner_content text-center">
                                            <h1 className='text-uppercase'>{bannerData?.Titel}</h1>
                                            {bannerData?.Beschreibung && <BlocksRenderer content={bannerData?.Beschreibung} />}
                                            {/* <p className='mb-0'>{bannerData?.Beschreibung}</p> */}
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
        </>
    )
}
