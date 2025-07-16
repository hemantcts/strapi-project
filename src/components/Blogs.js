import React, { useEffect } from "react";
// import imgBlog from '../images/blog-img.png'
import arrowImg from '../images/white-arrow.svg'
import MyLink from './mini_components/MyLink';
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Blogs = ({ blogs, colors, selectedCategory }) => {

    const filteredBlogs = selectedCategory
        ? blogs?.filter(blog => blog?.Kategorie === selectedCategory)
        : blogs; // Show all if no category selected

    const filterTitle = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    if (!Array.isArray(filteredBlogs)) {
        return null;
    }

    return (
        <div className='row blog_Post_list'>
            {filteredBlogs?.map((blog, index) => (
                <div key={index} className='col-sm-6 col-lg-4 mt_col blog_item '>
                    <div className='post_inner'>
                        <div className='post_img position-relative'>
                            <Link to={`/${blog?.slug}`}><img src={`https://backend.medzentrum.ch${blog?.Bild?.url}`} alt='' /></Link>
                            {blog?.Kategorie != "Impfungen" ? (<div className='post_category' style={{ textTransform: 'unset', backgroundColor: `${blog?.Kategorie == "Gesundheits-Checks" ? colors[0] : blog?.Kategorie == "Impfungen" ? colors[1] : colors[2]} ` }}>{blog?.Kategorie}</div>) : (
                                <div className='post_category' style={{ textTransform: 'unset', backgroundColor: `${blog?.Kategorie == "Gesundheits-Checks" ? colors[0] : blog?.Kategorie == "Impfungen" ? colors[1] : colors[2]} ` }}>
                                    Impfungen <span style={{fontSize:'12px'}}>(ab 16 Jahren)</span>
                                </div>
                            )}
                        </div>
                        <div className='post_content text-black mt-3'>
                            <h3><Link to={`/${blog?.slug}`}>{blog?.Titel}</Link></h3>
                            {/* {blog?.Beschreibung && <BlocksRenderer content={blog?.Beschreibung} />} */}
                            {blog?.Beschreibung && <p> {blog?.Beschreibung[0]?.children[0]?.text}</p>}
                            <div className='btn_block'>
                                <MyLink link={`/${blog?.slug}`} text='Mehr erfahren' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <div className='btn_block justify-content-center mt-5'>
                <button type="button" id="load_more" className="button fill_btn">MEHR LADEN <img src={arrowImg} alt="#" /></button>
            </div> */}
        </div>
    )
}