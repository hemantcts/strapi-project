import React from 'react'
import img1 from '../images/services-sec-img1.png'
import MyLink from './mini_components/MyLink'

const ServicesSection = ({servicesData, color}) => {
    const isHtml = (str) => {
        const doc = new DOMParser().parseFromString(str, "text/html");
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    };
    
    return (
        <div className="row dien_list">
            {servicesData?.map((service, index)=>(
                <div className="col-lg-6 dien_itm mt_col" key={index}>
                    <div className='item_inner'>
                        <div className='row'>
                            <div className="item_img">
                                <img src={`https://medzentrum.entwicklung-loewenmut.ch${service?.image?.url}`} alt="" />
                            </div>
                            <div className="item_text">
                                <h3 className='fw_medium'>{service?.title}</h3>
                                {/* <p>{service?.description}</p> */}
                                {!isHtml(service?.description) ? (
                                    <p>{service?.description}</p>
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: service?.description }} />
                                )}
                                <div class="btn_block">
                                    <MyLink className="button blue_btn text-uppercase" link={service?.link?.link_url} text={service?.link?.link_text} color={color} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesSection
