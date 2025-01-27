import React from 'react';
import homeMenuImg from '../../images/home_menu_img.png'
import { Link } from 'react-router-dom';

const HomeMenu = () => {
  return (
      <div className="container">
        <div className="row justify-content-between">
            <div className="col-5 d-flex flex-column">
                <div className='menu_links'>
                    <ul className='list-out'>
                        <li className='list-items border-0'>
                            <Link>
                                <h5 className='mb-0'>Übersicht Apotheke</h5>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Link>
                                <h5 className='mb-0'>Termin buchen Apotheke</h5>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Link>
                                <h5 className='mb-0'>Team</h5>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Link>
                                <h5 className='mb-0'>Notfall</h5>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Link>
                                <h5 className='mb-0'>Angebote</h5>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Link>
                                <h5 className='mb-0'>Öffnungszeiten und Kontakt</h5>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className='home_menu_btn'>Übersicht Apotheke <i class="fa-solid fa-arrow-right"/></Link>
                </div>
                
            </div>
            <div className="col-5 home_menu_image">
                <img src={homeMenuImg} alt="" />
            </div>
        </div>
      </div>
  )
}

export default HomeMenu
