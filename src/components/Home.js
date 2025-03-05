import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
// import heartImg from '../images/HEART.png';
// import productImg1 from '../images/product-img1.png';
// import adImg from '../images/ad-img.png';
// import adImg1 from '../images/ad-img-1.svg';
// import adImg2 from '../images/ad-img-2.svg';
// import adImg3 from '../images/ad-img-3.svg';
// import { Link } from 'react-router-dom';
// import discountImg from '../images/discount_img.png'
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import MyLink from './mini_components/MyLink';
import { Link } from 'react-router-dom';
import { PartnersSection } from './PartnersSection';
import Skeleton from 'react-loading-skeleton';
// import productImg1 from '../images/product-img1.png'
// import productImg2 from '../images/product-img2.png'

const Home = () => {

    const [bannerData, setBannerData] = useState(null);
    const [heartData, setHeartData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

    // const [pageData, setPageData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/homepage?populate[banner_section][populate]=*&populate[heart_section][populate]=left_side.image&populate[heart_section][populate]=left_side.link&populate[heart_section][populate]=right_side.link&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[products_section][populate]=button&populate[ad_section][populate]=partners.image`)
        const data = await response.json();
        console.log(data);
        if (data) {
            // setPageData(data.data);
            setBannerData(data.data.banner_section);
            setHeartData(data.data.heart_section);
            setProductsData(data.data.products_section);
            setAdData(data.data.ad_section);
        }
    }

    // "https://medzentrum.entwicklung-loewenmut.ch/api/pharmacy-overview?populate[banner_section][populate]=banner_image&populate[specials_section][populate]=image&populate[specials_section][populate]=accordion_data&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=partners.image"

    // const getProducts = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/products?populate[products][populate]=product_details.image&populate[products][populate]=extraDetails.link&populate[products][populate]=about.prices`)
    //     const data = await response.json();
    //     console.log(data.data);
    // }


    useEffect(() => {
        getPageData();
        // getProducts();
    }, [])

    return (
        <div>
            <Navbar />
            <section className='wi_full py_3 banner_sec main_banner' style={{ background: `url('https://medzentrum.entwicklung-loewenmut.ch${bannerData?.banner_image?.url}')` }}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            {bannerData ? (
                                <div className="banner_content text-center">
                                    <h1>{bannerData?.main_title}</h1>
                                    <p>{bannerData?.description}</p>
                                    <p>{bannerData?.small_description}</p>
                                    <div className='btn_block justify-content-center'>
                                        {bannerData?.links1.map((link, index) => (
                                            <div className={`buttn_${index + 1}`} key={index}>
                                                <MyLink link={link.link_url} text={link.link_text} color={index % 2 == 0 ? 'green' : ''} />
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
                                        {bannerData?.links1.map((link, index) => (
                                            <div className={`buttn_${index + 1}`} key={index}>
                                                <MyLink link={link.link_url} text={link.link_text} color={index % 2 == 0 ? 'green' : ''} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                            }
                        </div>
                        <div className="col-12 col-lg-6 align-self-end">
                            <div className="banner_btns">
                                {bannerData?.links2.map((roundLink, index) => (
                                    <div key={index} className={`round_btn round_${index + 1}`}>
                                        <Link to={roundLink.link_url} className="text-uppercase">
                                            {roundLink.link_text}
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
                                <img className="heart_img" src={`https://medzentrum.entwicklung-loewenmut.ch${heartData?.left_side?.image?.url}`} alt="" />
                                <div className="content_wrap">
                                    <div className="sub_title">{heartData?.left_side?.small_heading}</div>
                                    <h2>{heartData?.left_side?.large_heading}</h2>
                                    <p>{heartData?.left_side?.text}</p>
                                    <div className='btn_block'>
                                        <MyLink link={heartData?.left_side?.link?.link_url} text={heartData?.left_side?.link?.link_text} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 content_box">
                            {heartData?.right_side?.map((item, index) => (
                                <div key={item?.id ?? index} className={`item-${index + 1} content_wrap`}>
                                    <div className="sub_title">{item?.small_heading ?? "Default Small Heading"}</div>
                                    <h3 className='font-volk h3_large'>{item?.large_heading ?? "Default Large Heading"}</h3>
                                    <p>{item?.text ?? "Default text for the right side."}</p>
                                    <div className="btn_block">
                                        <MyLink link={item?.link?.link_url} text={item?.link?.link_text} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 aktionen_sec bg_light_blue products-sec'>
                <ProductsSection productsData={productsData} />
            </section>
            <section className='wi_full py_3 partner_sec bg_dark_grey'>
                <PartnersSection adData={adData} />
            </section>
            <Footer />
        </div>
    )
}

export default Home