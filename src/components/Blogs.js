import React from "react";
import imgBlog from '../images/blog-img.png'
import arrowImg from '../images/white-arrow.svg'
import MyLink from './mini_components/MyLink';
import { Link } from "react-router-dom";

export const Blogs = ({ blogs, color }) => {
    return (
        <div className='row blog_Post_list'>
            {blogs?.map((blog, index) => (
                <div key={index} className='col-sm-6 col-lg-4 mt_col blog_item '>
                    <div className='post_inner'>
                        <div className='post_img position-relative'>
                            <Link to={`/blog/${blog?.id}`}><img src={`https://medzentrum.entwicklung-loewenmut.ch${blog?.image?.url}`} alt='' /></Link>
                            <div className='post_category'>Proin gravida</div>
                        </div>
                        <div className='post_content text-black mt-3'>
                            <h3><Link to={`/blog/${blog?.id}`}>{blog?.title}</Link></h3>
                            <p> {blog?.description}</p>
                            <div className='btn_block'>
                                <MyLink link={`/blog/${blog?.id}`} text='Mehr erfahren' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='btn_block justify-content-center mt-5'>
                <button type="button" id="load_more" className="button fill_btn">MEHR LADEN <img src={arrowImg} alt="#" /></button>
            </div>
        </div>
    )
}