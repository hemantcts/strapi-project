import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { MyButton } from '../mini_components/MyButton'
import Footer from '../Footer'
import postThumb from '../../images/post-thumbnail.png'
import arrowImg from '../../images/white-arrow.svg'
import productImg from '../../images/product-2.png'
import productImg2 from '../../images/product-3.png'
import imgBlog from '../../images/blog-img.png'
import MyLink from '../mini_components/MyLink';
import { Accordion } from '../Accordion'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Blog = ({ data, color }) => {

    const { title } = useParams();
    const [productDetails, setProductDetails] = useState();
    const [extraDetails, setExtraDetails] = useState();
    const [blogs, setBlogs] = useState();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    const getPageData = async () => {
        const response = await fetch('https://medzentrum.entwicklung-loewenmut.ch/api/single-blog?populate[product_details][populate]=image&populate[extra_details][populate]=accordion_data')
        const data = await response.json();
        console.log(data);
        if (data) {
            setProductDetails(data.data.product_details);
            setExtraDetails(data.data.extra_details);
        }
    }

    const getBlogs = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBlogs(data.data);
        }
    }

    useEffect(() => {
        getPageData();
        getBlogs();
        // navigate("/404");
    }, [])

    useEffect(() => {
        if (blogs?.length > 0 && title) {
            const matchedBlog = blogs?.find((blog) => blog.title.toString() === title);
            console.log(blog);
            // setBlog(matchedBlog);
            if (matchedBlog) {
                setBlog(matchedBlog);
            } else {
                navigate("/error"); // Redirect to trigger the catch-all error route
            }
        }
    }, [blogs, title]);

    if (!blog) return null;


    return (
        <div className='single-blog'>
            <header>
                <Navbar />
            </header>
            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={blog?.title} activePage={blog?.category} />
            </section>
            <section className='wi_full py_3 blog_detail'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-lg-8 detail_col'>
                            <div className='post_data_wrapper text-black'>
                                <h1>{blog?.title}</h1>
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${blog?.image?.url}`} alt="" className='w-100 my-3' />
                                <h3>{blog?.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: blog?.description }} />

                            </div>
                            
                            <div className='post_data_wrapper text-black mt-5 pt-lg-5'>
                                <h2>{productDetails?.title}</h2>
                                <div className='grey_box'>
                                    {/* <img src={`https://medzentrum.entwicklung-loewenmut.ch${productDetails?.image?.url}`} alt='' /> */}
                                    <img src={productImg} alt='' />
                                    <img src={productImg2} alt='' />
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: productDetails?.description }} />
                                <div className='btn_block mt-5'>
                                    <button type="button" className="button fill_btn">ALLE AKTIONEN  <img src={arrowImg} alt="#" /></button>
                                </div>
                            </div>

                            <div className='post_data_wrapper text-black mt-5 pt-lg-5'>
                                <h1>{extraDetails?.heading}</h1>
                                <Accordion data={extraDetails?.accordion_data} greyy={true} />
                            </div>

                        </div>
                        <div className='col-lg-4 sticky_col'>
                            <div className='related_blogs'>
                                <h3>Alle Gesundheitsthemen </h3>
                                <div className='rel_blog_list'>
                                    {blogs?.slice(0, 3).map((blog, index)=>(
                                        <div key={index} className='rb_item'>
                                            <div className='rb_itm_iner'>
                                                <div className='rbitm_img'>
                                                    <Link to={`/${blog?.title}`}><img src={`https://medzentrum.entwicklung-loewenmut.ch${blog?.image?.url}`} alt='' /></Link>
                                                </div>
                                                <div className='rbitm_content text-black'>
                                                    <h4><Link to={`/${blog?.title}`}>{blog?.title}</Link></h4>
                                                    <div className='btn_block'>
                                                        <MyLink link={`/${blog?.title}`} text='Mehr erfahren ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}