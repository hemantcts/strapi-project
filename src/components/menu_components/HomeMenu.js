import React from 'react';
import homeMenuImg from '../../images/home_menu_img.png'
import { Link } from 'react-router-dom';
import svgIcon from '../../images/link_icon.svg'

const HomeMenu = () => {
  return (
      <div className="megamenu-content withoutdesc">
        <div className="row justify-content-between">
            <div className="col-lg-6">
                <div className='menu_links'>
                    <ul className='submenu_list'>
                        <li>
                            <Link to='/ubersicht-apotheke'>Übersicht Apotheke</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/terminbuchung-apotheke'>Termin buchen </Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/apotheke-team'>Team Apotheke</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/apotheke-notfall'>Notfall</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/dienstleistungen-apotheke'>Dienstleistungen Apotheke</Link>
                        </li>
                        {/* <li className='list-items'>
                            <Link >Öffnungszeiten und Kontakt</Link>
                        </li> */}
                        <li className='list-items'>
                            <Link to='/' className='termin_aproke'>Termin Apotheke buchen <i><img src={svgIcon} alt=""/></i> </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <img src={homeMenuImg} className="w-100" alt="" />
            </div>
        </div>
      </div>
  )
}

export default HomeMenu
