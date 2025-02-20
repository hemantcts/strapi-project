import React, {useState, useEffect} from 'react'
import nutriImg from '../images/nuetr.png'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import { SpeziellesSection } from './SpeziellesSection'
import { PartnersSection } from './PartnersSection';

const Ernahrungsdiagnostik = () => {

    const [bannerData, setBannerData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [specialsData, setSpecialsData] = useState(null);
    // const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

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
                {<BannerSection bannerData={bannerData} />}
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>
            <section className="wi_full py_3 dien_section">
                <div className="container-xxl">
                    <TwoContent data={servicesData} />
                </div>
            </section>
            <section className="wi_full spezielles_section">
                <SpeziellesSection specialsData={specialsData} color='blue' />
            </section>
            <section className='wi_full nuitrition_diagnos'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8 content_col'>
                            <blockquote>
                                <p>“Hinter jeder Diagnose steht ein Mensch mit einer individuellen Geschichte und seiner Einzigartigkeit. Mit Überzeugung integriere ich alle Aspekte, um Sie auf dem Weg zu Ihrem Gesundheitsziel optimal zu unterstützen. Dabei helfen mir die Werkzeuge der Ernährungsdiagnostik in Kombination mit meiner langjährigen Berufserfahrung. So freue ich mich auf Ihr Anliegen und Ihre Geschichte.”</p>
                                <h3>Bernadette Schneider</h3>
                                <small>Ernährungsdiagnostikerin nach erpse<br />Ernährungsberaterin SVDE / BSc</small>
                            </blockquote>
                        </div>
                        <div className='col-lg-4 img_col'>
                            <img src={nutriImg} alt='' />
                        </div>
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

export default Ernahrungsdiagnostik