import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { Blogs } from './Blogs'
import Footer from './Footer'

export const UbersichtGesundheitsthemen = ({ data, color }) => {
    const [bannerData, setBannerData] = useState();
    return (
        <div className="ubersicht-gesundheitsthemen">
            <header>
                <Navbar />
            </header>

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>

            <section className="wi_full py_3 blog_section">
                <div className='container-xxl'>
                    <div className='sec_title text-center'>
                        <h2>Proin gravida nibh</h2>
                    </div>
                    <div className='blog_container mt-4'>
                        <Blogs />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}