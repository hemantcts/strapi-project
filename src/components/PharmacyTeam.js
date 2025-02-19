import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import { Team1 } from './Team1'
import { FounderSection } from './FounderSection'

const PharmacyTeam = () => {
  const [bannerData, setBannerData] = useState();
  const [founderData, setFounderData] = useState();
  const [teamData, setTeamData] = useState();
  const [teams, setTeams] = useState();

  const getPageData = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-team?populate[banner_section][populate]=banner_image&populate[founder_section][populate]=founder_image&populate[team_data][populate]=types`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data?.data?.banner_section);
      setFounderData(data?.data?.founder_section);
      setTeamData(data?.data?.team_section);
    }
  }

  const getTeams = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/team-apothekes?populate=*`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setTeams(data.data);
    }
  }

  useEffect(() => {
    getPageData();
    getTeams();
  }, [])

  return (
    <div className='pharmacy_team'>
      <header>
        <Navbar />
      </header>

      <section className='inner_banner_Section'>
        <BannerSection bannerData={bannerData} color='green' />
      </section>

      <section className='breadcrumb_sec wi_full mt_3'>
        <MyButton />
      </section>

      <section className="wi_full py_3 dien_section">
        <div className="container-xxl">
          <TwoContent data={founderData} color='green' />
          <div className="dien_list">
            <FounderSection data={founderData} />
          </div>
        </div>
      </section>

      <section className='teams'>
        <div className="container">
          <h2 className='text-center' >Team MedZentrum</h2>
          <Team1 data={teams} />
        </div>
      </section>


      <Footer />

      
    </div>
  )
}

export default PharmacyTeam
