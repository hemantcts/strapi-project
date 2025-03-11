import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import ProductsSection from '../ProductsSection'
import Footer from '../Footer'
import ServicesSection from '../ServicesSection'
import { PartnersSection } from '../PartnersSection'
import { Accordion } from '../Accordion'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import { SpeziellesSection } from '../SpeziellesSection'
import { StickyButton } from '../mini_components/StickyButton'

const OverviewPractice = () => {
    const activeLink = { link1: false, link2: true, link3: false, link4: false, link5: false, link6: false }
    const pageColor = 'blue';
    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [specialsData, setSpecialsData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/overview-practice?populate[Bannerbereich][populate]=Banner_Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Link&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=partners.Bild`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setServicesData(data.data.Dienstleistungsbereich);
            setSpecialsData(data.data.Sonderangebotsbereich);
            setProductsData(data.data.Produktbereich);
            setAdData(data.data.Anzeigenbereich);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='pharmacy'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>

            <Navbar activeLink={activeLink} />

            <section className='pharmacy_banner_sec'>
                <BannerSection bannerData={bannerData} color={pageColor} />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} activePage='Praxis' />
            </section>

            <section className="wi_full py_3 dien_section">
                <div className="container-xxl">
                    <TwoContent data={servicesData} color='blue' />
                    <div className="dien_list">
                        <ServicesSection servicesData={servicesData?.Service_Daten} color='blue' />
                    </div>
                </div>
            </section>

            <section className="wi_full py_3 pt-0 spezielles_section">
                <SpeziellesSection specialsData={specialsData} color='blue' />
            </section>

            <section className='products-sec'>
                <ProductsSection productsData={productsData} color='blue' />
            </section>

            <section className='wi_full py_3 partner_sec bg_dark_grey'>
                <PartnersSection adData={adData} />
            </section>

            <Footer />
        </div>
    )
}

export default OverviewPractice
