import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { Accordion } from './Accordion'

const Datenschutz = () => {

    const [bannerData, setBannerData] = useState(null);
    const [protectionData, setProtectionData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/datenschutzerklaerung?populate[banner_section][populate]=banner_image&populate[data_protection_section][populate]=accordion_data`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setProtectionData(data.data.data_protection_section);
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
                <MyButton buttonText={bannerData?.title} />
            </section>
            <section className='wi_full py_3 daten_section'>
                <div className='container-xxl'>
                    <div className='sec_title text-center'>
                        <h2>{protectionData?.heading}</h2>
                    </div>
                    <div className='accordion_wrapper mt-4'>
                        <Accordion data={protectionData?.accordion_data} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Datenschutz