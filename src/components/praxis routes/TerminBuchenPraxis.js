import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import Iframe from '../Iframe'
import { StickyButton } from '../mini_components/StickyButton'

export const TerminBuchenPraxis = () => {
  const activeLink = { link1: false, link2: true, link3: false, link4: false, link5: false, link6: false }
  const [bannerData, setBannerData] = useState();
  const [bookingData, setBookingData] = useState();

  const getPageData = async () => {
    const response = await fetch(`https://backend.medzentrum.ch/api/terminbuchung-praxis?populate[Bannerbereich][populate]=Banner_Bild&populate[Buchungsbereich][populate]`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data.data.Bannerbereich);
      setBookingData(data.data.Buchungsbereich);
    }
  }

  useEffect(() => {
    getPageData();
  }, [])

  return (
    <div className='appointement'>
      <div className='stickY_btn'>
        <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
      </div>

      <Navbar activeLink={activeLink} />

      <section className='inner_banner_Section'>
        <BannerSection bannerData={bannerData} color='blue' />
      </section>

      <section className='breadcrumb_sec wi_full mt_3'>
        <MyButton buttonText={bannerData?.Titel} activePage='Praxis' />
      </section>

      <section className="wi_full py_3 dien_section">
        <div className="container-xxl">
          <TwoContent data={bookingData} color='blue' />

          <div className='iframe mt-5'>
            <Iframe page='pr' />
          </div>
        </div>

      </section>


      <Footer />
    </div>
  )
}
