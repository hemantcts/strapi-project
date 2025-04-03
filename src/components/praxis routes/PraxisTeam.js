import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { TwoContent } from '../mini_components/TwoContent'
import { Team1 } from '../Team1'
import { FounderSection } from '../FounderSection'
import { StickyButton } from '../mini_components/StickyButton'

const PraxisTeam = () => {
  const activeLink = { link1: false, link2: true, link3: false, link4: false, link5: false, link6: false }
  const [bannerData, setBannerData] = useState();
  const [founderSection, setFounderSection] = useState();
  const [founderData, setFounderData] = useState();
  const [teamData, setTeamData] = useState();
  const [teams, setTeams] = useState();
  const [teams2, setTeams2] = useState();
  const [pageColor, setPageColor] = useState('blue');

  const getPageData = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/praxis-team?populate[Bannerbereich][populate]=Banner_Bild&populate[Grunderbreich][populate]=*&populate[Grunderdaten][populate]=Bild&populate[Teamdaten][populate]=Typen`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data?.data?.Bannerbereich);
      setFounderSection(data?.data?.Grunderbreich);
      setFounderData(data?.data?.Grunderdaten);
      setTeamData(data?.data?.Teamdaten);
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

  const changeColor = (i)=>{
    if(i===1){
      setPageColor('green');
    }
    else{
      setPageColor('');
    }
  }

  return (
    <div className='pharmacy_team'>
      <div className='stickY_btn'>
        <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color={pageColor} />
      </div>

      <Navbar activeLink={activeLink} />

      <section className='inner_banner_Section'>
        <BannerSection bannerData={bannerData} color={pageColor} />
      </section>

      <section className='breadcrumb_sec wi_full mt_3'>
        <MyButton buttonText={bannerData?.Titel} activePage='Praxis' />
      </section>

      <section className="wi_full py_3 grunderinnen_sec">
        <div className="container-xxl">
          <TwoContent data={founderSection} color={pageColor} />
          <div className="founder_wrapper mt-5">
            <FounderSection data={founderData} color={pageColor} />
          </div>
        </div>
      </section>

      <section className='wi_full py_3 pt-0 team_section'>
        <div className="container-xxl">
          <div className={`sec_title text-center ${pageColor}`}>
            <h2>{teamData?.Uberschrift}</h2>
          </div>
          <div className='tab_container'>
            <ul className='nav nav-tabs' role='tablist'>
              {teamData?.Typen?.map((type, index) => (
                <li key={index} className={`nav-item tab${index + 1}`}>
                  <a className={`nav-link ${index === 1 ? 'active' : ''}`} data-bs-toggle="tab" href={`#Tab${index + 1}`} role="tab" onClick={()=>{changeColor(index + 1)}}>{type?.link_text
                  }</a>
                </li>
              ))}
            </ul>
            <div className='tab-content'>
              <div className='tab-pane' id='Tab1' role='tabpanel'>
                <Team1 data={teams} color='green' change={pageColor==='green' ? 'green' : 'blue'} />
              </div>
              <div className='tab-pane active' id='Tab2' role='tabpanel'>
                <Team1 data={teams2} color={pageColor} change={pageColor==='green' ? 'green' : 'blue'} />
              </div>
            </div>

          </div>
        </div>
      </section>


      <Footer />


    </div>
  )
}

export default PraxisTeam
