import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BannerSection } from './BannerSection'
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import { Team1 } from './Team1'

const PharmacyTeam = () => {
  const [bannerData, setBannerData] = useState();
  const [teamData, setTeamData] = useState();
  const [teams, setTeams] = useState();

  const getPageData = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-team?populate[banner_section][populate]=banner_image&populate[team_section][populate]`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data.data.banner_section);
      setTeamData(data.data.team_section);
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

      <section className='banner_sec'>
        <BannerSection bannerData={bannerData} color='green' />
      </section>

      <section className='main-button py-3'>
        <MyButton />
      </section>

      <section className="team-sec position-relative">
        <div className="container">

          <TwoContent data={teamData} color='green' />

        </div>
      </section>

      <section className='teams'>
        <div className="container">
          <h2>Team MedZentrum</h2>

          <Team1 data={teams} />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default PharmacyTeam
