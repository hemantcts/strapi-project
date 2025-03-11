import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import Footer from '../Footer'
import { TwoContent } from '../mini_components/TwoContent'
import { ShuffleComponent } from '../ShuffleComponent'
import { StickyButton } from '../mini_components/StickyButton'

export const PharmacyServices = () => {
    const activeLink = { link1: true, link2: false, link3: false, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-service?populate[Bannerbereich][populate]=Banner_Bild&populate[Service_Daten][populate]=*&populate[Apotheken_Dienstleistungsdaten][populate]=Bild.Bild&populate[Apotheken_Dienstleistungsdaten][populate]=list_items`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setServicesData(data.data.Service_Daten);
            setPharmacyServicesData(data.data.Apotheken_Dienstleistungsdaten);
            // setProductsData(data.data.products_section);
            // setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='pharmacy_services'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen Apotheke' btnLink='/terminbuchung-apotheke' color='green' />
            </div>

            <Navbar activeLink={activeLink} />

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} activePage='Apotheke' color='green' />
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
