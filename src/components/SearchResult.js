import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import postThumb from '../images/post-thumbnail.png'
import { Link, useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";



export const SearchResult = ({ data, color }) => {
    const location = useLocation();
    const searchKeyword = new URLSearchParams(location.search).get("s");

    const allUrls = [
        "https://medzentrum.entwicklung-loewenmut.ch/api/appointment-booking?populate[banner_section][populate]=banner_image&populate[booking_section][populate]",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-emergency?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-service?populate[banner_section][populate]=banner_image&populate[services_data][populate]=*&populate[pharmacy_services_data][populate]=image&populate[pharmacy_services_data][populate]=list_items",
        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-team?populate[banner_section][populate]=banner_image&populate[founder_section][populate]=*&populate[founder_data][populate]=image&populate[team_data][populate]=types",
        "https://medzentrum.entwicklung-loewenmut.ch/api/dienstleistungen-praxis?populate[banner_section][populate]=banner_image&populate[services_data][populate]=*&populate[pharmacy_services_data][populate]=image&populate[pharmacy_services_data][populate]=list_items",
        "https://medzentrum.entwicklung-loewenmut.ch/api/oeffnungszeiten-und-kontakt?populate[banner_section][populate]=banner_image&populate[contact_details][populate]=details.icon&populate[contact_details][populate]=time_details",
        "https://medzentrum.entwicklung-loewenmut.ch/api/overview-practice?populate[banner_section][populate]=banner_image&populate[services_section][populate]=services_data.image&populate[services_section][populate]=services_data.link&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/praxis-notfall?populate[banner_section][populate]=banner_image&populate[info_section][populate]=icons&populate[pharmacy_services][populate]=image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/praxis-team?populate[banner_section][populate]=banner_image&populate[founder_section][populate]=*&populate[founder_data][populate]=image&populate[team_data][populate]=types",
        "https://medzentrum.entwicklung-loewenmut.ch/api/terminbuchung-praxis?populate[banner_section][populate]=banner_image&populate[booking_section][populate]",
        "https://medzentrum.entwicklung-loewenmut.ch/api/uebersicht-gesundheitsthemen?populate[banner_section][populate]=banner_image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/ubersicht-ernaehrungsdiagnostik?populate[banner_section][populate]=banner_image&populate[health_section][populate]=*&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[author_section][populate]=image&populate[ad_section][populate]=partners.image",
        "https://medzentrum.entwicklung-loewenmut.ch/api/job?populate[banner_section][populate]=banner_image&populate[jobs_section]=*&populate[jobs][populate]=jobs_info.image&populate[jobs][populate]=jobs_info.accordion_data&populate[jobs][populate]=contact_details.details.icon",
        "https://medzentrum.entwicklung-loewenmut.ch/api/impressum?populate[banner_section][populate]=banner_image&populate[contact_section][populate]=details.icon&populate[data_section][populate]=*",
        "https://medzentrum.entwicklung-loewenmut.ch/api/datenschutzerklaerung?populate[banner_section][populate]=banner_image&populate[data_protection_section][populate]=accordion_data"
    ];

    const allRoutes = [
        "/terminbuchung-apotheke",
        "/ubersicht-apotheke",
        "/apotheke-notfall",
        "/dienstleistungen-apotheke",
        "/apotheke-team",
        "/dienstleistungen-praxis",
        "/kontakt",
        "/ubersicht-praxis",
        "/praxis-notfall",
        "/praxis-team",
        "/terminbuchung-praxis",
        "/ubersicht-gesundheitsthemen",
        "/ernahrungsdiagnostik",
        "/jobs",
        "/impressum",
        "/datenschutz",
    ]

    const [pageData, setPageData] = useState([]);
    const [matchedKeys, setMatchedKeys] = useState([]);
    const [matchedIndices, setMatchedIndices] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const handleClick = () => {
        // console.log(pageData);

        if (!pageData || !searchKeyword) {
            setMatchedKeys([]);
            return;
        }

        const keyword = searchKeyword.toLowerCase();
        let matchedUrls = [];

        pageData.forEach((data, index) => {
            const matches = findMatchingKeys(data, keyword);
            if (matches.length > 0) {
                matchedUrls.push(index); // Get URL from the same index in the urls array
            }
        });

        console.log("Matched API URLs:", matchedUrls);
    };


    const findMatchingKeys = (data, keyword, parentKey = "") => {
        let matches = [];

        for (const key in data) {
            if (typeof data[key] === "object" && data[key] !== null) {
                matches = matches.concat(findMatchingKeys(data[key], keyword, key)); // Recursive search
            } else if (typeof data[key] === "string" && data[key].toLowerCase().includes(keyword)) {
                matches.push(parentKey ? `${parentKey}.${key}` : key); // Store matched key path
            }
        }

        return matches;
    };

    const getPageData = async () => {
        setLoading(true);
        setMatchedIndices([]);
        try {
            const urls = allUrls;

            const fetchRequests = urls.map(url => fetch(url).then(res => res.json()));

            const results = await Promise.all(fetchRequests);

            const newData = results
                .map(res => res.data)
                .filter(Boolean); // Remove any null/undefined responses

            setPageData(newData);

            const keyword = searchKeyword.toLowerCase();
            let matchedUrls = [];

            newData.forEach((data, index) => {
                const matches = findMatchingKeys(data, keyword);
                if (matches.length > 0) {
                    matchedUrls.push(index); // Get URL from the same index in the urls array
                    setMatchedIndices(matchedUrls);
                    console.log("index", index);
                }
            });
            setLoading(false);
        } catch (error) {
            console.error("Error fetching page data:", error);
        } finally{
            setLoading(false);
        }

    };

    useEffect(() => {
        getPageData();
    }, [searchKeyword])


    return (
        <div className='search_page'>
            <header>
                <Navbar />
            </header>
            <section className='wi_full py_3 search_result'>
                <div className='container-xxl'>
                    <div className='sec_title text-black'>
                        <h1 className='text-blue'>Suchergebnisse für „{searchKeyword}“</h1>
                        <p>Es gibt 3 Ergebnisse für deine Suche.</p>
                    </div>
                    <div className='search_list_row'>
                        {!isLoading ? (
                            matchedIndices.map((index, i) => (
                                <div key={i} className="srch_li_item text-black">
                                    {pageData[index]?.banner_section?.banner_image && (
                                        <Link to={allRoutes[index]}><img
                                            src={`https://medzentrum.entwicklung-loewenmut.ch${pageData[index]?.banner_section?.banner_image?.url}`}
                                            alt=""
                                            className="src_post_img"
                                        /></Link>
                                    )}

                                    <div className="src_post_content">
                                        <h3>
                                            <Link to={allRoutes[index]}>
                                                {pageData[index]?.banner_section?.title || <Skeleton width={180} height={20} />}
                                            </Link>
                                        </h3>
                                        <p>{pageData[index]?.banner_section?.description || <Skeleton count={2} />}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Show skeleton loaders if no matches
                            Array(1)
                                .fill()
                                .map((_, i) => (
                                    <div key={i} className="srch_li_item text-black">
                                        <Skeleton height={135} width={145} className="me-3 mb-sm-0 mb-3" />
                                        <div className="src_post_content">
                                            <h3>
                                                <Skeleton width={180} height={20} />
                                            </h3>
                                            <p>
                                                <Skeleton count={2} />
                                            </p>
                                        </div>
                                    </div>
                                ))
                        )}

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}