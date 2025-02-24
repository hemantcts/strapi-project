import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import Footer from './Footer';
import { JobShuffle } from './JobShuffle';

export const Jobs = () => {
    const activeLink = { link1: false, link2: false, link3: false, link4: false, link5: true, link6: false }
    const [bannerData, setBannerData] = useState(null);
    const [jobSection, setJobSection] = useState(null);
    const [jobsData, setJobsData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/job?populate[banner_section][populate]=banner_image&populate[jobs_section]=*&populate[jobs][populate]=jobs_info.image&populate[jobs][populate]=jobs_info.accordion_data&populate[jobs][populate]=contact_details.details.icon`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setJobSection(data.data.jobs_section);
            setJobsData(data.data.jobs);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='jobs'>
            <header>
                <Navbar activeLink={activeLink} />
            </header>
            <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' />
            </section>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={bannerData?.title} />
            </section>
            <section className="wi_full py_3 job_sec">
                <div className="container-xxl">
                    <TwoContent data={jobSection} />
                    <div className='job_shuffle'>
                        <JobShuffle data={jobsData} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
