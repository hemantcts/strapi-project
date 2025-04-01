import React from 'react'
import iconImg from '../../images/breadcrumb-icon.svg'
import { Link } from 'react-router-dom';

export const MyButton = ({ activePage, buttonText, color }) => {

    // const formatText = (text) => {
    //     return text?.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()); 
    // };

    // const formatText = (text) => {
    //     return text?.toLowerCase().replace(/(^|\s)(\p{L})/gu, (match, space, letter) => {
    //         return match.trim() === "und" ? match : space + letter.toUpperCase();
    //     });
    // };

    // const formatText = (text) => {
    //     return text?.toLowerCase().replace(/(^|[\s-])(\p{L}+)/gu, (match, space, word) => {
    //         return word === "und" ? match : space + word.charAt(0).toUpperCase() + word.slice(1);
    //     });
    // };

    const formatText = (text) => {
        return text?.replace(/(^|[\s-])(\p{L}+)/gu, (match, separator, word) => {
            return word === "und" ? match : separator + (word.charAt(0) === word.charAt(0).toUpperCase() ? word : word.charAt(0).toUpperCase() + word.slice(1));
        });
    };

    const linkGoTo = (page)=>{
        console.log(page);
        let url = '';
        switch (page){
            case 'Apotheke':
                url = '/ubersicht-apotheke';
                break
            case 'Praxis':
                url = '/ubersicht-praxis';
                break
            case 'Ernährungsdiagnostik':
                url = '/ernahrungsdiagnostik';
                break
            case 'Gesundheitsthemen':
                url = '/ubersicht-gesundheitsthemen';
                break
        }
        
        return url;

    }
    

    return (
        <div className="container-xxl">
            <div className='all_sec_button'>
                <span className='icon-img me-2'><img src={iconImg} alt="" /></span>
                <span className={`${color ? 'green' : 'blue'}-heading`}><Link to={linkGoTo(activePage)}>{activePage && `${formatText(activePage)} | `}</Link></span> &nbsp;{formatText(buttonText)}
            </div>
        </div>
    )
}
