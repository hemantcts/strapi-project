import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import { BannerSection } from '../BannerSection';
import { MyButton } from '../mini_components/MyButton';
import Footer from '../Footer';
import { EmergencyContact } from '../EmergencyContact';
import { ShuffleComponent } from '../ShuffleComponent';

export const PraxisNotfall = () => {
    const activeLink = { link1: false, link2: true, link3: false, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [contactData, setContactData] = useState(null);
    const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/praxis-notfall?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setContactData(data.data.info_section);
            setPharmacyServicesData(data.data.pharmacy_services);
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
                <Navbar activeLink={activeLink} />
            </header>

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} activePage='Praxis' />
            </section>

            <section className='wi_full py_3 notefall_section'>
                <div className='container-xxl'>
                    <div className='emrgeny_contact_container'>
                        <EmergencyContact contactData={contactData} color='blue' />
                    </div>
                    <div className='shuffle_container pt-5'>
                        <ShuffleComponent data={pharmacyServicesData} color='blue' />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
