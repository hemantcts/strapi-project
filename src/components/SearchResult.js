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
        "https://medzentrum.entwicklung-loewenmut.ch/api/appointment-booking?populate[Bannerbereich][populate]=Banner_Bild&populate[Buchungsbereich][populate]",

        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[Bannerbereich][populate]=Banner_Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Link&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=partners.Bild",

        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-emergency?populate[Bannerbereich][populate]=Banner_Bild&populate[Informationsbereich][populate]=icons&populate[Apotheken_Dienstleistungen][populate]=Bild",

        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-service?populate[Bannerbereich][populate]=Banner_Bild&populate[Service_Daten][populate]=*&populate[Apotheken_Dienstleistungsdaten][populate]=Bild.Bild&populate[Apotheken_Dienstleistungsdaten][populate]=list_items",

        "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-team?populate[Bannerbereich][populate]=Banner_Bild&populate[Grunderbreich][populate]=*&populate[Grunderdaten][populate]=Bild&populate[Teamdaten][populate]=Typen",

        "https://medzentrum.entwicklung-loewenmut.ch/api/dienstleistungen-praxis?populate[Bannerbereich][populate]=Banner_Bild&populate[Service_Daten][populate]=*&populate[Apotheken_Dienstleistungsdaten][populate]=Bild.Bild&populate[Apotheken_Dienstleistungsdaten][populate]=list_items",

        "https://medzentrum.entwicklung-loewenmut.ch/api/oeffnungszeiten-und-kontakt?populate[Bannerbereich][populate]=Banner_Bild&populate[Kontaktdaten][populate]=Details.icon&populate[Kontaktdaten][populate]=time_details",

        "https://medzentrum.entwicklung-loewenmut.ch/api/overview-practice?populate[Bannerbereich][populate]=Banner_Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Bild&populate[Dienstleistungsbereich][populate]=Service_Daten.Link&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=partners.Bild",

        "https://medzentrum.entwicklung-loewenmut.ch/api/praxis-notfall?populate[Bannerbereich][populate]=Banner_Bild&populate[Informationsbereich][populate]=icons&populate[Apotheken_Dienstleistungen][populate]=Bild",

        "https://medzentrum.entwicklung-loewenmut.ch/api/praxis-team?populate[Bannerbereich][populate]=Banner_Bild&populate[Grunderbreich][populate]=*&populate[Grunderdaten][populate]=Bild&populate[Teamdaten][populate]=Typen",

        "https://medzentrum.entwicklung-loewenmut.ch/api/terminbuchung-praxis?populate[Bannerbereich][populate]=Banner_Bild&populate[Buchungsbereich][populate]",

        "https://medzentrum.entwicklung-loewenmut.ch/api/uebersicht-gesundheitsthemen?populate[Bannerbereich][populate]=Banner_Bild",

        "https://medzentrum.entwicklung-loewenmut.ch/api/ubersicht-ernaehrungsdiagnostik?populate[Bannerbereich][populate]=Banner_Bild&populate[Gesundheitsbereich][populate]=*&populate[Sonderangebotsbereich][populate]=Bild&populate[Sonderangebotsbereich][populate]=erweiterbare_Daten&populate[Autorenbereich][populate]=Bild&populate[Anzeigenbereich][populate]=partners.Bild",

        "https://medzentrum.entwicklung-loewenmut.ch/api/job?populate[Bannerbereich][populate]=Banner_Bild&populate[Jobbereich]=*&populate[Kein_Job]=*",

        "https://medzentrum.entwicklung-loewenmut.ch/api/impressum?populate[Bannerbereich][populate]=Banner_Bild&populate[Kontaktbereich][populate]=Details.icon&populate[Datenbereich][populate]=*",

        "https://medzentrum.entwicklung-loewenmut.ch/api/datenschutzerklaerung?populate[Bannerbereich][populate]=Banner_Bild&populate[Datenschutzbereich][populate]=erweiterbare_Daten"
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
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        getPageData();
    }, [searchKeyword])


    return (
        <div className='search_page'>
            <Navbar />
            <section className='wi_full py_3 search_result'>
                <div className='container-xxl'>
                    <div className='sec_title text-black'>
                        <h1 className='text-blue'>Suchergebnisse für „{searchKeyword}“</h1>
                        {!isLoading ? (
                            <p>Es gibt {matchedIndices.length} Ergebnisse für deine Suche.</p>
                        ) : (
                            <Skeleton />
                        )}
                    </div>
                    <div className='search_list_row'>
                        {!isLoading ? (
                            matchedIndices.map((index, i) => (
                                <Link key={i} to={allRoutes[index]}>
                                    <div className="srch_li_item text-black">
                                        {pageData[index]?.Bannerbereich?.Banner_Bild && (
                                            <img
                                                src={`https://medzentrum.entwicklung-loewenmut.ch${pageData[index]?.Bannerbereich?.Banner_Bild?.url}`}
                                                alt=""
                                                className="src_post_img"
                                            />
                                        )}

                                        <div className="src_post_content">
                                            <h3>
                                                {pageData[index]?.Bannerbereich?.Titel || <Skeleton width={180} height={20} />}
                                            </h3>
                                            <p>{<BlocksRenderer content={pageData[index]?.Bannerbereich?.Beschreibung} />  || <Skeleton count={2} />}</p>
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