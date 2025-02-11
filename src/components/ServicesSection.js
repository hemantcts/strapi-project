import React from 'react'
import img1 from '../images/services-sec-img1.png'
import MyLink from './mini_components/MyLink'

const ServicesSection = ({servicesData}) => {
    return (
        <div className="row mt-5">
            {servicesData?.map((service, index)=>(
                <div className="col-lg-6 my-4" key={index}>
                    <div className='service-sec-inner-content'>
                        <div className='row align-items-center' style={{height: '100%'}}>
                            <div className="col-5 images">
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${service?.image?.url}`} alt="" />
                            </div>
                            <div className="col-7 content">
                                <h4 className='mb-1'>{service?.title}</h4>
                                <p className='mb-2'>{service?.description}</p>
                                <MyLink to={service?.link?.link_url} text={service?.link?.link_text} color='green' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesSection
