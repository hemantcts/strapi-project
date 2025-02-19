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

      <section className='inner_banner_Section'>
        <BannerSection bannerData={bannerData} color='green' />
      </section>

      <section className='breadcrumb_sec wi_full mt_3'>
        <MyButton />
      </section>

      <section className="wi_full py_3 grunderinnen_sec">
        <div className="container-xxl">
          <TwoContent data={teamData} color='green' />
          <div className="founder_wrapper mt-5">
            <FounderSection data={teamData} color='green' />
          </div>
        </div>
      </section>

      <section className='wi_full py_3 pt-0 team_section'>
        <div className="container-xxl">
          <div className='sec_title green text-center'>
            <h2>Team MedZentrum</h2>
          </div>
          <div className='tab_container'>
            <ul className='nav nav-tabs' role='tablist'>
              <li className='nav-item'>
                  <a className="nav-link active" data-bs-toggle="tab" href="#Tab1" role="tab">Team Apotheke</a>
              </li>
              <li className='nav-item'>
                  <a className="nav-link" data-bs-toggle="tab" href="#Tab2" role="tab">Team Praxis</a>
              </li>
            </ul>
            <div className='tab-content'>
              <div className='tab-pane active' id='Tab1' role='tabpanel'>
                <Team1 data={teams} color='green' />
              </div>
              <div className='tab-pane' id='Tab2' role='tabpanel'>
                <Team1 data={teams} color='green' />
              </div>
            </div>
              
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default PharmacyTeam
