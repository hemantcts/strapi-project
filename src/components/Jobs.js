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
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/job?populate[banner_section][populate]=banner_image&populate[jobs_section]=*&populate[no_jobs_section]=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setJobSection(data.data.jobs_section);
            setNoJobSection(data.data.no_jobs_section);
        }
    }

    const getJobsData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/jobs-data?populate[jobs_info][populate]=image&populate[jobs_info][populate]=accordion_data&populate[contact_details][populate]=details.icon&populate[pdf_link][populate]=*`)
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
                <MyButton buttonText={bannerData?.title} />
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
