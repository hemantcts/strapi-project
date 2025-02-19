import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import svgIcon from '../../images/option-link-icon.svg'

const MyLink = ({ link, text, color }) => {
    const [isAnimated, setAnimated] = useState(false);

    const handleMouseEnter = () => {
        setAnimated(true);
    }

    const handleMouseLeave = () => {
        setAnimated(false);
    }

    return (
        <>
            <Link
                to={link}
                className={`button blue_btn text-uppercase ${isAnimated ? 'option-link-animate' : ''} ${color? color : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>{text} <i><img src={svgIcon} alt=""/></i> </span>
            </Link>
        </>
    )
}

export default MyLink
