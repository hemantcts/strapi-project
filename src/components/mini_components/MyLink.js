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
                className={`option-link pb-2 ${isAnimated && 'option-link-animate'} ${color}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {text} <i><img src={svgIcon} alt="" style={{width: "19px", position: "relative", top: "-2px"}}/></i> 
            </Link>
        </>
    )
}

export default MyLink
