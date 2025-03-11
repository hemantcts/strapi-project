import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { KontaktDetails } from '../KontaktDetails'
import { StickyButton } from '../mini_components/StickyButton'
import MapComponent from '../MapComponent'

const Kontakt = () => {
    const activeLink = { link1: false, link2: false, link3: false, link4: false, link5: false, link6: true }
    const [bannerData, setBannerData] = useState(null);
    const [contactData, setContactData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/oeffnungszeiten-und-kontakt?populate[Bannerbereich][populate]=Banner_Bild&populate[Kontaktdaten][populate]=Details.icon&populate[Kontaktdaten][populate]=time_details`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setContactData(data.data.Kontaktdaten);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='kontakt'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>
            <Navbar activeLink={activeLink} />
            <div className='inner_banner_Section'>
                {<BannerSection bannerData={bannerData} />}
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} />
            </section>
            <section className='wi_full py_3 kontakt_section'>
                <div className='container-xxl text-black'>
                    <KontaktDetails contactData={contactData} />
                </div>
            </section>

            <section>
                <div className="map">
                    <div className='map mt-5'>
                        <MapComponent />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Kontakt