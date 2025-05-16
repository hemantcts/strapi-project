import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { Accordion } from './Accordion'
import { StickyButton } from './mini_components/StickyButton'

const Datenschutz = () => {

    const [bannerData, setBannerData] = useState(null);
    const [protectionData, setProtectionData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://backend.medzentrum.ch/api/datenschutzerklaerung?populate[Bannerbereich][populate]=Banner_Bild&populate[Datenschutzbereich][populate]=erweiterbare_Daten`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setProtectionData(data.data.Datenschutzbereich);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='datenschutz'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>
            <Navbar />
            <div className='inner_banner_Section'>
                {<BannerSection bannerData={bannerData} />}
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} />
            </section>
            <section className='wi_full py_3 daten_section'>
                <div className='container-xxl'>
                    <div className='sec_title text-center mb-5'>
                        <h2>{protectionData?.Uberschrift}</h2>
                    </div>
                    <div className='accordion_wrapper mt-4'>
                        <Accordion data={protectionData?.erweiterbare_Daten} border={false} greyy={true} customClass='content-box' icons={protectionData?.Icons} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Datenschutz