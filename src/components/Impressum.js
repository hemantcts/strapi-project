import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton'
import Footer from './Footer';
import { ImpressumData } from './ImpressumData';
import { ImpressumKontakt } from './ImpressumKontakt';
import { StickyButton } from './mini_components/StickyButton';

export const Impressum = () => {

    const [bannerData, setBannerData] = useState(null);
    const [contactData, setContactData] = useState(null);
    const [pharmacyServicesData, setPharmacyServicesData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/impressum?populate[Bannerbereich][populate]=Banner_Bild&populate[Kontaktbereich][populate]=Details.icon&populate[Datenbereich][populate]=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setContactData(data.data.Kontaktbereich);
            setPharmacyServicesData(data.data.Datenbereich);
            // setProductsData(data.data.products_section);
            // setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='impressum'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>
            
            <Navbar />

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} />
            </section>
            <section className='wi_full py_3 impressum_sec'>
                <div className='container-xxl'>
                    <div className='impresm_contact'>
                        <ImpressumKontakt contactData={contactData} />
                    </div>
                    <div className='impresm_container pt-4 text-black'>
                        <ImpressumData data={pharmacyServicesData} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
