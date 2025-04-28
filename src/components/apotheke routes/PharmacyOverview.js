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
import MyLink from '../mini_components/MyLink'

const PharmacyOverview = () => {
    const activeLink = { link1: true, link2: false, link3: false, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [specialsData, setSpecialsData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[Bannerbereich][populate]=Banner_Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Link&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=Partners.patner_bild&populate[Anzeigenbereich][populate]=Partners.farbige_Bild`);
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
                <StickyButton btntext='Termin Buchen Apotheke' btnLink='/terminbuchung-apotheke' color='green' />
            </div>

            <Navbar activeLink={activeLink} />
            <div className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='green' />
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} activePage='Apotheke' color='green' />
            </section>
            <section className="wi_full py_3 dien_section">
                <div className="container-xxl">
                    <TwoContent data={servicesData} color='green' />
                    <div className="dien_list">
                        <ServicesSection servicesData={servicesData?.Service_Daten} color='green' />
                    </div>
                </div>
            </section>

            <section className="wi_full py_3 pt-0 spezielles_section">
                <SpeziellesSection specialsData={specialsData} color='green' />
            </section>

            <section className='products-sec py-4'>
                {/* <ProductsSection productsData={productsData} /> */}

                <div className="container">
                    <div className="test">

                        <iframe
                            className='products-iframe'
                            id="halfpage"
                            name="halfpage"
                            src="https://www.rotpunkt-apotheken.ch/iframes/halfpage-600.html"
                            width="100%"
                            // height="900px"
                            scrolling="no"
                            frameBorder="0"
                            style={{
                                // verticalAlign: "top",
                                // borderStyle: "hidden",
                                // border: "none",
                                // overflow: "hidden",
                                // margin: 0,
                                // padding: 0,
                            }}
                        >
                            Leider unterstützt Ihr Browser keine Inline Frames.
                        </iframe>
                    </div>
                    <div className='text-center pt-4'>
                        <MyLink text='zu allen Aktionen' link='https://www.rotpunkt-apotheken.ch/aktionen' fullBtn={true} color='green' />
                    </div>
                </div>

            </section>

            <section className='wi_full py_3 partner_sec bg_dark_grey'>
                <PartnersSection adData={adData} />
            </section>
            <Footer />
        </div>
    )
}

export default PharmacyOverview
