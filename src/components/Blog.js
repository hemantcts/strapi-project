import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { MyButton } from './mini_components/MyButton'
import Footer from './Footer'
import postThumb from '../images/post-thumbnail.png'
import arrowImg from '../images/white-arrow.svg'
import productImg from '../images/product-2.png'
import productImg2 from '../images/product-3.png'

export const Blog = ({data, color}) => {
    const [bannerData, setBannerData] = useState();
    return (
        <div className='single-blog'>
            <header>
                <Navbar />
            </header>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton />
            </section>
            <section className='wi_full py_3 blog_detail'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-lg-8 detail_col'>
                            <div className='post_data_wrapper text-black'>
                                <h1 className='h3_large'>Proin gravida nibh vel velit auctor aliquet</h1>
                                <img src={postThumb} alt="" className='w-100 my-3' />
                                <h3>Proin gravida nibh vel velit auctor aliquet</h3>
                                <p> Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</p>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                                <h3>Proin gravida nibh vel velit auctor aliquet</h3>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue</p>
                                <p>Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                                <h2>Proin gravida</h2>
                                <div className='grey_box'>
                                    <img src={productImg} alt='' />
                                    <img src={productImg2} alt='' />
                                </div>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.</p>
                                <p>Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                                <div className='btn_block mt-5'>
                                    <button type="button" className="button fill_btn">ALLE AKTIONEN  <img src={arrowImg} alt="#" /></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 sticky_col'>
                            <div className='related_blogs'>
                                <h3>Alle Gesundheitsthemen </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}