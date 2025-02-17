import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import servicesImg from '../images/services_img.png'
import specialsImg from '../images/specials_img.png'
import ProductsSection from './ProductsSection'
import Footer from './Footer'


import MyLink from './mini_components/MyLink'
import ServicesSection from './ServicesSection'
import { PartnersSection } from './PartnersSection'
import { Accordion } from './Accordion'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'

const PharmacyOverview = () => {

    const productsData2 = {
        heading: "Monatsaktionen der Rotpunkt Apotheken",
        paragraph: "Die Rotpunkt Apotheken zeichnen sich seit über zehn Jahren durch attraktive Sparangebote, viele Serviceleistungen, monatliche Überraschungen und eine persönliche und kompetente Beratung aus.",
        buttonText: "weiter zur Praxis",
        products: [
            {
                productDetails: {
                    name: 'Müde?',
                    description: 'Supradyn® pro energy-complex trägt zur Verringerung von Ermüdung und zu einer normalen Funktion des Immunsystems bei.',
                    expiry: 'Gültig bis 31.01.2025'
                },
                about: {
                    heading: 'Supradyn® pro energy-complex',
                    prices: [
                        { currentPrice: 'Brausetabletten, 45 Stk.', current: '37.05', lastPrice: 'statt', last: '46.30' },
                        { currentPrice: 'Filmtabletten, 90 Stk.', current: '50.25', lastPrice: 'statt', last: '62.80' }
                    ]
                },
                extraDetails: {
                    title: "Bayer (Schweiz) AG",
                    desc: "Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage."
                }
            },
            {
                productDetails: {
                    name: 'Rauchentwöhnung?',
                    description: 'Nicorette® lindert die Entzugserscheinungen und kann so dabei unterstützen, rauchfrei zu werden.',
                    expiry: 'Gültig bis 31.01.2025'
                },
                about: {
                    heading: 'Nicorette®',
                    prices: [
                        { currentPrice: 'z.B. Mint Spray, 150 Dosierungen', current: '49.70', lastPrice: 'statt', last: '62.10' }
                    ]
                },
                extraDetails: {
                    title: "JNTL Consumer Health II (Switzerland) GmbH",
                    desc: "Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage."
                }
            }
        ]
    }

    const servicesData2 = [
        {
            image: '../images/img1',
            title: 'Aktionen',
            description: 'An dieser Stelle informieren wir Sie laufend über aktuelle Medikamenten-Aktionen.',
            link: {
                link_text: "WEITERLESEN ",
                link_url: "/"
            }
        },
        {
            image: '../images/img1',
            title: 'Aktionen',
            description: 'An dieser Stelle informieren wir Sie laufend über aktuelle Medikamenten-Aktionen.',
            link: {
                link_text: "WEITERLESEN ",
                link_url: "/"
            }
        },
        {
            image: '../images/img1',
            title: 'Aktionen',
            description: 'An dieser Stelle informieren wir Sie laufend über aktuelle Medikamenten-Aktionen.',
            link: {
                link_text: "WEITERLESEN ",
                link_url: "/"
            }
        },
        {
            image: '../images/img1',
            title: 'Aktionen',
            description: 'An dieser Stelle informieren wir Sie laufend über aktuelle Medikamenten-Aktionen.',
            link: {
                link_text: "WEITERLESEN ",
                link_url: "/"
            }
        }
    ]

    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [specialsData, setSpecialsData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image`)
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
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='main-button py-3'>
                <MyButton />
            </section>

            <section className="services-sec position-relative">
                <div className="container">
                    <TwoContent data={servicesData} color='green' />

                    <div className="service-sec-content">
                        <ServicesSection servicesData={servicesData?.services_data} />
                    </div>
                </div>
            </section>

            <section className="specials-sec">
                <div className="container">
                    <div className="row">
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

export default PharmacyOverview
