import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
// import Footer from '../Footer'
import { BannerSection } from '../BannerSection'
import { MyButton } from '../mini_components/MyButton'
import { Blogs } from '../Blogs'
import Footer from '../Footer'
import { StickyButton } from '../mini_components/StickyButton'
import Select from "react-select";

export const UbersichtGesundheitsthemen = ({ data, color }) => {
    const activeLink = { link1: false, link2: false, link3: false, link4: true, link5: false, link6: false }
    const [bannerData, setBannerData] = useState();
    const [blogTitle, setBlogTitle] = useState();
    const [blogs, setBlogs] = useState();
    const [categories, setCategories] = useState([{ value: "", label: "Alle Themen" }]);
    const [selectedCategory, setSelectedCategory] = useState({ value: "", label: "Alle Themen" });


    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/uebersicht-gesundheitsthemen?populate[Bannerbereich][populate]=Banner_Bild`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data?.data?.Bannerbereich);
            setBlogTitle(data?.data?.Blog_Titel);
            //   setFounderSection(data?.data?.founder_section);
            //   setFounderData(data?.data?.founder_data);
            //   setTeamData(data?.data?.team_data);
        }
    }

    const getBlogs = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBlogs(data.data);
            const uniqueCategories = [...new Set(data.data.map(blog => blog.Kategorie))];
            const formattedOptions = uniqueCategories.map(Kategorie => ({
                value: Kategorie.toLowerCase(),
                label: Kategorie,
            }));

            setCategories((prev) =>
                prev.length === 1 ? [...prev, ...formattedOptions] : prev
            )
        }
    }

    const options = [
        { value: "health", label: "Health" },
        { value: "education", label: "Education" }
    ];


    useEffect(() => {
        getPageData();
        getBlogs();
    }, [])

    // const handleChange = (event) => {
    //     setSelectedCategory(event.target.value);
    // };

    return (
        <div className="ubersicht-gesundheitsthemen">
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

            <section className="wi_full py_3 blog_section">
                <div className='container-xxl'>
                    <div className='sec_title text-center'>
                        <h2>{blogTitle}</h2>
                    </div>
                    <div className='health_topic text-center mt-3'>
                        <Select className='filter_select' options={categories} value={selectedCategory} onChange={setSelectedCategory} />
                    </div>
                    <div className='blog_container mt-4'>
                        <Blogs blogs={blogs} selectedCategory={selectedCategory?.value} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}