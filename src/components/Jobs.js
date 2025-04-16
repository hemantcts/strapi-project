import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import Footer from './Footer';
import { JobShuffle } from './JobShuffle';
import { StickyButton } from './mini_components/StickyButton';

export const Jobs = () => {
    const activeLink = { link1: false, link2: false, link3: false, link4: false, link5: true, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [jobSection, setJobSection] = useState(null);
    const [noJobSection, setNoJobSection] = useState(null);
    const [jobsData, setJobsData] = useState([]);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/job?populate[Bannerbereich][populate]=Banner_Bild&populate[Jobbereich]=*&populate[Kein_Job]=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setJobSection(data.data.Jobbereich);
            setNoJobSection(data.data.Kein_Job);
        }
    }

    const getJobsData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/jobs-data?populate[Job_Informationen][populate]=Bild&populate[Job_Informationen][populate]=erweiterbare_Daten&populate[Kontaktdaten][populate]=Details.icon&populate[PDF_Link][populate]=*&pagination[limit]=100&sort[0]=job_id`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setJobsData(data.data);
        }
    }



    useEffect(() => {
        getPageData();
        getJobsData();
    }, [])

    return (
        <div className='jobs'>
            <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div>

            <Navbar activeLink={activeLink} />
            
            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.Titel} />
            </section>
            <section className="wi_full py_3 job_sec">
                <div className="container-xxl">
                    <TwoContent data={jobsData?.length > 0 ? jobSection : noJobSection} />
                    <div className='job_shuffle'>
                        <JobShuffle data={jobsData} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
