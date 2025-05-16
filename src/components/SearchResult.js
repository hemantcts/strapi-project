import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import postThumb from '../images/post-thumbnail.png'
import { Link, useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { BlocksRenderer } from '@strapi/blocks-react-renderer'



export const SearchResult = ({ data, color }) => {
    const location = useLocation();
    const searchKeyword = new URLSearchParams(location.search).get("s");

    const allUrls = [
        "https://backend.medzentrum.ch/api/appointment-booking?populate[Bannerbereich][populate]=Banner_Bild&populate[Buchungsbereich][populate]",

        "https://backend.medzentrum.ch/api/pharmacy-overview?populate[Bannerbereich][populate]=Banner_Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Link&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=Partners.patner_bild&populate[Anzeigenbereich][populate]=Partners.farbige_Bild",

        "https://backend.medzentrum.ch/api/pharmacy-emergency?populate[Bannerbereich][populate]=Banner_Bild&populate[Informationsbereich][populate]=icons&populate[Apotheken_Dienstleistungen][populate]=Bild",

        "https://backend.medzentrum.ch/api/pharmacy-service?populate[Bannerbereich][populate]=Banner_Bild&populate[Service_Daten][populate]=*&populate[Apotheken_Dienstleistungsdaten][populate]=Bild.Bild&populate[Apotheken_Dienstleistungsdaten][populate]=list_items",

        "https://backend.medzentrum.ch/api/pharmacy-team?populate[Bannerbereich][populate]=Banner_Bild&populate[Bannerbereich][populate]=Mobile_Banner_Bild&populate[Gruenderbereich][populate]=*&populate[Gruenderdaten][populate]=Bild&populate[Teamdaten][populate]=Typen",

        "https://backend.medzentrum.ch/api/dienstleistungen-praxis?populate[Bannerbereich][populate]=Banner_Bild&populate[Service_Daten][populate]=*&populate[Praxis_Dienstleistungen][populate]=Bild.Bild&populate[Praxis_Dienstleistungen][populate]=list_items",

        "https://backend.medzentrum.ch/api/oeffnungszeiten-und-kontakt?populate[Bannerbereich][populate]=Banner_Bild&populate[Kontaktbereich]=*&populate[Kontaktdaten][populate]=Details.icon&populate[Kontaktdaten][populate]=time_details",

        "https://backend.medzentrum.ch/api/overview-practice?populate[Bannerbereich][populate]=Banner_Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Link&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=Partners.patner_bild&populate[Anzeigenbereich][populate]=Partners.farbige_Bild",

        "https://backend.medzentrum.ch/api/praxis-notfall?populate[Bannerbereich][populate]=Banner_Bild&populate[Informationsbereich][populate]=icons&populate[Apotheken_Dienstleistungen][populate]=Bild",

        "https://backend.medzentrum.ch/api/praxis-team?populate[Bannerbereich][populate]=Banner_Bild&populate[Bannerbereich][populate]=Mobile_Banner_Bild&populate[Gruenderbereich][populate]=*&populate[Gruenderdaten][populate]=Bild&populate[Teamdaten][populate]=Typen",

        "https://backend.medzentrum.ch/api/terminbuchung-praxis?populate[Bannerbereich][populate]=Banner_Bild&populate[Buchungsbereich][populate]",

        "https://backend.medzentrum.ch/api/uebersicht-gesundheitsthemen?populate[Bannerbereich][populate]=Banner_Bild",

        "https://backend.medzentrum.ch/api/ubersicht-ernaehrungsdiagnostik?populate[Bannerbereich][populate]=Banner_Bild&populate[Gesundheitsbereich][populate]=*&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Sonderangebotsbereich][populate]=Button&populate[Autorenbereich][populate]=Bild&populate[Anzeigenbereich][populate]=Partners.patner_bild&populate[Anzeigenbereich][populate]=Partners.farbige_Bild",

        "https://backend.medzentrum.ch/api/ernaehrungsdiagnostik-angebote?populate[Bannerbereich][populate]=Banner_Bild&populate[Angebotsbereich][populate]=*&populate[Tabellenbereich][populate]=*",

        "https://backend.medzentrum.ch/api/job?populate[Bannerbereich][populate]=Banner_Bild&populate[Bannerbereich][populate]=Mobile_Banner_Bild&populate[Jobbereich]=*&populate[Kein_Job]=*",

        "https://backend.medzentrum.ch/api/impressum?populate[Bannerbereich][populate]=Banner_Bild&populate[Kontaktbereich][populate]=Details.icon&populate[Datenbereich][populate]=*",

        "https://backend.medzentrum.ch/api/datenschutzerklaerung?populate[Bannerbereich][populate]=Banner_Bild&populate[Datenschutzbereich][populate]=erweiterbare_Daten",

        "https://backend.medzentrum.ch/api/blogs?populate=*&pagination[limit]=100&sort[0]=Post_id",

        "https://backend.medzentrum.ch/api/team-apothekes?populate=*&pagination[limit]=100&sort[0]=Nummer",

        "https://backend.medzentrum.ch/api/team-praxes?populate=*&pagination[limit]=100&sort[0]=Nummer"
    ];

    const allRoutes = [
        "/terminbuchung-apotheke",
        "/uebersicht-apotheke",
        "/apotheke-notfall",
        "/serviceleistungen-apotheke",
        "/apotheke-team",
        "/dienstleistungen-praxis",
        "/kontakt",
        "/uebersicht-praxis",
        "/praxis-notfall",
        "/praxis-team",
        "/terminbuchung-praxis",
        "/uebersicht-gesundheitsthemen",
        "/uebersicht-ernaehrungsdiagnostik",
        "/angebot",
        "/jobs",
        "/impressum",
        "/datenschutz",
        "/uebersicht-gesundheitsthemen",
        "/apotheke-team",
        "/praxis-team",
    ]

    const [pageData, setPageData] = useState([]);
    const [matchedKeys, setMatchedKeys] = useState([]);
    const [matchedIndices, setMatchedIndices] = useState([]);
    const [mainIndex, setMainIndex] = useState([]);
    const [mainIndex2, setMainIndex2] = useState([]);
    const [mainIndex3, setMainIndex3] = useState([]);
    const [blogIndices, setBlogIndices] = useState([]);
    const [teamIndices, setTeamIndices] = useState([]);
    const [teamIndices2, setTeamIndices2] = useState([]);
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


    // const findMatchingKeys = (data, keyword, parentKey = "") => {
    //     let matches = [];

    //     for (const key in data) {
    //         if (typeof data[key] === "object" && data[key] !== null) {
    //             matches = matches.concat(findMatchingKeys(data[key], keyword, key)); // Recursive search
    //         } else if (typeof data[key] === "string" && data[key].toLowerCase().includes(keyword)) {
    //             matches.push(parentKey ? `${parentKey}.${key}` : key); // Store matched key path
    //         }
    //     }

    //     return matches;
    // };


    const findMatchingKeys = (data, keyword, parentKey = "") => {
        let matches = [];

        if (Array.isArray(data)) {
            data.forEach((item, index) => {
                const newParentKey = `${parentKey}[${index}]`;
                matches = matches.concat(findMatchingKeys(item, keyword, newParentKey));
            });
        } else if (typeof data === "object" && data !== null) {
            for (const key in data) {
                const fullKey = parentKey ? `${parentKey}.${key}` : key;
                matches = matches.concat(findMatchingKeys(data[key], keyword, fullKey));
            }
        } else if (typeof data === "string" && data.toLowerCase().includes(keyword)) {
            matches.push(parentKey);
        }

        return matches;
    };

    const getPageData = async () => {
        setLoading(true);
        setMatchedIndices([]);
        setBlogIndices([]);
        setTeamIndices([]);
        setTeamIndices2([]);
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
            let matchedUrls2 = [];
            let matchedUrls3 = [];
            let matchedUrls4 = [];

            newData.forEach((data, index) => {
                if (index === allUrls.length - 3 && Array.isArray(data)) {
                    data.forEach((blog, blogIndex) => {
                        const matches = findMatchingKeys(blog, keyword);
                        if (matches.length > 0) {
                            console.log(`Keyword matched in blog post at index: ${blogIndex} and ${index}`);
                            // You can collect blogIndex here in a separate array if needed
                            setMainIndex(index);
                            matchedUrls2.push(blogIndex);
                            setBlogIndices(matchedUrls2);

                            console.log("data here", matchedUrls2)
                        }
                    });
                }
                if (index === allUrls.length - 2 && Array.isArray(data)) {
                    data.forEach((team, teamIndex) => {
                        const matches = findMatchingKeys(team, keyword);
                        if (matches.length > 0) {
                            console.log(`Keyword matched in team post at index: ${teamIndex} and ${index}`);
                            // You can collect teamIndex here in a separate array if needed
                            setMainIndex2(index);
                            matchedUrls3.push(teamIndex);
                            setTeamIndices(matchedUrls3);

                            console.log("data here", matchedUrls3)
                        }
                    });
                }
                if (index === allUrls.length - 1 && Array.isArray(data)) {
                    data.forEach((team, teamIndex) => {
                        const matches = findMatchingKeys(team, keyword);
                        if (matches.length > 0) {
                            console.log(`Keyword matched in team post at index: ${teamIndex} and ${index}`);
                            // You can collect teamIndex here in a separate array if needed
                            setMainIndex3(index);
                            matchedUrls4.push(teamIndex);
                            setTeamIndices2(matchedUrls4);

                            console.log("data here", matchedUrls4)
                        }
                    });
                }
                const matches = findMatchingKeys(data, keyword);
                if (matches.length > 0) {
                    if (index === 17) {
                        index = 11;
                    }
                    if (index === 18) {
                        index = 4;
                    }
                    if (index === 19) {
                        index = 9;
                    }
                    if (!matchedUrls.includes(index)) {
                        matchedUrls.push(index);
                        setMatchedIndices(matchedUrls);
                    }
                    console.log("index", index, matchedUrls);
                }



            });
            setLoading(false);
        } catch (error) {
            // console.error("Error fetching page data:", error);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        getPageData();
    }, [searchKeyword])

    const filterTitle = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    }


    return (
        <div className='search_page'>
            <Navbar />
            <section className='wi_full py_3 search_result' style={{ minHeight: '70vh' }}>
                <div className='container-xxl'>
                    <div className='sec_title text-black'>
                        <h1 className='text-blue'>Suchergebnisse für „{searchKeyword}“</h1>
                        {!isLoading ? (
                            <p>Es gibt {matchedIndices.length + blogIndices.length + teamIndices.length + teamIndices2.length} Ergebnisse für deine Suche.</p>
                        ) : (
                            <Skeleton />
                        )}
                    </div>
                    <div className='search_list_row'>
                        {(!isLoading && blogIndices.length > 0) && (
                            blogIndices.map((index, i) => (
                                <Link key={i} to={`/${filterTitle(pageData[mainIndex][index]?.Titel)}`}>
                                    <div className="srch_li_item text-black">
                                        {pageData[mainIndex][index]?.Bild && (
                                            <img
                                                src={`https://backend.medzentrum.ch${pageData[mainIndex][index]?.Bild?.url}`}
                                                alt=""
                                                className="src_post_img"
                                            />
                                        )}

                                        <div className="src_post_content">
                                            {pageData[mainIndex][index]?.Titel &&
                                                <h3>
                                                    {pageData[mainIndex][index]?.Titel || <Skeleton width={180} height={20} />}
                                                </h3>
                                            }
                                            {pageData[mainIndex][index]?.Beschreibung[0]?.children[0]?.text &&
                                                <p>{pageData[mainIndex][index]?.Beschreibung[0]?.children[0]?.text || <Skeleton count={2} />}</p>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                        {(!isLoading && teamIndices.length > 0) && (
                            teamIndices.map((index, i) => (
                                <Link key={i} to={`/apotheke-team`}>
                                    <div className="srch_li_item text-black">
                                        {pageData[mainIndex2][index]?.Bild && (
                                            <img
                                                src={`https://backend.medzentrum.ch${pageData[mainIndex2][index]?.Bild?.url}`}
                                                alt=""
                                                className="src_post_img"
                                            />
                                        )}

                                        <div className="src_post_content">
                                            {pageData[mainIndex2][index]?.Name &&
                                                <h3>
                                                    {pageData[mainIndex2][index]?.Name || <Skeleton width={180} height={20} />}
                                                </h3>
                                            }
                                            {pageData[mainIndex2][index]?.Bezeichnung &&
                                                <p>{pageData[mainIndex2][index]?.Bezeichnung || <Skeleton count={2} />}</p>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                        {(!isLoading && teamIndices2.length > 0) && (
                            teamIndices2.map((index, i) => (
                                <Link key={i} to={`/praxis-team`}>
                                    <div className="srch_li_item text-black">
                                        {pageData[mainIndex3][index]?.Bild && (
                                            <img
                                                src={`https://backend.medzentrum.ch${pageData[mainIndex3][index]?.Bild?.url}`}
                                                alt=""
                                                className="src_post_img"
                                            />
                                        )}

                                        <div className="src_post_content">
                                            {pageData[mainIndex3][index]?.Name &&
                                                <h3>
                                                    {pageData[mainIndex3][index]?.Name || <Skeleton width={180} height={20} />}
                                                </h3>
                                            }
                                            {pageData[mainIndex3][index]?.Bezeichnung &&
                                                <p>{pageData[mainIndex3][index]?.Bezeichnung || <Skeleton count={2} />}</p>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                        {!isLoading ? (
                            matchedIndices.map((index, i) => (
                                <Link key={i} to={allRoutes[index]}>
                                    <div className="srch_li_item text-black">
                                        {pageData[index]?.Bannerbereich?.Banner_Bild && (
                                            <img
                                                src={`https://backend.medzentrum.ch${pageData[index]?.Bannerbereich?.Banner_Bild?.url}`}
                                                alt=""
                                                className="src_post_img"
                                            />
                                        )}

                                        <div className="src_post_content">
                                            {pageData[index]?.Bannerbereich?.Titel && <h3>
                                                {pageData[index]?.Bannerbereich?.Titel || <Skeleton width={180} height={20} />}
                                            </h3>}
                                            {pageData[index]?.Bannerbereich?.Beschreibung && <p>{<BlocksRenderer content={pageData[index]?.Bannerbereich?.Beschreibung} /> || <Skeleton count={2} />}</p>}
                                        </div>
                                    </div>
                                </Link>
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