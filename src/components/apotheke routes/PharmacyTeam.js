import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import { Team1 } from '../Team1'
import { FounderSection } from '../FounderSection'
import { StickyButton } from '../mini_components/StickyButton'

const PharmacyTeam = () => {
  const activeLink = { link1: true, link2: false, link3: false, link4: false, link5: false, link6: false }
  const [bannerData, setBannerData] = useState();
  const [founderSection, setFounderSection] = useState();
  const [founderData, setFounderData] = useState();
  const [teamData, setTeamData] = useState();
  const [teams, setTeams] = useState();
  const [teams2, setTeams2] = useState();

  const getPageData = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-team?populate[banner_section][populate]=banner_image&populate[founder_section][populate]=*&populate[founder_data][populate]=image&populate[team_data][populate]=types`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data?.data?.banner_section);
      setFounderSection(data?.data?.founder_section);
      setFounderData(data?.data?.founder_data);
      setTeamData(data?.data?.team_data);
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

  const getTeams2 = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/team-praxes?populate=*`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setTeams2(data.data);
    }
  }

  useEffect(() => {
    getPageData();
    getTeams();
    getTeams2();
  }, [])

  return (
    <div className='pharmacy_team'>
      <div className='stickY_btn'>
        <StickyButton btntext='Termin Buchen Apotheke' btnLink='/terminbuchung-apotheke' color='green' />
      </div>
      
      <Navbar activeLink={activeLink} />

      <section className='inner_banner_Section'>
        <BannerSection bannerData={bannerData} color='green' />
      </section>

      <section className='breadcrumb_sec wi_full mt_3'>
        <MyButton buttonText={bannerData?.title} activePage='Apotheke' color='green' />
      </section>

      <section className="wi_full py_3 grunderinnen_sec">
        <div className="container-xxl">
          <TwoContent data={founderSection} color='green' />
          <div className="founder_wrapper mt-5">
            <FounderSection data={founderData} color='green' />
          </div>
        </div>
      </section>

      <section className='wi_full py_3 pt-0 team_section'>
        <div className="container-xxl">
          <div className='sec_title green text-center'>
            <h2>{teamData?.heading}</h2>
          </div>
          <div className='tab_container'>
            <ul className='nav nav-tabs' role='tablist'>
              {teamData?.types?.map((type, index) => (
                <li key={index} className={`nav-item tab${index + 1}`}>
                  <a className={`nav-link ${index === 0 ? 'active' : ''}`} data-bs-toggle="tab" href={`#Tab${index + 1}`} role="tab">{type?.link_text
                  }</a>
                </li>
              ))}
            </ul>
            <div className='tab-content'>
              <div className='tab-pane active' id='Tab1' role='tabpanel'>
                <Team1 data={teams} color='green' />
              </div>
              <div className='tab-pane' id='Tab2' role='tabpanel'>
                <Team1 data={teams2} color='blue' />
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
