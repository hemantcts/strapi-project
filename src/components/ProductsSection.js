import React from 'react'
import { Link } from 'react-router-dom'
import productImg1 from '../images/product-img1.png';
import discountImg from '../images/discount_img.png'
import MyLink from './mini_components/MyLink';

const ProductsSection = ({ productsData }) => {
    return (
        <div className="container">
            {productsData.heading && <h2 className='text-center mb-5'>{productsData.heading}</h2>}
            {productsData.paragraph && <p className='text-center mb-5 paragraph'>{productsData.paragraph}</p>}
            <div className="row">
                {productsData.products.map((product, index) => {
                    return (
                        <div className="col-lg-6" key={index}>
                            <div className="product-items mb-5 mb-lg-0 px-lg-2">
                                <div className="row" >
                                    <div className="col-12 mb-lg-4 mb-0">
                                        <div className="row" >
                                            <div className="col-7">
                                                <div className='product-item mb-4'>
                                                    <h4>{product.productDetails.name}</h4>
                                                    <p>{product.productDetails.description}</p>
                                                    <small>{product.productDetails.expiry}</small>
                                                </div>
                                            </div>
                                            <div className="col-5" style={{ position: "relative" }}>
                                                <img src={productImg1} alt="" />
                                                <div className="discount">
                                                    <img src={discountImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="product-info mb-4">
                                            <h4 className='mb-3' >{product.about.heading}</h4>
                                            {product.about?.prices?.map((price, i) => {
                                                return (
                                                    <div className="row" key={i}>
                                                        <div className="col-12">
                                                            <div className="row align-items-center">

                                                                <div className='col-4'>
                                                                    <p className='mb-0'>{price.currentPrice}</p>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h3>{price.current}</h3>
                                                                </div>
                                                                <div className='col-2'>
                                                                    <p className='mb-0'>{price.lastPrice}</p>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h4 className='last_price'>{price.last}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="col-12 mt-2 mb-5">
                                        <div className='about-product'>
                                            <ul className='p-0 mb-5'>
                                                <li>
                                                    {/* <Link to='/' className='option-link'>BESTELLEN <i class="fa-solid fa-arrow-right option-link-icon" /></Link> */}
                                                    <MyLink link="/" text="BESTELLEN" />
                                                </li>
                                            </ul>

                                            <h6>{product.extraDetails.title}</h6>
                                            <small>{product.extraDetails.desc}</small>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })}
            </div>
            {productsData?.buttonText && <div className="products_sec_btn text-center">
                <Link to="#" class="products-main-btn">{productsData.buttonText} <i class="fa-solid fa-arrow-right " /></Link>
            </div>}
        </div>
    )
}

export default ProductsSection
