import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ImpressumKontakt = ({ contactData, color }) => {
    const getHref = (details) => {
        if (!details) return { href: '', target: '' };

        const trimmed = details.trim();

        // Phone number regex
        const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
        if (phoneRegex.test(trimmed)) {
            return { href: `tel:${trimmed.replace(/\s/g, '')}`, target: '' };
        }

        // Email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(trimmed)) {
            return { href: `mailto:${trimmed}`, target: '' };
        }

        // URL regex
        const urlRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/i;
        if (urlRegex.test(trimmed)) {
            return { href: trimmed, target: '_blank' };
        }

        // Check for domain-like strings (e.g. medzentrum.ch or www.loewenmut.ch)
        const domainLikeRegex = /^[^\s]+\.[^\s]+$/;
        if (domainLikeRegex.test(trimmed)) {
            return { href: `https://${trimmed}`, target: '_blank' };
        }

        return { href: '', target: '' }; // No match
    };

    const formatAddress = (address) => {
        return address?.split(',').map((part, index) => (
            <React.Fragment key={index}>
                {part.trim()}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className='row imp_address_row'>
            {contactData?.map((contact, index) => (
                <div key={index} className='col-lg-6 imp_itm'>
                    <div className='imp_shadow'>
                        <h3 className='font-volk mb-4'>{contact?.Titel}</h3>
                        <ul>
                            {contact?.Details?.map((innerDetails, idx) => {
                                const { href, target } = getHref(innerDetails?.Details);

                                return (
                                    <li key={idx} >
                                        {innerDetails?.icon?.url && (
                                            <img
                                                src={`https://medzentrum.entwicklung-loewenmut.ch${innerDetails.icon.url}`}
                                                alt=''
                                            />
                                        )}
                                        {href ? (
                                            <a
                                                href={href}
                                                target={target}
                                                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                                            >
                                                {innerDetails?.Details}
                                            </a>
                                        ) : (
                                            <span>{formatAddress(innerDetails?.Details)}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
