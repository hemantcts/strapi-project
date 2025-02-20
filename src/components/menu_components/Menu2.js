import React from 'react';
import MenuImg from '../../images/menu_img2.png'
import { Link } from 'react-router-dom';
import svgIcon from '../../images/link_icon.svg'

const Menu2 = () => {
  return (
    <div className="megamenu-content withoutdesc">
    <div className="row justify-content-between">
        <div className="col-lg-6">
            <div className='menu_links'>
                <ul className='submenu_list'>
                        <li className='list-items border-0'>
                            <Link to='/ubersicht-praxis' >Übersicht Praxis</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/terminbuchung-praxis'>Termin buchen Praxis</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/praxis-team'>TEAM PRAXIS</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/praxis-notfall'>Notfall</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/dienstleistungen-praxis'>Dienstleistungen Praxis</Link>
                        </li>
                        <li className='list-items'>
                            <Link to='/kontakt'>Öffnungszeiten und Kontakt</Link>
                        </li>
                        <li className='list-items'>
                            <Link className='termin_praxis'>Termin Praxis buchen <i><img src={svgIcon} alt=""/></i> </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <img src={MenuImg}  className="w-100" alt="" />
            </div>
        </div>
      </div>
  )
}

export default Menu2
