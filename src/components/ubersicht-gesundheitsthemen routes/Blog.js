import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { MyButton } from '../mini_components/MyButton'
import Footer from '../Footer'
import arrowImg from '../../images/white-arrow.svg'
import MyLink from '../mini_components/MyLink';
import { Accordion } from '../Accordion'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const Blog = ({ data, color }) => {

    let { title } = useParams();
    const [productDetails, setProductDetails] = useState();
    const [extraDetails, setExtraDetails] = useState();
    const [blogs, setBlogs] = useState();
    const [blog, setBlog] = useState(null);
    const [isImageUploaded, setImageUploaded] = useState(false);
    const navigate = useNavigate();

    // const getPageData = async () => {
    //     const response = await fetch('https://medzentrum.entwicklung-loewenmut.ch/api/single-blog?populate[product_details][populate]=image&populate[extra_details][populate]=accordion_data')
    //     const data = await response.json();
    //     console.log(data);
    //     if (data) {
    //         // setProductDetails(data.data.product_details);
    //         // setExtraDetails(data.data.extra_details);
    //     }
    // }

    const getBlogs = async () => {
        const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate[Bild][populate]=*&populate[preis_und_zeit][populate]=Icon&populate[Produktdetail][populate]=Quotes_Details.Bild&populate[Produktdetail][populate]=Button&populate[zusaetzliche_Details][populate]=erweiterbare_Daten&pagination[limit]=100&sort[0]=Post_id`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBlogs(data.data);
        }
    }

    useEffect(() => {
        // getPageData();
        getBlogs();
    }, [])

    // const checkImageUploaded = (product) => {
    //     setImageUploaded(false);
    //     let count = product?.Bild?.length;
    //     console.log("count", count);
    //     product?.Bild.forEach(element => {
    //         if (element.Bild) {
    //             count--;
    //         }
    //         console.log("count", count);
    //     });
    //     if (count !== product?.Bild?.length) {
    //         console.log("true");
    //         setImageUploaded(true);
    //     }
    // }

    useEffect(() => {
        // if(title !== title.toString().toLowerCase()){
        //     navigate(`/${title.toString().toLowerCase()}`)
        // }

        if (blogs?.length > 0 && title) {
            const matchedBlog = blogs?.find((blog) => blog.slug === title);
            console.log(blog);
            if (matchedBlog) {
                setBlog(matchedBlog);
                setProductDetails(matchedBlog?.Produktdetail);
                setExtraDetails(matchedBlog?.zusaetzliche_Details);

                // checkImageUploaded(matchedBlog?.Produktdetail);
            } else {
                navigate("/error"); // Redirect to trigger the catch-all error route
            }
        }


    }, [blogs, title]);

    useEffect(() => {
        const contentBoxes = document.querySelectorAll(".content-box"); // Select all content-box divs
        contentBoxes.forEach(contentBox => {
            const links = contentBox.querySelectorAll("a");
            links.forEach(link => {
                const href = link.getAttribute("href");
                if (href?.startsWith("https")) {
                    link.setAttribute("target", "_blank");
                    link.setAttribute("rel", "noopener noreferrer"); // Security best practice
                }
            });
        });
    }, [blog?.Beschreibung]);

    function checkData(beschreibung) {
        if (!Array.isArray(beschreibung)) return false;

        return beschreibung.some(item =>
            Array.isArray(item.children) &&
            item.children.some(child => typeof child.text === 'string' && child.text.trim() !== '')
        );
    }

    if (!blog) return null;


    return (
        <div className='single-blog shuffle_container '>

            <Navbar />

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText={blog?.Titel} activePage='Gesundheitsthemen' change={true} />
            </section>
            <section className='wi_full py_3 blog_detail'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-lg-8 detail_col'>
                            <div className='post_data_wrapper text-black'>
                                <h1>{blog?.Titel}</h1>
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${blog?.Bild?.url}`} alt="" className='w-100 my-3 mb-lg-4' />
                                <h3>{blog?.Titel}</h3>
                                <div className={`content-box ${blog?.Link_farbe} ${blog?.Icons ? 'icons' : 'no_icons'}`}>
                                    {blog?.Beschreibung && <BlocksRenderer content={blog?.Beschreibung} />}
                                </div>
                                {/* <div dangerouslySetInnerHTML={{ __html: blog?.description }} /> */}

                                {blog?.preis_und_zeit?.length > 0 && <div className="list-items mt-4">
                                    <ul>
                                        {blog?.preis_und_zeit?.map((item, index) => (
                                            <li key={index} className='mb-3 d-flex align-items-center'>
                                                {item?.Icon && <img src={`https://medzentrum.entwicklung-loewenmut.ch${item?.Icon?.url}`} alt="" />}
                                                <span>
                                                    <h4 className='ms-3 mb-0' style={{ display: 'inline-block' }}>{item?.Titel && item?.Titel}</h4>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>}

                            </div>

                            <div className='btn_block mt-4'>
                                {productDetails?.Button && <a href={productDetails?.Button?.Link_URL} target={productDetails?.oeffnen_in_einem_neuen_Tab ? "_blank" : "_self"} rel={productDetails?.oeffnen_in_einem_neuen_Tab ? "noreferrer noopener" : undefined} className={`button fill_btn ${productDetails?.Button_farbe}`}>{productDetails?.Button?.Link_Text} <img src={arrowImg} alt="#" /></a>}

                                {/* <a href='https://www.rotpunkt-apotheken.ch/aktionen' target='_blank' rel="noreferrer" className="button fill_btn">ALLE AKTIONEN  <img src={arrowImg} alt="#" /></a> */}
                            </div>

                            <div className={`post_data_wrapper text-black ${(checkData(productDetails?.Beschreibung) || productDetails?.Titel) ? 'pt_lg' : ''} `}>
                                {productDetails?.Titel && <h2>{productDetails?.Titel}</h2>}
                                {(productDetails?.Quotes_Details) &&

                                    <div className='nuitrition_diagnos'>
                                        <div className='row align-items-center'>
                                            {productDetails?.Quotes_Details?.Quote && (
                                                <div className="col-lg-8 content_col">
                                                    <p style={{ color: 'var(--bs-blue)', margin: '0' }}>«{productDetails?.Quotes_Details?.Quote}»</p>
                                                    <br />
                                                    <h3 className='m-0'>{productDetails?.Quotes_Details?.Name}</h3>
                                                    <p style={{ color: 'var(--bs-blue)', margin: '0' }}>{productDetails?.Quotes_Details?.Funktion}</p>
                                                </div>
                                            )}
                                            <div className='col-lg-4 img_col'>
                                                {productDetails?.Quotes_Details?.Bild && (
                                                    <img
                                                        src={`https://medzentrum.entwicklung-loewenmut.ch${productDetails.Quotes_Details.Bild.url}`}
                                                        alt=""
                                                    />
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                    // <div className={`row grey_box`}>
                                    //     {productDetails?.Bild?.Bild && <div className="col-md-6 text-center">
                                    //         {productDetails?.Bild?.Bild && <img src={`https://medzentrum.entwicklung-loewenmut.ch${productDetails?.Bild?.Bild?.url}`} alt="" />}
                                    //     </div>}

                                    //     {productDetails?.Bild?.Bildtitel && <div className="col-md-5 mb-md-0 mb-4 text-start">
                                    //         <p style={{color:'var(--bs-blue)', margin:'0'}}>{productDetails?.Bild?.Bildtitel}</p>
                                    //     </div>}

                                    // </div>

                                }
                                {/* <div dangerouslySetInnerHTML={{ __html: productDetails?.description }} /> */}
                                {checkData(productDetails?.Beschreibung) && <div className={`content-box ${blog?.Link_farbe} ${productDetails?.Icons ? 'icons' : 'no_icons'}`}>
                                    {productDetails?.Beschreibung && <BlocksRenderer content={productDetails?.Beschreibung} />}
                                </div>}
                                {productDetails?.preis_und_zeit?.length > 0 && <div className="list-items">
                                    <ul>
                                        {productDetails?.preis_und_zeit?.map((item, index) => (
                                            <li key={index} className='mb-3 d-flex align-items-center'>
                                                {item?.Icon && <img src={`https://medzentrum.entwicklung-loewenmut.ch${item?.Icon?.url}`} alt="" />}
                                                <span>
                                                    <h4 className='ms-3 mb-0' style={{ display: 'inline-block' }}>{item?.Titel && item?.Titel}</h4>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>}
                            </div>

                            <div className='post_data_wrapper text-black pt-3 pt-sm-5 '>
                                <h1>{extraDetails?.Ueberschrift}</h1>
                                <Accordion data={extraDetails?.erweiterbare_Daten} greyy={true} customClass='content-box' icons={extraDetails?.Icons} />
                            </div>

                        </div>
                        <div className='col-lg-4 sticky_col'>
                            <div className='related_blogs'>
                                <h3>
                                    <Link to='/uebersicht-gesundheitsthemen'>Alle Gesundheitsthemen</Link>
                                </h3>
                                <div className='rel_blog_list'>
                                    {blogs
                                        ?.filter((b) => b.id !== blog.id) // Exclude the current blog
                                        ?.filter((b, _, arr) => {
                                            const sameCategoryBlogs = arr.filter((item) => item.Kategorie === blog.Kategorie);
                                            return sameCategoryBlogs.length > 0 ? b.Kategorie === blog.Kategorie : true;
                                        })
                                        ?.slice(0, 3) // Limit to 3 blogs
                                        .map((blog, index) => (
                                            <div key={index} className='rb_item'>
                                                <div className='rb_itm_iner'>
                                                    <div className='rbitm_img'>
                                                        <Link to={`/${blog?.slug}`}><img src={`https://medzentrum.entwicklung-loewenmut.ch${blog?.Bild?.url}`} alt='' /></Link>
                                                    </div>
                                                    <div className='rbitm_content text-black'>
                                                        <h4><Link to={`/${blog?.slug}`}>{blog?.Titel}</Link></h4>
                                                        <div className='btn_block'>
                                                            <MyLink link={`/${blog?.slug}`} text='Mehr erfahren ' />
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