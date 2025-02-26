import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import Footer from '../Footer'
import { TwoContent } from '../mini_components/TwoContent'
import { ShuffleComponent } from '../ShuffleComponent'

export const PharmacyServices = () => {
    const activeLink = { link1: true, link2: false, link3: false, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-service?populate[banner_section][populate]=banner_image&populate[services_data][populate]=*&populate[pharmacy_services_data][populate]=image&populate[pharmacy_services_data][populate]=list_items`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setServicesData(data.data.services_data);
            setPharmacyServicesData(data.data.pharmacy_services_data);
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
                <Navbar activeLink={activeLink} />
            </header>

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} activePage='Apotheke' color='green' />
            </section>

            <section className="wi_full py_3 dien_shuffle">
                <div className="container-xxl">
                    <TwoContent data={servicesData} color='green' />
                    <div className='shuffle_container pt-5'>
                    <ShuffleComponent data={pharmacyServicesData} color='green' />
                    </div>
                </div>
                {/* <div className='shuffle_container mt-5'>
                    <ShuffleComponent data={pharmacyServicesData} color='green' />
                </div> */}
            </section>

            <Footer />
        </div>
    )
}
