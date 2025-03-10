import React from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Accordion = ({ data, color, greyy, isHtml }) => {
    const isHtml2 = (str) => {
        const doc = new DOMParser().parseFromString(str, "text/html");
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    };

    return (
        <div className={`accordion_wrapper ${color}`}>
            <div className={`accordion ${greyy === true ? 'greyy' : ''}`} id="accordion" role='tablist' aria-multiselectable='true'>
                {data?.map((item, index) => (
                    <div className="card mb-3" key={item?.id}>
                        <div className="card-header">
                            <a className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item?.id}`} aria-expanded="false" aria-controls={`collapse${item?.id}`}>
                                {item?.title}
                            </a>
                        </div>
                        <div id={`collapse${item?.id}`} className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">
                                {/* {!isHtml2(item?.description) ? (
                                    <p>{item?.description}</p>
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                                )} */}

                                {item?.description && <BlocksRenderer content={item?.description} 
                                    // blocks={{
                                    //     paragraph: ({ children }) => (
                                    //         <small>
                                    //             {children}
                                    //         </small>
                                    //     ),
                                    // }} 
                                />}



                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
