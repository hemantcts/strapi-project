import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { KontaktDetails } from './KontaktDetails'

const Kontakt = () => {

    // const [bannerData, setBannerData] = useState(null);
    // const [servicesData, setServicesData] = useState(null);
    // const [specialsData, setSpecialsData] = useState(null);
    // const [productsData, setProductsData] = useState(null);
    // const [adData, setAdData] = useState(null);

    // const getPageData = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image`)
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //         setBannerData(data.data.banner_section);
    //         setServicesData(data.data.services_section);
    //         setSpecialsData(data.data.specials_section);
    //         setProductsData(data.data.products_section);
    //         setAdData(data.data.ad_section);
    //     }
    // }

    // useEffect(() => {
    //     getPageData();
    // }, [])

    return (
        <div className='kontakt'>
            <Navbar />
            <div className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} />
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>
            <KontaktDetails />
            <Footer />
        </div>
    )
}

export default Kontakt