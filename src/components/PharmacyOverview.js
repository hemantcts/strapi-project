import React from 'react'
import Navbar from './Navbar'
import servicesImg from '../images/services_img.png'
import specialsImg from '../images/specials_img.png'
import ProductsSection from './ProductsSection'
import Footer from './Footer'

const PharmacyOverview = () => {

    const productsData = {
        heading: "Monatsaktionen der Rotpunkt Apotheken",
        paragraph: "Die Rotpunkt Apotheken zeichnen sich seit über zehn Jahren durch attraktive Sparangebote, viele Serviceleistungen, monatliche Überraschungen und eine persönliche und kompetente Beratung aus.",
        products: [
            {
                productDetails: {
                    name: 'Müde?',
                    description: 'Supradyn® pro energy-complex trägt zur Verringerung von Ermüdung und zu einer normalen Funktion des Immunsystems bei.',
                    expiry: 'Gültig bis 31.01.2025'
                },
                about: {
                    heading: 'Supradyn® pro energy-complex',
                    prices: [
                        { currentPrice: 'Brausetabletten, 45 Stk.', current: '37.05', lastPrice: 'statt', last: '46.30' },
                        { currentPrice: 'Filmtabletten, 90 Stk.', current: '50.25', lastPrice: 'statt', last: '62.80' }
                    ]
                },
                extraDetails: {
                    title: "Bayer (Schweiz) AG",
                    desc: "Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage."
                }
            },
            {
                productDetails: {
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

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <section className='pharmacy_banner_sec'>
                <div className="pharmacy_banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <h1>Übersicht <br /> Apotheke</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>Dienstleistungen</h2>
                            <p>Unser Team steht Ihnen mit grosser Fachkompetenz für Ihre Anliegen zur Verfügung. Von einer individuellen und unabhängigen Produkteberatung bis hin zu Behandlungsberatung.</p>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img src={servicesImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specials-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={specialsImg} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Spezielles</h2>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Medikamentenplanung
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Persönliche Mikronährstoff-Mischungen
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Antibabypillen Aktion: 20%
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Hauslieferdienst
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Impfen
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='products-sec'>
                <ProductsSection productsData={productsData} />
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default PharmacyOverview
