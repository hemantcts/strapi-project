import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'

export const AppointmentBooking = () => {
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
        <Navbar />
      </header>

      <section className='banner_sec'>
        <BannerSection bannerData={bannerData} color='green' />
      </section>

      <section className='main-button py-3'>
        <MyButton />
      </section>

      <section className="booking-sec position-relative">
        <div className="container">

          <TwoContent data={bookingData} color='green' />

        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
