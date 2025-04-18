import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuImg from '../../images/menu_img2.png';
import svgIcon from '../../images/link_icon.svg';

const Menu2 = ({toggleMenu}) => {
  const location = useLocation();

  return (
    <div className="megamenu-content withoutdesc">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div className="menu_links">
            <ul className="submenu_list">
              <li className={location.pathname === '/uebersicht-praxis' ? 'active' : 'list-items border-0'}>
                <Link onClick={toggleMenu} to="/uebersicht-praxis">Übersicht Praxis</Link>
              </li>
              <li className={location.pathname === '/terminbuchung-praxis' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/terminbuchung-praxis">Termin buchen Praxis</Link>
              </li>
              <li className={location.pathname === '/praxis-team' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/praxis-team">TEAM PRAXIS</Link>
              </li>
              <li className={location.pathname === '/praxis-notfall' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/praxis-notfall">Notfall</Link>
              </li>
              <li className={location.pathname === '/dienstleistungen-praxis' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/dienstleistungen-praxis">Dienstleistungen Praxis</Link>
              </li>
              <li className={location.pathname === '/kontakt' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/kontakt">Öffnungszeiten und Kontakt</Link>
              </li>
              <li className={location.pathname === '/terminbuchung-praxis' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/terminbuchung-praxis" className="termin_praxis">
                  Termin Praxis buchen <i><img src={svgIcon} alt="" /></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img src={MenuImg} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu2;
