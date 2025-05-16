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

    const [colors, setColors] = useState(['#0D659B', '#009E4B', '#1C99AA', '#039E4E'])


    const getPageData = async () => {
        const response = await fetch(`https://backend.medzentrum.ch/api/uebersicht-gesundheitsthemen?populate[Bannerbereich][populate]=Banner_Bild`)
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
        const response = await fetch(`https://backend.medzentrum.ch/api/blogs?populate=*&pagination[limit]=100&sort[0]=Titel`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBlogs(data.data);
            const uniqueCategories = [...new Set(data.data.map(blog => blog.Kategorie))];
            const formattedOptions = uniqueCategories.map(Kategorie => ({
                value: Kategorie,
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

    const handleChange = (type) => {
        setSelectedCategory(type);
    };

    const [activeIndex, setActiveIndex] = useState(0);


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

                    {/* <div className='health_topic text-center mt-3'>
                        <Select className='filter_select' options={categories} value={selectedCategory} onChange={setSelectedCategory} isSearchable={false} />
                    </div> */}

                    <div className='health_topic tab_container'>
                        <ul className='nav nav-tabs' role='tablist'>
                            {categories?.map((type, index) => {
                                const isActive = index === activeIndex;

                                // Only assign color if active AND index > 0
                                const applyColor = isActive && index > 0;
                                const color =
                                    type?.label === "Gesundheits-Checks"
                                        ? colors[0]
                                        : type?.label === "Impfungen"
                                            ? colors[1]
                                            : colors[2];

                                return (
                                    <li key={index} className={`nav-item tab${index + 1}`}>
                                        <a
                                            className={`nav-link ${isActive ? 'active' : ''}`}
                                            data-bs-toggle="tab"
                                            href={`#Tab${index + 1}`}
                                            role="tab"
                                            onClick={() => {
                                                setActiveIndex(index);
                                                handleChange(type);
                                            }}
                                            style={
                                                applyColor
                                                    ? {
                                                        color: color,
                                                        borderBottomColor: color,
                                                        backgroundColor: 'transparent'
                                                    }
                                                    : {}
                                            }
                                        >
                                            {type?.label}
                                        </a>
                                    </li>
                                );
                            })}

                        </ul>
                        {/* <div className='tab-content'>
                            <div className='tab-pane active' id='Tab1' role='tabpanel'>
                                <Team1 data={teams} color={pageColor} change={pageColor === 'green' ? 'green' : 'blue'} />
                            </div>
                            <div className='tab-pane' id='Tab2' role='tabpanel'>
                                <Team1 data={teams2} color='blue' change={pageColor === 'green' ? 'green' : 'blue'} />
                            </div>
                        </div> */}

                    </div>
                    <div className='blog_container'>
                        <Blogs blogs={blogs} selectedCategory={selectedCategory?.value} colors={colors} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}