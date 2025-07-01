import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { MyButton } from './mini_components/MyButton'
import { TwoContent } from './mini_components/TwoContent'
import Footer from './Footer';
import { JobShuffle } from './JobShuffle';
import MyLink from './mini_components/MyLink';

const JobsApplyPage = () => {
    const activeLink = { link1: false, link2: false, link3: false, link4: false, link5: true, link6: false }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='jobs-apply-page'>
            {/* <div className='stickY_btn'>
                <StickyButton btntext='Termin Buchen praxis' btnLink='/terminbuchung-praxis' color='blue' />
            </div> */}

            <Navbar activeLink={activeLink} />

            <section className='wi_full banner_sec job_banner_sec p-0'></section>

            {/* <section className='inner_banner_Section'>
                <BannerSection bannerData={bannerData} color='blue' teamBanner={true} />
            </section> */}


            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={'bannerData?.Titel'} />
            </section>
            <section className="wi_full py_3 job_sec">
                <div className="container-xxl">

                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div style={{ display: 'inline-block' }}>
                                <h3>Für welche Stelle möchten Sie sich bewerben?</h3>
                                <div className="form-check ps-0">
                                    <input type="checkbox" id='job-title1' />
                                    <label className='job-title' htmlFor='job-title1'>Apotheker:in</label>
                                </div>
                                <div className="form-check ps-0">
                                    <input type="checkbox" id='job-title2' />
                                    <label className='job-title' htmlFor='job-title2'>Arzt / Ärztin</label>
                                </div>
                                <div className="form-check ps-0">
                                    <input type="checkbox" id='job-title3' />
                                    <label className='job-title' htmlFor='job-title3'>Fachfrau/-mann Apotheke</label>
                                </div>
                                <div className="form-check ps-0">
                                    <input type="checkbox" id='job-title4' />
                                    <label className='job-title' htmlFor='job-title4'>med. Praxisassistent/in</label>
                                </div>
                                <div className="form-check ps-0 mt-2">
                                    <input type="checkbox" id='job-title10' />
                                    <label className='custom-label' htmlFor='job-title10'>
                                        <input type="text" disabled placeholder='Ihre Wunschposition?' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Wie dürfen wir Sie kontaktieren?</h3>
                            <div className="form-check ps-0">
                                <input type="checkbox" id='job-title5' />
                                <label htmlFor='job-title5'>per Telefon</label>
                            </div>
                            <div className="form-check ps-0">
                                <input type="checkbox" id='job-title6' />
                                <label htmlFor='job-title6'>per SMS</label>
                            </div>
                            <div className="form-check ps-0">
                                <input type="checkbox" id='job-title7' />
                                <label htmlFor='job-title7'>per WhatsApp</label>
                            </div>
                            <div className="form-check ps-0">
                                <input type="checkbox" id='job-title8' />
                                <label htmlFor='job-title8'>per Mail</label>
                            </div>
                        </div>
                    </div>




                    <div className="job-apply-form mt-4 p-4">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="row">
                                <div className="col-sm-6 mb-4">
                                    <input type="text" placeholder='Vorname' />
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <input type="text" placeholder='Nachname' />
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <input type="text" placeholder='Telefon' />
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <input type="text" placeholder='E-Mail-Adresse' />
                                </div>
                                <div className="col-12 mb-3">
                                    <textarea className='message-box' placeholder='Bemerkung' name="" id=""></textarea>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="upload-files">
                                            <input className='d-none' type="file" id='uploadId' />
                                            <div className='upload-box'>
                                                <label htmlFor="uploadId">
                                                    <h6>CV Upload</h6>
                                                    <small>PDF max. 10 MB</small>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="google-capcha">

                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="d-flex justify-content-between">
                                        <div className="homepage-btn">
                                            <MyLink text={'Zur Startseite'} link={'/'} fullBtn={true} />
                                        </div>
                                        <button className="submit-btn border-0" type='submit'>
                                            <MyLink text={'JETZT BEWERBEN'} fullBtn={true} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default JobsApplyPage
