import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import productImg1 from '../images/product-img1.png';
import discountImg from '../images/discount_img.png'
import MyLink from './mini_components/MyLink';
import svgIcon from '../images/option-link-icon.svg';

const ProductsSection = ({ productsData, color }) => {
    const [rowHeights, setRowHeights] = useState([]);

    useEffect(() => {
        const adjustHeights = () => {
            const rows = document.querySelectorAll('.row.mt-5 > .col-lg-6'); // Select all product columns
            let newHeights = [];

            for (let i = 0; i < rows.length; i += 2) { // Loop in pairs (2 columns per row)
                const first = rows[i].querySelector('.all_products');
                const second = rows[i + 1]?.querySelector('.all_products');

                if (first && second) {
                    const maxHeight = Math.max(first.scrollHeight, second.scrollHeight);
                    newHeights[i] = maxHeight;
                    newHeights[i + 1] = maxHeight;
                }
            }

            setRowHeights(newHeights);
        };

        adjustHeights();
        window.addEventListener('resize', adjustHeights); // Recalculate on resize

        return () => window.removeEventListener('resize', adjustHeights);
    }, [productsData]);



    return (
        <div className={`container ${color}`}>
            {productsData?.Uberschrift && <h2 className='text-center mb-3'>{productsData?.Uberschrift}</h2>}
            {productsData?.Beschreibung && <p className='text-center mb-3 description'>{productsData?.Beschreibung}</p>}
            <div className="row mt-5">
                {productsData?.Produkte.map((product, index) => {
                    return (
                        <div className="col-lg-6" key={index} >
                            <div className="product-items mb-5 mb-lg-0 px-lg-2">
                                <div className="row" >
                                    <div className="col-12 mb-lg-4 mb-0 all_products" style={{ height: rowHeights[index] || 'auto' }}>
                                        <div className="row" >
                                            <div className="col-7">
                                                <div className='product-item mb-4'>
                                                    <h4>{product?.Produktdetail?.Name}</h4>
                                                    <p>{product?.Produktdetail?.Beschreibung}</p>
                                                    <small>{product?.Produktdetail?.Ablaufdatum}</small>
                                                </div>
                                            </div>
                                            <div className="col-5" style={{ position: "relative" }}>
                                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${product?.Produktdetail?.Bild?.url}`} alt="" />
                                                <div className="discount">
                                                    <img src={discountImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="product-info mb-4">
                                            <h4 className='mb-3' >{product?.Uber_uns?.Uberschrift}</h4>
                                            <div>
                                                {product?.Uber_uns?.Preise?.map((price, i) => {
                                                    return (
                                                        <div className="row" key={i}>
                                                            <div className="col-12">
                                                                <div className="row align-items-center">

                                                                    <div className='col-5'>
                                                                        <p className='mb-0'>{price?.currentPrice}</p>
                                                                    </div>
                                                                    <div className='col-2 p-0'>
                                                                        <h3>{price?.current}</h3>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <p className='mb-0'>statt</p>
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <h4 className='last_price'>{price?.last}</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-2 mb-5">
                                        <div className='about-product'>
                                            <ul className='p-0 mb-5'>
                                                <li>
                                                    {/* <Link to='/' className='option-link'>BESTELLEN <i className="fa-solid fa-arrow-right option-link-icon" /></Link> */}
                                                    <MyLink link={product?.zusatzliche_Details?.Link?.Link_URL} text={product?.zusatzliche_Details?.Link?.link_text} color={color} />
                                                </li>
                                            </ul>

                                            <h6>{product?.zusatzliche_Details?.Title}</h6>
                                            <small>{product?.zusatzliche_Details?.Beschreibung}</small>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })}
            </div>
            {productsData?.Button?.link_text && <div className="products_sec_btn text-center">
                <a href={productsData?.Button?.Link_URL} target='_blank' className="products-main-btn">{productsData?.Button?.link_text} <i><img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Vector_9_a374977eb9.svg' alt="" /></i></a>
            </div>}
        </div>
    )
} 

export default ProductsSection
