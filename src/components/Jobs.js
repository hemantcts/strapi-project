import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import Footer from './Footer';
import { JobShuffle } from './JobShuffle';

export const Jobs = () => {

    const [bannerData, setBannerData] = useState(null);
    //const [contactData, setContactData] = useState(null);
    //const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    // const getPageData = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/praxis-notfall?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image`)
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //         setBannerData(data.data.banner_section);
    //         setContactData(data.data.info_section);
    //         setPharmacyServicesData(data.data.pharmacy_services);
    //         // setProductsData(data.data.products_section);
    //         // setAdData(data.data.ad_section);
    //     }
    // }

    // useEffect(() => {
    //     getPageData();
    // }, [])

    return (
        <div className='jobs'>
            <header>
                <Navbar />
            </header>
            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>
            <section className="wi_full py_3 job_sec">
                <div className="container-xxl">
                    <TwoContent />
                    <div className='mt_3 job_shuffle'>
                        <JobShuffle />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
