import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import Footer from '../Footer'
import { AngebotDesktop } from '../AngebotDesktop'
import { AngebotMobile } from '../AngebotMobile'
import { StickyButton } from '../mini_components/StickyButton'

export const Angebot = ({ data, color }) => {
    const activeLink = { link1: false, link2: false, link3: true, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState();
    const [offersData, setOffersData] = useState();
    const [tableData, setTableData] = useState([]);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/ernaehrungsdiagnostik-angebote?populate[banner_section][populate]=banner_image&populate[offers_section][populate]=*&populate[table_section][populate]=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data?.data?.banner_section);
            setOffersData(data?.data?.offers_section);
            setTableData(data?.data?.table_section);
            //   setFounderSection(data?.data?.founder_section);
            //   setFounderData(data?.data?.founder_data);
            //   setTeamData(data?.data?.team_data);
        }
    }

    //   const getBlogs = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //       setBlogs(data.data);
    //     }
    //   }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className="angebot-page">
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>

            <Navbar activeLink={activeLink} />

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} activePage='Ernährungsdiagnostik' />
            </section>
            <section className='wi_full py_3 angebot_Sec'>
                <div className='container-xxl pb-lg-5'>
                    <TwoContent data={offersData} />
                </div>
                <div className='angebot_table_container mt-5'>
                    <div className='container-xxl'>
                        <div className='sec_title d-lg-none'>
                            <h2 className='mb-4'>Angebote</h2>
                        </div>
                        <div className='dektop_angebot_table'>
                            <AngebotDesktop tableData={tableData} />
                        </div>
                        <div className='mobile_angebot_table'>
                            <AngebotMobile tableData={tableData} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}