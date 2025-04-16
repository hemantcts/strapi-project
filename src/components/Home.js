import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import MyLink from './mini_components/MyLink';
import { Link } from 'react-router-dom';
import { PartnersSection } from './PartnersSection';
import Skeleton from 'react-loading-skeleton';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Iframe from './Iframe';
import MailchimpForm from './MailchimpForm';

const Home = () => {

    const [bannerData, setBannerData] = useState();
    const [heartData, setHeartData] = useState();
    const [productsData, setProductsData] = useState();
    const [adData, setAdData] = useState();


    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/homepage?populate[Bannerbereich][populate]=*&populate[Herz_Bereich][populate]=linke_Seite.Bild&populate[Herz_Bereich][populate]=linke_Seite.Link&populate[Herz_Bereich][populate]=rechte_Seite.Link&populate[Produktbereich][populate]=Produkte.Produktdetail.Bild&populate[Produktbereich][populate]=Produkte.zusatzliche_Details.Link&populate[Produktbereich][populate]=Produkte.Uber_uns.Preise&populate[Produktbereich][populate]=Button&populate[Anzeigenbereich][populate]=Partners.patner_bild&populate[Anzeigenbereich][populate]=Partners.farbige_Bild`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBannerData(data.data.Bannerbereich);
            setHeartData(data.data.Herz_Bereich);
            setProductsData(data.data.Produktbereich);
            setAdData(data.data.Anzeigenbereich);
        }
    }


    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div>
            <Navbar />
            <section className='wi_full py_3 banner_sec main_banner' style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch${bannerData?.Banner_Bild?.url}')` }}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            {bannerData ? (
                                <div className="banner_content text-center">
                                    <h1>{bannerData?.Haupttitel}</h1>
                                    <p>{bannerData?.Beschreibung}</p>
                                    <p>{bannerData?.Kleine_Beschreibung}</p>
                                    <div className="banner_btns d-flex d-lg-none my-4">
                                        {bannerData?.Links2?.map((roundLink, index) => (
                                            <div key={index} className={`round_btn round_${index + 1}`}>
                                                <Link to={roundLink?.Link_URL} className="text-uppercase">
                                                    {roundLink?.Link_Text}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='btn_block link_btn justify-content-center'>
                                        {bannerData?.Links1.map((Link, index) => (
                                            <div className={`buttn_${index + 1}`} key={index}>
                                                <MyLink link={Link?.Link_URL} text={Link?.Link_Text} color={index % 2 == 0 ? 'green' : ''} />
                                            </div>
                                        ))}
                                    </div>
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
                        <div className="col-12 col-lg-6 align-self-end">
                            <div className="banner_btns d-none d-lg-flex">
                                {bannerData?.Links2?.map((roundLink, index) => (
                                    <div key={index} className={`round_btn round_${index + 1}`}>
                                        <Link to={roundLink?.Link_URL} className="text-uppercase">
                                            {roundLink?.Link_Text}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wi_full py_3 heart_sec">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7 content_box">
                            <div className="heart_block">
                                <img className="heart_img" src={`https://medzentrum.entwicklung-loewenmut.ch${heartData?.linke_Seite?.Bild?.url}`} alt="" />
                                <div className="content_wrap">
                                    <div className="sub_title">{heartData?.linke_Seite?.kleine_Uberschrift}</div>
                                    <h2 style={{lineHeight:'1.1'}}>{heartData?.linke_Seite?.grosse_Uberschrift}</h2>
                                    {heartData?.linke_Seite?.Text && <BlocksRenderer content={heartData?.linke_Seite?.Text} />}
                                    {/* <p>{heartData?.linke_Seite?.Text}</p> */}
                                    <div className='btn_block'>
                                        <MyLink link={heartData?.linke_Seite?.Link?.Link_URL} text={heartData?.linke_Seite?.Link?.Link_Text} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 content_box">
                            {heartData?.rechte_Seite?.map((item, index) => (
                                <div key={item?.id ?? index} className={`item-${index + 1} content_wrap`}>
                                    <div className="sub_title">{item?.kleine_Uberschrift ?? "Default Small Heading"}</div>
                                    <h3 className='font-volk h3_large'>{item?.grosse_Uberschrift ?? "Default Large Heading"}</h3>
                                    {item?.Text && <BlocksRenderer content={item?.Text} />}
                                    <div className="btn_block">
                                        <MyLink link={item?.Link?.Link_URL} text={item?.Link?.Link_Text} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 aktionen_sec bg_light_blue products-sec p-0'>
                {/* <ProductsSection productsData={productsData} /> */}

                <div className="container">
                    <div className="test">

                        <iframe
                            className='products-iframe'
                            id="halfpage"
                            name="halfpage"
                            src="https://www.rotpunkt-apotheken.ch/iframes/halfpage-600.html"
                            width="100%"
                            // height="900px"
                            //scrolling="no"
                            frameBorder="0"
                            style={{
                                // verticalAlign: "top",
                                // borderStyle: "hidden",
                                // border: "none",
                                // overflow: "hidden",
                                // margin: 0,
                                // padding: 0,
                            }}
                        >
                            Leider unterstützt Ihr Browser keine Inline Frames.
                        </iframe>
                    </div>
                </div>

            </section>
            <section className='wi_full py_3 partner_sec bg_dark_grey'>
                <PartnersSection adData={adData} />
            </section>
            <Footer />
        </div>
    )
}

export default Home