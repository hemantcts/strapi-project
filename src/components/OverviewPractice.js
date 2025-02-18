import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import ProductsSection from './ProductsSection'
import Footer from './Footer'
import ServicesSection from './ServicesSection'
import { PartnersSection } from './PartnersSection'
import { Accordion } from './Accordion'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'

const OverviewPractice = () => {

    const pageColor = 'blue';
    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [specialsData, setSpecialsData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/overview-practice?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setServicesData(data.data.services_section);
            setSpecialsData(data.data.specials_section);
            setProductsData(data.data.products_section);
            setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='pharmacy'>
            <header>
                <Navbar />
            </header>

            <section className='pharmacy_banner_sec'>
                <BannerSection bannerData={bannerData} color={pageColor} />
            </section>

            <section className='main-button py-3'>
                <MyButton />
            </section>

            <section className="services-sec position-relative">
                <div className="container">
                    <TwoContent data={servicesData} color={pageColor} />

                    <div className="service-sec-content">
                        <ServicesSection servicesData={servicesData?.services_data} />
                    </div>
                </div>
            </section>

            <section className="specials-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${specialsData?.image?.url}`} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2>{specialsData?.heading}</h2>

                            <Accordion data={specialsData?.accordion_data} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='products-sec'>
                <ProductsSection productsData={productsData} />
            </section>

            <section className='ad-sec'>
                <PartnersSection adData={adData} />
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default OverviewPractice
