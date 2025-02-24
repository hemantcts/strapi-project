import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import Footer from '../Footer'
import { AngebotDesktop } from '../AngebotDesktop'
import { AngebotMobile } from '../AngebotMobile'

export const Angebot = ({ data, color }) => {
    const activeLink = { link1: false, link2: false, link3: true, link4: false, link5: false, link6: false }
    const [bannerData, setBannerData] = useState();
    // const [blogTitle, setBlogTitle] = useState();
    // const [blogs, setBlogs] = useState();

    // const getPageData = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/uebersicht-gesundheitsthemen?populate[banner_section][populate]=banner_image`)
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //       setBannerData(data?.data?.banner_section);
    //       setBlogTitle(data?.data?.blogs_title);
    //     //   setFounderSection(data?.data?.founder_section);
    //     //   setFounderData(data?.data?.founder_data);
    //     //   setTeamData(data?.data?.team_data);
    //     }
    //   }
    
    //   const getBlogs = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //       setBlogs(data.data);
    //     }
    //   }
    
    //   useEffect(() => {
    //     getPageData();
    //     getBlogs();
    //   }, [])

    return (
        <div className="angebot-page">
            <header>
                <Navbar activeLink={activeLink} />
            </header>
            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} activePage='Ernährungsdiagnostik' />
            </section>
            <section className='wi_full py_3 angebot_Sec'>
                <div className='container-xxl'>
                    <TwoContent />
                </div>
                <div className='angebot_table_container'>
                    <div className='container-xxl'>
                        <div className='sec_title'>
                            <h2>Angebote</h2>
                        </div>
                        <AngebotDesktop />
                        <AngebotMobile />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}