import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import Footer from '../Footer'
import { TwoContent } from '../mini_components/TwoContent'
import { ShuffleComponent } from '../ShuffleComponent'
import { StickyButton } from '../mini_components/StickyButton'

export const DienstleistungenPraxis = () => {
    const activeLink = { link1: false, link2: true, link3: false, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/dienstleistungen-praxis?populate[Bannerbereich][populate]=Banner_Bild&populate[Service_Daten][populate]=*&populate[Praxis_Dienstleistungen][populate]=Bild.Bild&populate[Praxis_Dienstleistungen][populate]=list_items`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setServicesData(data.data.Service_Daten);
            setPharmacyServicesData(data.data.Praxis_Dienstleistungen);
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
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>

            <Navbar activeLink={activeLink} />

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} activePage='Praxis' />
            </section>

            <section className="wi_full py_3 dien_shuffle">
                <div className="container-xxl">
                    <TwoContent data={servicesData} color='blue' />
                    <div className='shuffle_container pt-5'>
                        <ShuffleComponent data={pharmacyServicesData} color='blue' staticIcons={true} />
                    </div>
                </div>
                {/* <div className='shuffle_container mt-5'>
                    <ShuffleComponent data={pharmacyServicesData} color='blue' />
                </div> */}
            </section>

            <Footer />
        </div>
    )
}
