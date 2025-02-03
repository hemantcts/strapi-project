import React from 'react'
import { Link } from 'react-router-dom'
import MenuImg from '../../images/menu_img3.png'
import svgIcon from '../../images/link_icon.svg'

const Menu3 = () => {
  return (
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-5 d-flex flex-column">
                <div className='menu_links'>
                    <ul className='list-out'>
                        <li className='list-items border-0'>
                            <Link>
                                <h5 className='mb-0'>Übersicht Ernährungsdiagnostik</h5>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Link>
                                <h5 className='mb-0'>Angebote</h5>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className='menu_btn1'>Termin buchen Beratung <i><img src={svgIcon} alt="" style={{width: "19px"}}/></i></Link>
                </div>
                
            </div>
            <div className="col-5 menu_image1">
                <img src={MenuImg} alt="" />
            </div>
        </div>
      </div>
  )
}

export default Menu3
