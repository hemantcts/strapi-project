import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import postThumb from '../images/post-thumbnail.png'


export const SearchResult = ({ data, color }) => {
    // const [productDetails, setProductDetails] = useState();
    // const [extraDetails, setExtraDetails] = useState();
    // const [blogs, setBlogs] = useState();

    // const getPageData = async () => {
    //     const response = await fetch('https://medzentrum.entwicklung-loewenmut.ch/api/single-blog?populate[product_details][populate]=image&populate[extra_details][populate]=accordion_data')
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //         setProductDetails(data.data.product_details);
    //         setExtraDetails(data.data.extra_details);
    //     }
    // }

    // const getBlogs = async () => {
    //     const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //         setBlogs(data.data);
    //     }
    // }

    // useEffect(() => {
    //     getPageData();
    //     getBlogs();
    // }, [])


    return (
        <div className='search_page'>
            <header>
                <Navbar />
            </header>
            <section className='wi_full py_3 search_result'>
                <div className='container-xxl'>
                    <div className='sec_title text-black'>
                        <h1 className='text-blue'>Suchergebnisse für „Proin“</h1>
                        <p>Es gibt 3 Ergebnisse für deine Suche.</p>
                    </div>
                    <div className='search_list_row'>
                        <div className='srch_li_item text-black'>
                            <img src={postThumb} alt='' className='src_post_img' />
                            <div className='src_post_content'>
                                <h3>Proin gravida nibh vel velit</h3>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                            </div>
                        </div>
                        <div className='srch_li_item text-black'>
                            <img src={postThumb} alt='' className='src_post_img' />
                            <div className='src_post_content'>
                                <h3>Proin gravida nibh vel velit</h3>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                            </div>
                        </div>
                        <div className='srch_li_item text-black'>
                            <div className='src_post_content'>
                                <h3>Proin gravida nibh vel velit</h3>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}