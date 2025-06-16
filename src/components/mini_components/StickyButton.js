import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const StickyButton = ({ btntext, color, btnLink }) => {
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const alwaysHidePaths = [
        '/terminbuchung-apotheke',
        '/terminbuchung-praxis',
    ];

    const smallScreenHidePaths = [
        '/impressum',
        '/datenschutz',
        '/jobs',
    ];

    // Listen for window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Determine if we should hide
    const isHidden =
        alwaysHidePaths.includes(location.pathname) ||
        (windowWidth < 576 && smallScreenHidePaths.includes(location.pathname));

    // Adjust body padding
    useEffect(() => {
        if (isHidden) {
            document.body.style.paddingBottom = '0px';
        } 
        if(!isHidden && windowWidth < 576) {
            document.body.style.paddingBottom = '35px'; // Adjust height if needed
        }

        return () => {
            document.body.style.paddingBottom = '0px';
        };
    }, [isHidden, windowWidth]);

    if (isHidden) return null;

    return (
        <div className={`stick_btn_wrap ${color}`}>
            <Link to={btnLink}>{btntext}</Link>
        </div>
    );
};
