import React, { useEffect } from "react";
// import imgBlog from '../images/blog-img.png'
import arrowImg from '../images/white-arrow.svg'
import MyLink from './mini_components/MyLink';
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Blogs = ({ blogs, color, selectedCategory }) => {


    useEffect(() => {
        console.log(selectedCategory)
    }, [selectedCategory])
    

    const filteredBlogs = selectedCategory
        ? blogs?.filter(blog => blog?.Kategorie === selectedCategory)
        : blogs; // Show all if no category selected

    const filterTitle = (title)=>{
        return title.replace(/\s+/g, '-');
    }

    if (!Array.isArray(filteredBlogs)) {
        return null; 
    }

    const sortByNummer = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].post_id > arr[j].post_id) {
                    // Swap elements
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };

    const sortedData = sortByNummer([...filteredBlogs]);

    return (
        <div className='row blog_Post_list'>
            {sortedData?.map((blog, index) => (
                <div key={index} className='col-sm-6 col-lg-4 mt_col blog_item '>
                    <div className='post_inner'>
                        <div className='post_img position-relative'>
                            <Link to={`/${filterTitle(blog?.Titel)}`}><img src={`https://medzentrum.entwicklung-loewenmut.ch${blog?.Bild?.url}`} alt='' /></Link>
                            <div className='post_category'>{blog?.Kategorie}</div>
                        </div>
                        <div className='post_content text-black mt-3'>
                            <h3><Link to={`/${filterTitle(blog?.Titel)}`}>{blog?.Titel}</Link></h3>
                            {/* {blog?.Beschreibung && <BlocksRenderer content={blog?.Beschreibung} />} */}
                            <p> {blog?.Beschreibung[0]?.children[0]?.text}</p>
                            <div className='btn_block'>
                                <MyLink link={`/${filterTitle(blog?.Titel)}`} text='Mehr erfahren' />
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