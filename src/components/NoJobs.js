import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BannerSection } from './BannerSection';
import { MyButton } from './mini_components/MyButton';
import { TwoContent } from './mini_components/TwoContent';
import Footer from './Footer';

export const NoJobs = () => {

    const [bannerData, setBannerData] = useState(null);
    const [vacancyData, setVacancyData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://backend.medzentrum.ch/api/no-job?populate[banner_section][populate]=banner_image&populate[vacancy_section][populate]=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.banner_section);
            setVacancyData(data.data.vacancy_section);
        }
    }

    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='no-jobs'>
            <Navbar />
            <div className='inner_banner_Section'>
                {<BannerSection bannerData={bannerData} />}
            </div>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>
            <section className="wi_full py_3 dien_section">
                <div className="container-xxl">
                    <TwoContent data={vacancyData} />
                </div>
            </section>
            <Footer />
        </div>
    )
}
