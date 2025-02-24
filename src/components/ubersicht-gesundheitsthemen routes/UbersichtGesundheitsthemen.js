import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
// import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { Blogs } from '../Blogs'
import Footer from '../Footer'

export const UbersichtGesundheitsthemen = ({ data, color }) => {
    const activeLink = { link1: false, link2: false, link3: false, link4: true, link5: false, link6: false }
    const [bannerData, setBannerData] = useState();
    const [blogTitle, setBlogTitle] = useState();
    const [blogs, setBlogs] = useState();

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/uebersicht-gesundheitsthemen?populate[banner_section][populate]=banner_image`)
        const data = await response.json();
        console.log(data);
        if (data) {
          setBannerData(data?.data?.banner_section); 
          setBlogTitle(data?.data?.blogs_title);
        //   setFounderSection(data?.data?.founder_section);
        //   setFounderData(data?.data?.founder_data);
        //   setTeamData(data?.data?.team_data);
        }
      }
    
      const getBlogs = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
          setBlogs(data.data);
        }
      }
    
      useEffect(() => {
        getPageData();
        getBlogs();
      }, [])

    return (
        <div className="ubersicht-gesundheitsthemen">
            <header>
                <Navbar activeLink={activeLink} />
            </header>

            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} />
            </section>

            <section className="wi_full py_3 blog_section">
                <div className='container-xxl'>
                    <div className='sec_title text-center'>
                        <h2>{blogTitle}</h2>
                    </div>
                    <div className='blog_container mt-4'>
                        <Blogs blogs={blogs} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}