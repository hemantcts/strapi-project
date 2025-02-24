import React, {useState, useEffect} from 'react'
// import nutriImg from '../images/nuetr.png'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import { SpeziellesSection } from '../SpeziellesSection'
import { PartnersSection } from '../PartnersSection';

const Ernahrungsdiagnostik = () => {
    const activeLink = { link1: false, link2: false, link3: true, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [healthData, setHealthData] = useState(null);
    const [specialsData, setSpecialsData] = useState(null);
    const [authorData, setAuthorData] = useState(null);
    const [adData, setAdData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/ubersicht-ernaehrungsdiagnostik?populate[banner_section][populate]=banner_image&populate[health_section][populate]=*&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[author_section][populate]=image&populate[ad_section][populate]=partners.image`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setHealthData(data.data.health_section);
            setSpecialsData(data.data.specials_section);
            setAuthorData(data.data.author_section);
            setAdData(data.data.ad_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='ernahrung'>
            <Navbar activeLink={activeLink} />
            <div className='inner_banner_Section'>
                {<BannerSection bannerData={bannerData} />}
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} activePage='Ernährungsdiagnostik' />
            </section>
            <section className="wi_full py_3 dien_section">
                <div className="container-xxl">
                    <TwoContent data={healthData} />
                </div>
            </section>
            <section className="wi_full spezielles_section">
                <SpeziellesSection specialsData={specialsData} color='blue' />
            </section>
            <section className='wi_full nuitrition_diagnos'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8 content_col'>
                            <blockquote dangerouslySetInnerHTML={{ __html: authorData?.description}} />
                        </div>
                        <div className='col-lg-4 img_col'>
                            <img src={`https://medzentrum.entwicklung-loewenmut.ch${authorData?.image?.url}`} alt='' />
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