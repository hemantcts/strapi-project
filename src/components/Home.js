import React from 'react'
import Navbar from './Navbar';
import heartImg from '../images/HEART.png';
// import productImg1 from '../images/product-img1.png';
import adImg from '../images/ad-img.png';
import { Link } from 'react-router-dom';
// import discountImg from '../images/discount_img.png'
import ProductsSection from './ProductsSection';
import Footer from './Footer';

const Home = () => {

    const productsData = {
        heading: "Aktionen",
        paragraph: "",
        products: [
            {
                productDetails: {
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
            }
        ]
    }


    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section className='banner-sec'>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center mb-5 mb-lg-0">
                                <h1>Apotheke und Praxis unter einem Dach</h1>
                                <p>Unser Team aus Hausärzt/innen, Gynäkolog/ irurg/innen und Apotheker/innen arbeitet interdisziplinär, um Sie individuell und kompetent zu betreuen.</p>
                                <p>Wir freuen uns auf Ihren Besuch!</p>
                                <ul className='p-0'>
                                    <li>
                                        <Link to='/' className='m-0 option-link'>ZUR APOTHEKE <i class="fa-solid fa-arrow-right "/></Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='m-0 option-link'>ZUR PRAXIS <i class="fa-solid fa-arrow-right "/></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex banner-item justify-content-lg-end align-items-lg-end justify-content-around align-items-start">
                                    <div className="round round-1">TERMIN FÜR DIE APOTHEKE BUCHEN</div>
                                    <div className="round round-2">TERMIN FÜR DIE PRAXIS BUCHEN</div>
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
                                        <img src={heartImg} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <div className="heart-sec-inner-content">
                                            <h5>Gesundheitsvorsorge </h5>
                                            <h2>HerzCheck</h2>
                                            <p>
                                                Neun von zehn Herzinfarkte und Hirnschläge
                                                werden von Faktoren beeinflusst, die sich messen
                                                und kontrollieren lassen. Mit dem HerzCheck
                                                erfahren Sie, wie es um Ihre Herz-Kreislauf Gesundheit steht. Wenn Sie Ihre Risikofaktoren
                                                kennen, können Sie aktiv etwas dagegen tun.
                                            </p>
                                            <ul className='p-0'>
                                                <li>
                                                    <Link to='/' className='m-0 option-link'>WEITERLESEN <i class="fa-solid fa-arrow-right "/></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 plg--0">
                            <div className="heart-inner-content2">
                                <div className="item-1 mb-5">
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
                                            <Link to='/' className='m-0 option-link'>WEITERLESEN <i class="fa-solid fa-arrow-right "/></Link>
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
                                            <Link to='/' className='m-0 option-link'>WEITERLESEN <i class="fa-solid fa-arrow-right "/></Link>
                                        </li>
                                    </ul>
                                </div>

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
                    <h2 className='text-center'> Unsere Partner </h2>
                    <div className="ad-inner-content mt-5 mb-3">
                        <img src={adImg} alt="" />
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
