import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import svgIcon from '../../images/option-link-icon.svg';

const MyLink = ({ link, text, color }) => {
    const [isAnimated, setAnimated] = useState(false);

    const handleMouseEnter = () => setAnimated(true);
    const handleMouseLeave = () => setAnimated(false);

    const commonProps = {
        className: `button blue_btn text-uppercase ${isAnimated ? 'option-link-animate' : ''} ${color ? color : ''}`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
    };

    return link?.startsWith('/') ? (
        <Link to={link} {...commonProps}>
            <span>{text} <i><img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Vector_10_a0cd67dfb4.svg' alt="" /></i></span>
        </Link>
    ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" {...commonProps}>
            <span>{text} <i><img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Vector_10_a0cd67dfb4.svg' alt="" /></i></span>
        </a>
    );
};

export default MyLink;
