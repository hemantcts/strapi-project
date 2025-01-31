import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import heartImg from '../images/HEART.png';
// import productImg1 from '../images/product-img1.png';
// import adImg from '../images/ad-img.png';
import adImg1 from '../images/ad-img-1.svg';
import adImg2 from '../images/ad-img-2.svg';
import adImg3 from '../images/ad-img-3.svg';
// import { Link } from 'react-router-dom';
// import discountImg from '../images/discount_img.png'
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import MyLink from './mini_components/MyLink';
import { Link } from 'react-router-dom';
import productImg1 from '../images/product-img1.png'
import productImg2 from '../images/product-img2.png'

const Home = () => {

    const productsData5 = {
        heading: "Aktionen",
        paragraph: "",
        buttonText: "ALLE AKTIONEN",
        products: [
            {
                productDetails: {
                    image: productImg1,
                    name: 'Grippe',
                    description: 'Pretuval® eignet sich zur Behandlung einer Erkältung oder einer Grippe und lindert Kopf- und Gliederschmerzen, Schnupfen, Fieber sowie Reizhusten.',
                    expiry: 'Gültig bis 30.11.2024'
                },
                about: {
                    heading: 'Pretuval® Grippe & Erkältung',
                    prices: [
                        { currentPrice: 'Filmtabletten, 20 Stk.', current: '15.85', lastPrice: 'statt', last: '19.80' },
                        { currentPrice: 'Brausetabletten, 20 Stk.', current: '20.70', lastPrice: 'statt', last: '25.90' }
                    ]
                },
                extraDetails: {
                    title: "Bayer (Schweiz) AG",
                    desc: "Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage."
                }
            },
            {
                productDetails: {
                    image: productImg2,
                    name: 'Rauchentwöhnung?',
                    description: 'Nicorette® lindert die Entzugserscheinungen und kann so dabei unterstützen, rauchfrei zu werden.',
                    expiry: 'Gültig bis 31.01.2025'
                },
                about: {
                    heading: 'Nicorette®',
                    prices: [
                        { currentPrice: 'z.B. Mint Spray, 150 Dosierungen', current: '49.70', lastPrice: 'statt', last: '62.10' }
                    ]
                },
                extraDetails: {
                    title: "JNTL Consumer Health II (Switzerland) GmbH",
                    desc: "Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage."
                }
            }
        ]
    }

    const [bannerData, setBannerData] = useState(null);
    const [heartData, setHeartData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    const [adData, setAdData] = useState(null);

    const [pageData, setPageData] = useState(null);

    const getPageData = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/homepage?populate[banner_section][populate]=*&populate[heart_section][populate]=left_side.image&populate[heart_section][populate]=left_side.link&populate[heart_section][populate]=right_side.link&populate[products_section][populate]=products.product_details.image&populate[products_section][populate]=products.extraDetails.link&populate[products_section][populate]=products.about.prices&populate[ad_section][populate]=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setPageData(data.data);
            setBannerData(data.data.banner_section);
            setHeartData(data.data.heart_section);
            setProductsData(data.data.products_section);
            setAdData(data.data.ad_section);
        }
    }

    const getProducts = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/products?populate[products][populate]=product_details.image&populate[products][populate]=extraDetails.link&populate[products][populate]=about.prices`)
        const data = await response.json();
        console.log(data.data);
    }


    useEffect(() => {
        getPageData();
        getProducts();
    }, [])

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section className='banner-sec'>
                <div className="banner" style={{background: `url('https://medzentrum.entwicklung-loewenmut.ch${bannerData?.banner_image?.url}')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center mb-5 mb-lg-0">
                                <h1>{bannerData?.main_title}</h1>
                                <p>{bannerData?.description}</p>
                                <ul className='p-0'>
                                    {bannerData?.links1.map((link, index) => (
                                        <li key={index}>
                                            <MyLink link={link.link_url} text={link.link_text} />
                                        </li>
                                    ))}
                                    {/* <li>
                                        <MyLink link="/" text="ZUR APOTHEKE" />
                                    </li>
                                    <li>
                                        <MyLink link="/" text="ZUR PRAXIS" />
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex banner-item justify-content-lg-end align-items-lg-end justify-content-around align-items-start">
                                    {bannerData?.links2.map((roundLink, index) => (
                                        <div key={index} className={`round round-${index + 1}`}>
                                        <Link to={roundLink.link_url} className="round-link">
                                            {roundLink.link_text}
                                        </Link>
                                        </div>
                                    ))}
                                    {/* <div className="round round-1">
                                        <Link to='#' className="round-link">
                                            TERMIN FÜR DIE APOTHEKE BUCHEN
                                        </Link>
                                    </div>
                                    <div className="round round-2">
                                        <Link to='#' className="round-link">
                                            TERMIN FÜR DIE PRAXIS BUCHEN
                                        </Link>
                                    </div> */}
                                    
                                </div>
                            </div>             
                        </div>
                    </div>
                </div>
            </section>

            <section className="heart-sec">
                <div className="container ps-lg-0">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 p-lg-0">
                            <div className="heart-inner-content1 mb-5 mb-lg-0">
                                <div className="row align-items-center mb-5">
                                    <div className="col-4 ps-lg-0">
                                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${heartData?.left_side?.image?.url}`} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <div className="heart-sec-inner-content">
                                            <h5>{heartData?.left_side?.small_heading}</h5>
                                            <h2>{heartData?.left_side?.large_heading}</h2>
                                            <p>{heartData?.left_side?.text}</p>
                                            <ul className='p-0'>
                                                <li>
                                                    <MyLink link='/' text={heartData?.left_side?.link?.link_text} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 plg--0">
                            <div className="heart-inner-content2">
                                {heartData?.right_side?.map((item, index) => (
                                    <div key={item?.id ?? index} className={`item-${index + 1} mb-5`}>
                                    <h5>{item?.small_heading ?? "Default Small Heading"}</h5>
                                    <h3>{item?.large_heading ?? "Default Large Heading"}</h3>
                                    <p>{item?.text ?? "Default text for the right side."}</p>
                                    <ul className="p-0">
                                        <li>
                                        <MyLink link="/" text="WEITERLESEN" />
                                        </li>
                                    </ul>
                                    </div>
                                ))}
                                {/* <div className="item-1 mb-5">
                                    <h5>Impfungen</h5>
                                    <h3>Grippeimpfung</h3>
                                    <p>
                                        Vorbeugen ist besser als Heilen. Mit einer
                                        Grippeimpfung schützen Sie nicht nur sich selbst,
                                        sondern auch Ihre nahen Angehörigen und andere
                                        Mitmenschen. 
                                    </p>
                                    <ul className='p-0'>
                                        <li>
                                            <MyLink link="/" text="WEITERLESEN" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="item-2">
                                    <h5>Wundambulatorium </h5>
                                    <h3>Fäden ziehen</h3>
                                    <p>Im Dr. Andres Wundambulatorium werden akute und
                                    chronische Wunden professionell versorgt.</p>
                                    <ul className='p-0'>
                                        <li>

                                            <MyLink link="/" text="WEITERLESEN" />
                                        </li>
                                    </ul>
                                </div> */}
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='products-sec'>
                <ProductsSection productsData={productsData} />
            </section>

            <section className='ad-sec'>
                <div className="container">
                    <h2 className='text-center'> {adData?.heading} </h2>
                    <div className="ad-inner-content mt-5 mb-3">

                        

                        <div className="row align-items-center justify-content-around">

                            {adData?.images?.map((image, index) => (
                                <div key={image?.id ?? index} className="col-lg-4 col-sm-5 col-8 px-lg-5 mb-lg-0 mb-5">
                                <img
                                    src={`https://medzentrum.entwicklung-loewenmut.ch${image?.url}`}
                                    alt=""
                                />
                                </div>
                            )) }

                            {/* <div className="col-lg-4 col-sm-5 col-8 px-lg-5 mb-lg-0 mb-5">
                                <img src={adImg1} alt="" />
                            </div>
                            <div className="col-lg-4 col-sm-5 col-8 px-lg-5 mb-lg-0 mb-5">
                                <img src={adImg2} alt="" />
                            </div>
                            <div className="col-lg-4 col-sm-5 col-8 px-lg-5 mb-lg-0 mb-5">
                                <img src={adImg3} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>

            <footer>
                <Footer />
            </footer>


        </div>
    )
}

export default Home
