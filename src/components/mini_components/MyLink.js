import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyLink = ({ link, text }) => {
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
                className={`option-link pb-2 ${isAnimated && 'option-link-animate'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {text} <i class="fa-solid fa-arrow-right option-link-icon" />
            </Link>
        </>
    )
}

export default MyLink
