import React from 'react'
import { Link } from 'react-router-dom'
import productImg1 from '../images/product-img1.png';
import discountImg from '../images/discount_img.png'

const ProductsSection = ({ productsData }) => {
    return (
        <div className="container">
            {productsData.heading && <h2 className='text-center mb-4'>{productsData.heading}</h2>}
            {productsData.paragraph && <p className='text-center mb-5'>{productsData.paragraph}</p>}
            <div className="row">
                {productsData.products.map((product, index) => {
                    return (
                        <div className="col-lg-6" key={index}>
                            <div className="product-items mb-5 mb-lg-0">
                                <div className="row" >
                                    <div className="col-12 mb-4">
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
                                            <h5 className='mb-2' >{product.about.heading}</h5>
                                            {product.about?.prices?.map((price, i) => {
                                                return (
                                                    <div className="row" key={i}>
                                                        <div className="col-12">
                                                            <div className="row align-items-center">

                                                                <div className='col-4'>
                                                                    {price.currentPrice}
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h2>{price.current}</h2>
                                                                </div>
                                                                <div className='col-2'>
                                                                    {price.lastPrice}
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h3>{price.last}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="col-12 mt-2">
                                        <div className='about-product'>
                                            <ul className='p-0 mb-5'>
                                                <li>
                                                    <Link to='/' className='option-link'>BESTELLEN <i class="fa-solid fa-arrow-right " /></Link>
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
                {/* <div className="col-lg-6">
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-7">
                                        <div className='product-item mb-4'>
                                            <h4>Grippe</h4>
                                            <p>Pretuval® eignet sich zur Behandlung einer
                                                Erkältung oder einer Grippe und lindert
                                                Kopf- und Gliederschmerzen, Schnupfen,
                                                Fieber sowie Reizhusten.</p>
                                            <small>Gültig bis 30.11.2024</small>
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
                            <div className="col-md-10 col-sm-8">
                                <div className="product-info ">
                                    <h5>Pretuval® Grippe & Erkältung</h5>
                                    <div className="d-flex align-items-baseline justify-content-between">
                                        <span>
                                            <p>Filmtabletten, 20 Stk.</p>
                                        </span>
                                        <span>
                                            <h2>15.85</h2>
                                        </span>
                                        <span>
                                            <p>statt</p>
                                        </span>
                                        <span>
                                            <h3>15.85</h3>
                                        </span>
                                    </div>

                                    <div className="d-flex align-items-baseline justify-content-between">
                                        <span>
                                            <p>Brausetabletten, 20 Stk.</p>
                                        </span>
                                        <span>
                                            <h2>20.70</h2>
                                        </span>
                                        <span>
                                            <p>statt</p>
                                        </span>
                                        <span>
                                            <h3>25.90</h3>
                                        </span>
                                    </div>



                                </div>
                            </div>

                            <div className="col-12 mt-2">
                                <div className='about-product'>
                                    <ul className='p-0 mb-5'>
                                        <li>
                                            <Link to='/' className='option-link'>BESTELLEN <i class="fa-solid fa-arrow-right " /></Link>
                                        </li>
                                    </ul>

                                    <h6>Bayer (Schweiz) AG</h6>

                                    <small>Dies ist ein zugelassenes Arzneimittel. Lesen Sie die Packungsbeilage.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProductsSection
