import React, { useEffect } from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import MailchimpForm from './MailchimpForm';

export const Accordion = ({ data, color, greyy, isHtml, border }) => {
    const isHtml2 = (str) => {
        const doc = new DOMParser().parseFromString(str, "text/html");
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    };

    useEffect(() => {
            const contentBoxes = document.querySelectorAll(".card-body"); // Select all content-box divs
            contentBoxes.forEach(contentBox => {
                const links = contentBox.querySelectorAll("a");
                links.forEach(link => {
                    const href = link.getAttribute("href");
                    if(href?.startsWith("http")){
                        link.setAttribute("target", "_blank");
                        link.setAttribute("rel", "noopener noreferrer"); // Security best practice
                    }
                });
            });
        }, [data]);

    return (
        <div className={`accordion_wrapper ${color}`}>
            <div className={`accordion ${greyy === true ? 'greyy' : ''}`} id="accordion" role='tablist' aria-multiselectable='true'>
                {data?.map((item, index) => (
                    <div className={`${border ? 'border-0' : ''} card mb-3`} key={item?.id}>
                        <div className="card-header">
                            <a className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item?.id}`} aria-expanded="false" aria-controls={`collapse${item?.id}`}>
                                {item?.Titel}
                            </a>
                        </div>
                        <div id={`collapse${item?.id}`} className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">

                                {item?.Beschreibung && <BlocksRenderer content={item?.Beschreibung} />}
                                {item?.aktivieren_newsletter && <MailchimpForm color={color} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
