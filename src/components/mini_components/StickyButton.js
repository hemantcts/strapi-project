import React from "react";
import { Link } from "react-router-dom";

export const StickyButton = ({ btntext, color, btnLink }) => {
    return (
        <div className={`stick_btn_wrap ${color}`}>
            <Link to={btnLink}>{btntext}</Link>
        </div>
    )
}