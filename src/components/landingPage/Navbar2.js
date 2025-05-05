import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../images/logo.svg'
import burgermenu from '../../images/burger-menu.svg'
import closemenu from '../../images/close-icon.svg'
// import loewenmutlogo from '../images/loewenmut-logo.svg'
// import HomeMenu from './menu_components/HomeMenu';
// import Menu2 from './menu_components/Menu2';
// import copyrightImg from '../images/copyright_img.png'
// import icon from '../images/accordion-icon.svg'
// import Menu3 from './menu_components/Menu3';

const Navbar2 = ({ activeLink }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState({ link1: false, link2: false, link3: false, link4: false, link5: false, link6: false })
    const [hover, setHover] = useState({ link1: false, link2: false, link3: false, link4: false, link5: false, link6: false })
    // const [isClicked, setClicked ] = useState(false);
    // const [pageData, setPageData] = useState([]);

    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHoverEnabled, setIsHoverEnabled] = useState(window.innerWidth >= 992);
    const [searchKeyword, setSearchKeyword] = useState('');
    // const [matchedKeys, setMatchedKeys] = useState([]);


    const handleChange = (e) => {
        
        setSearchKeyword(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        if(searchKeyword === ''){
            return;
        }
        e.preventDefault();
        navigate(`/search-result?s=${searchKeyword}`);
    };



    useEffect(() => {
        const handleResize = () => {
            setIsHoverEnabled(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        if (!isHoverEnabled) {
            setMenuOpen(!menuOpen);
            document.body.classList.toggle('body_overflow', !menuOpen);
        }
    };

    const handleActive = (link) => {
        if (!isHoverEnabled) {
            setActive((prev) => ({ ...prev, [`link${link}`]: !prev[`link${link}`] }));
        }
    };

    const handleMouseEnter = (link) => {
        if (isHoverEnabled) {
            setHover((prev) => ({ ...prev, [`link${link}`]: true }));
        }
    };

    const handleMouseLeave = (link) => {
        if (isHoverEnabled) {
            setTimeout(() => {
                setHover((prev) => ({ ...prev, [`link${link}`]: false }));
            }, 100);
        }
    };

    useEffect(() => {
        if (activeLink) {
            console.log(activeLink);
            setActive(activeLink);
        }
    }, [activeLink])

    return (
        <div>
            <header>
                <nav className={`navbar navbar-expand-lg ${sticky ? 'sticky' : ''}`}>
                    <div className={`nav_overlay ${menuOpen ? 'show' : ''}`}></div>
                    <div className='container-xxl justify-content-center justify-content-lg-start'>
                        {/* <Link className='navbar-brand' to='/'><img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Frame_8cd1fd56fd.svg' alt='logo' /></Link> */}
                        <Link className='navbar-brand' to='/'><img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Medzentrum_logo_2_4f77ba4953.svg' alt='logo' /></Link>
                        {/* <button className='navbar-toggler' onClick={toggleMenu} type='button' data-bs-target='#mainNavbar' aria-expanded='false'>
                            <img src={burgermenu} alt='menu' />
                        </button> */}
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id='mainNavbar'>
                            <div className='open--menu--header'>
                                <Link to='/'>
                                    <img src='https://medzentrum.entwicklung-loewenmut.ch/uploads/Medzentrum_logo_2_4f77ba4953.svg' alt='menu' className='open-menu-logo' />
                                </Link>
                                <img src={closemenu} alt='menu' className='close_navbtn' onClick={toggleMenu} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar2
