import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import { BannerSection } from '../BannerSection';
import { MyButton } from '../mini_components/MyButton';
import Footer from '../Footer';
import { EmergencyContact } from '../EmergencyContact';
import { ShuffleComponent } from '../ShuffleComponent';
import { StickyButton } from '../mini_components/StickyButton';

export const PharmacyEmergency = () => {
    const activeLink = { link1: true, link2: false, link3: false, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [contactData, setContactData] = useState(null);
    const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-emergency?populate[Bannerbereich][populate]=Banner_Bild&populate[Informationsbereich][populate]=icons&populate[Apotheken_Dienstleistungen][populate]=Bild`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setContactData(data.data.Informationsbereich);
            setPharmacyServicesData(data.data.Apotheken_Dienstleistungen);
            // setProductsData(data.data.products_section);
            // setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='pharmacy_emergency'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen Apotheke' btnLink='/terminbuchung-apotheke' color='green' />
            </div>

            <Navbar activeLink={activeLink} />

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='green' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} activePage='Apotheke' color='green' />
            </section>

            <section className='wi_full py_3 notefall_section'>
                <div className='container-xxl'>
                    <div className='emrgeny_contact_container'>
                        <EmergencyContact contactData={contactData} color='green' />
                    </div>
                    <div className='shuffle_container pt-5'>
                        <ShuffleComponent data={pharmacyServicesData} color='green' shuffle={true} validPage={true} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
