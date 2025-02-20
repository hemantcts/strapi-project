import React from "react";
import Blogs from './Blogs';

export const UbersichtGesundheitsthemen = ({ data, color }) => {
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

            <section className="blogs">
                <Blogs />
            </section>
        </div>
    )
}