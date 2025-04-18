import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuImg from '../../images/menu_img3.png';
import svgIcon from '../../images/link_icon.svg';

const Menu3 = ({toggleMenu}) => {
  const location = useLocation();

  return (
    <div className="megamenu-content withoutdesc">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div className="menu_links">
            <ul className="submenu_list">
              <li className={location.pathname === '/uebersicht-ernahrungsdiagnostik' ? 'active' : 'list-items border-0'}>
                <Link onClick={toggleMenu} to="/uebersicht-ernahrungsdiagnostik">Übersicht Ernährungsdiagnostik</Link>
              </li>
              <li className={location.pathname === '/angebot' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/angebot">Angebote</Link>
              </li>
              <li className={location.pathname === '/terminbuchung-beratung' ? 'active' : 'list-items'}>
                <Link onClick={toggleMenu} to="/terminbuchung-beratung" className="termin_praxis">
                  Termin buchen Beratung <i><img src={svgIcon} alt="" /></i>
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

export default Menu3;
