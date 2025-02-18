import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import Footer from './Footer'
import { TwoContent } from './mini_components/TwoContent'

export const PharmacyServices = () => {

    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-service?populate[banner_section][populate]=banner_image&populate[services_data][populate]`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setServicesData(data.data.services_data);
            // setSpecialsData(data.data.specials_section);
            // setProductsData(data.data.products_section);
            // setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='pharmacy_services'>
            <header>
                <Navbar />
            </header>

            <section className='pharmacy_banner_sec'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='main-button py-3'>
                <MyButton />
            </section>

            <section className="services-sec position-relative">
                <div className="container">

                    <TwoContent data={servicesData} color='green' />

                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
