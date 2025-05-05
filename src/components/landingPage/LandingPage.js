import React, { useState, useEffect } from 'react'
import MyLink from '../mini_components/MyLink';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Iframe from '../Iframe';
import Navbar2 from './Navbar2'
import Footer2 from './Footer2';
import IframeApotheke from './IframeApotheke';
import IframePraxis from './IframePraxis';

const LandingPage = () => {

  const [bannerData, setBannerData] = useState();

  const getPageData = async () => {
    const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/homepage?populate[Bannerbereich][populate]=*&populate[Herz_Bereich][populate]=linke_Seite.Bild&populate[Herz_Bereich][populate]=linke_Seite.Link&populate[Herz_Bereich][populate]=rechte_Seite.Link&populate[Herz_Bereich][populate]=rechte_Seite.Bild&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=Partners.patner_bild&populate[Anzeigenbereich][populate]=Partners.farbige_Bild`)
    const data = await response.json();
    console.log(data);
    if (data) {
      setBannerData(data.data.Bannerbereich);
    }
  }


  useEffect(() => {
    getPageData();
  }, [])



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Cleanup on unmount
    };
  }, []);

  const [isActive, setActive] = useState(true)


  return (
    <div>
      <Navbar2 />
      <section className='wi_full py_3 banner_sec main_banner' style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch${!isMobile ? bannerData?.Banner_Bild?.url : bannerData?.Mobile_Banner_Bild?.url}')` }}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-6">
              {bannerData ? (
                <div className="banner_content text-center">
                  <h1>Unsere neue Website geht bald live…</h1>
                  <p style={{ fontWeight: '250' }}>Wir überarbeiten derzeit unsere Website, um Ihnen künftig noch schneller und einfacher Zugang zu wichtigen Informationen rund um Ihre Gesundheit zu bieten – von unseren Apotheken Serviceleistungen bis hin zu unseren Praxis Dienstleistungen.</p>
                  <p style={{ fontWeight: '250' }}>Natürlich sind wir weiterhin für Sie da – vor Ort und telefonisch:</p>
                  <div className="banner_btns d-flex d-lg-none my-4">
                    <div className={`round_btn round_1`}>
                      <a href={`tel:052 305 03 50`} className="text-uppercase">
                      APOTHEKE ANRUFEN
                      </a>
                    </div>
                    <div className={`round_btn round_2`}>
                      <a href={`tel:052 305 03 55`} className="text-uppercase">
                      PRAXIS ANRUFEN
                      </a>
                    </div>
                  </div>
                  {/* <div className='btn_block link_btn justify-content-center d-none d-sm-flex'>
                    {bannerData?.Links1.map((Link, index) => (
                      <div className={`buttn_${index + 1}`} key={index}>
                        <MyLink link={Link?.Link_URL} text={Link?.Link_Text} color={index % 2 == 0 ? 'green' : ''} />
                      </div>
                    ))}
                  </div> */}
                </div>
              ) : (
                <div className="banner_content text-center">
                  <h1><Skeleton count={2} /></h1>
                  <p><Skeleton count={4} /></p>
                  <p><Skeleton count={1} /></p>
                  <div className='btn_block justify-content-center'>
                    {bannerData?.Links1.map((Link, index) => (
                      <div className={`buttn_${index + 1}`} key={index}>
                        <MyLink link={Link?.Link_URL} text={Link?.Link_Text} color={index % 2 == 0 ? 'green' : ''} />
                      </div>
                    ))}
                  </div>
                </div>
              )
              }
            </div>
            <div className="col-12 col-lg-6 align-self-end space-left">
              <div className="banner_btns d-none d-lg-flex">
                {/* {bannerData?.Links2?.map((roundLink, index) => (
                  <div key={index} className={`round_btn round_${index + 1}`}>
                    <Link to={roundLink?.Link_URL} className="text-uppercase">
                      {roundLink?.Link_Text}
                    </Link>
                    </div>
                    ))} */}
                <div className={`round_btn round_1`}>
                  <a href={`tel:052 305 03 50`} className="text-uppercase">
                    Anruf Apotheke
                  </a>
                </div>
                <div className={`round_btn round_2`}>
                  <a href={`tel:052 305 03 55`} className="text-uppercase">
                    Anruf Praxis
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5">
          <h2 className='text-center'>Buchen Sie hier Ihren Termin</h2>
          <div className='tab_container health_topic'>
            <ul className='nav nav-tabs' role='tablist'>
              <li className={`nav-item tab1`}>
                <a className={`nav-link active`} style={{ color: `${isActive ? 'var(--bs-green) !important' : ''}`, borderColor: `${isActive ? 'var(--bs-green) !important' : ''}` }} data-bs-toggle="tab" onClick={() => setActive(true)} href={`#Tab1`} role="tab">Termin Apotheke buchen</a>
              </li>
              <li className={`nav-item tab2`}>
                <a className={`nav-link`} style={{ color: `${!isActive ? 'var(--bs-blue) !important' : ''}`, borderColor: `${!isActive ? 'var(--bs-blue) !important' : ''}` }} data-bs-toggle="tab" onClick={() => setActive(false)} href={`#Tab2`} role="tab">Termin Praxis buchen</a>
              </li>
            </ul>
            <div className='tab-content'>
              <div className='tab-pane active' id='Tab1' role='tabpanel'>
                <IframeApotheke />
              </div>
              <div className='tab-pane' id='Tab2' role='tabpanel'>
                <IframePraxis />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer2 />
    </div>
  )
}


export default LandingPage
