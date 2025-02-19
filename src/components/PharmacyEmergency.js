import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton';
import Footer from './Footer';

export const PharmacyEmergency = () => {

    const [bannerData, setBannerData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-emergency?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            // setServicesData(data.data.services_section);
            // setSpecialsData(data.data.specials_section);
            // setProductsData(data.data.products_section);
            // setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='pharmacy_emergency'>
            <header>
                <Navbar />
            </header>

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>


            <Footer />
        </div>
    )
}
