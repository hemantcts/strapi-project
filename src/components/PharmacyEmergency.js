import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton';
import Footer from './Footer';

export const PharmacyEmergency = () => {

    const [bannerData, setBannerData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-emergency?populate[banner_section][populate]=banner_image`)
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

            <section className='pharmacy_banner_sec'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='main-button py-3'>
                <MyButton />
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
