import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { KontaktDetails } from './KontaktDetails'

const Kontakt = () => {

    const [bannerData, setBannerData] = useState(null);
    const [contactData, setContactData] = useState(null);
    // const [specialsData, setSpecialsData] = useState(null);
    // const [productsData, setProductsData] = useState(null);
    // const [adData, setAdData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/oeffnungszeiten-und-kontakt?populate[banner_section][populate]=banner_image&populate[contact_details][populate]=details.icon&populate[contact_details][populate]=time_details`)
        const data = await response.json(); 
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setContactData(data.data.contact_details);
            // setSpecialsData(data.data.specials_section);
            // setProductsData(data.data.products_section);
            // setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='kontakt'>
            <Navbar />
            <div className='inner_banner_Section'>
                {<BannerSection bannerData={bannerData} />}
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>
            <section className='wi_full py_3 kontakt_section'>
                <div className='container-xxl text-black'>
                    <KontaktDetails contactData={contactData} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Kontakt