import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import Iframe from '../Iframe'

export const AppointmentBooking = () => {
  const activeLink = { link1: true, link2: false, link3: false, link4: false, link5: false, link6: false }
  const [bannerData, setBannerData] = useState();
  const [bookingData, setBookingData] = useState();

  const getPageData = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/appointment-booking?populate[banner_section][populate]=banner_image&populate[booking_section][populate]`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data.data.banner_section);
      setBookingData(data.data.booking_section);
    }
  }

  useEffect(() => {
    getPageData();
  }, [])

  return (
    <div className='appointement'>
      <header>
        <Navbar activeLink={activeLink} />
      </header>

      <section className='inner_banner_Section'>
        <BannerSection bannerData={bannerData} color='green' />
      </section>

      <section className='breadcrumb_sec wi_full mt_3'>
        <MyButton buttonText={bannerData?.title} activePage='Apotheke' />
      </section>

      <section className="wi_full py_3 dien_section">
        <div className="container-xxl">
          <TwoContent data={bookingData} color='green' />
          
          <div className='iframe mt-5'>
            <Iframe />
          </div>
        </div>

      </section>


      <Footer />
    </div>
  )
}
