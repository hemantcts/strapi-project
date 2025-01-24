import React from 'react'
import Navbar from './Navbar';
import heartImg from '../images/HEART.png';
import productImg1 from '../images/product-img1.png';
import adImg from '../images/ad-img.png';
import { Link } from 'react-router-dom';

const Home = () => {
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
                                        <Link to='/' className='m-0 option-link'>ZUR APOTHEKE <i class="fa-solid fa-arrow-right fa-fade"/></Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='m-0 option-link'>ZUR PRAXIS <i class="fa-solid fa-arrow-right fa-fade"/></Link>
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
                                                    <Link to='/' className='m-0 option-link'>WEITERLESEN <i class="fa-solid fa-arrow-right fa-fade"/></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 plg--0">
                            <div className="heart-inner-content2">
                                <div className="item-1 mb-4">
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
                                            <Link to='/' className='m-0 option-link'>WEITERLESEN <i class="fa-solid fa-arrow-right fa-fade"/></Link>
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
                                            <Link to='/' className='m-0 option-link'>WEITERLESEN <i class="fa-solid fa-arrow-right fa-fade"/></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='products-sec'>
                <div className="container">
                    <h2 className='text-center mb-4'>Aktionen</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-items mb-5 mb-lg-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className='product-item mb-4'>
                                                    <h4>Grippe</h4>
                                                    <p>Pretuval® eignet sich zur Behandlung einer
                                                        Erkältung oder einer Grippe und lindert
                                                        Kopf- und Gliederschmerzen, Schnupfen,
                                                        Fieber sowie Reizhusten.</p>
                                                    <small>Gültig bis 30.11.2024</small>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <img src={productImg1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-sm-8 ">
                                        <div className="product-info">
                                            <h5>Pretuval® Grippe & Erkältung</h5>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span>
                                                    <p>Filmtabletten, 20 Stk.</p>
                                                </span>
                                                <span>
                                                    <h2>15.85</h2>
                                                </span>
                                                <span>
                                                    <p>statt</p>
                                                </span>
                                                <span>
                                                    <h3>15.85</h3>
                                                </span>
                                            </div>

                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span>
                                                    <p>Brausetabletten, 20 Stk.</p>
                                                </span>
                                                <span>
                                                    <h2>20.70</h2>
                                                </span>
                                                <span>
                                                    <p>statt</p>
                                                </span>
                                                <span>
                                                    <h3>25.90</h3>
                                                </span>
                                            </div>

                                            

                                        </div>
                                    </div>

                                    <div className="col-12 mt-2">
                                        <div className='about-product'>
                                            <ul className='p-0'>
                                                <li>
                                                    <Link to='/' className='option-link'>BESTELLEN <i class="fa-solid fa-arrow-right fa-fade"/></Link>
                                                </li>
                                            </ul>

                                            <h6>Bayer (Schweiz) AG</h6>

                                            <small>Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className='product-item mb-4'>
                                                    <h4>Grippe</h4>
                                                    <p>Pretuval® eignet sich zur Behandlung einer
                                                        Erkältung oder einer Grippe und lindert
                                                        Kopf- und Gliederschmerzen, Schnupfen,
                                                        Fieber sowie Reizhusten.</p>
                                                    <small>Gültig bis 30.11.2024</small>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <img src={productImg1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-sm-8">
                                        <div className="product-info ">
                                            <h5>Pretuval® Grippe & Erkältung</h5>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span>
                                                    <p>Filmtabletten, 20 Stk.</p>
                                                </span>
                                                <span>
                                                    <h2>15.85</h2>
                                                </span>
                                                <span>
                                                    <p>statt</p>
                                                </span>
                                                <span>
                                                    <h3>15.85</h3>
                                                </span>
                                            </div>

                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span>
                                                    <p>Brausetabletten, 20 Stk.</p>
                                                </span>
                                                <span>
                                                    <h2>20.70</h2>
                                                </span>
                                                <span>
                                                    <p>statt</p>
                                                </span>
                                                <span>
                                                    <h3>25.90</h3>
                                                </span>
                                            </div>

                                            

                                        </div>
                                    </div>

                                    <div className="col-12 mt-2">
                                        <div className='about-product'>
                                            <ul className='p-0'>
                                                <li>
                                                    <Link to='/' className='option-link'>BESTELLEN <i class="fa-solid fa-arrow-right fa-fade"/></Link>
                                                </li>
                                            </ul>

                                            <h6>Bayer (Schweiz) AG</h6>

                                            <small>Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ad-sec'>
                <div className="container">
                    <h2 className='text-center'> Unsere Partner </h2>
                    <div className="ad-inner-content mt-5 mb-3">
                        <img src={adImg} alt="" />
                    </div>
                </div>

            </section>

            <footer className='footer-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <h5>MedZentrum Pfungen</h5>
                            <ul className='p-0'>
                                <li>Riedäckerstrasse 5</li>
                                <li>8422 Pfungen</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <h5>Apotheke</h5>
                            <ul className='p-0'>
                                <li>052 305 03 55</li>
                                <li>praxis@medzentrum.ch</li>
                            </ul>
                            <ul className='p-0'>
                                <li>Öffnungszeiten Apotheke</li>
                                <li>Montag bis Freitag</li>
                                <li>8:00 – 12:15 | 13:00 – 18:30</li>
                                <li>Samstag 8:00 – 13:00</li>
                            </ul>
                            
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <h5>Praxis</h5>
                            <ul className='p-0'>
                                <li>052 305 03 55</li>
                                <li>praxis@medzentrum.ch</li>
                            </ul>
                            <ul className='p-0'>
                                <li>Telefonzeiten:</li>
                                <li>Montag bis Freitag</li>
                                <li>8:00 – 12:00 | 14:00 – 17:30</li>
                            </ul>
                            <ul className='p-0'>
                                <li>Öffnungszeiten Praxis:</li>
                                <li>Montag bis Freitag</li>
                                <li>8:00 – 12:00 | 13:00 – 18:00</li>
                                <li>Samstag nach Vereinbarung</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <h5>Rechtliches</h5>
                            <ul className='p-0'>
                                <li>Impressum</li>
                                <li>Datenschutzerklärung</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">

                </div>
            </footer>


        </div>
    )
}

export default Home
