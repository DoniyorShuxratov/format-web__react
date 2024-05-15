import { useState } from 'react';
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

export function Navbar() {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link); 
    };

    return (
        <>
            <div className="header">
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#heroSection" className={`header__nav-link ${activeLink === 'home' ? 'def-box' : ''}`} onClick={() => handleClick('home')}>
                                <AiFillHome size={25}/>
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#aboutSection" className={`header__nav-link ${activeLink === 'info' ? 'def-box' : ''}`} onClick={() => handleClick('info')}>
                                <RiInformationFill size={25}/>
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#productSection" className={`header__nav-link ${activeLink === 'heart' ? 'def-box' : ''}`} onClick={() => handleClick('heart')}>
                                <FaBagShopping size={25}/>
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#exportSection" className={`header__nav-link ${activeLink === 'user' ? 'def-box' : ''}`} onClick={() => handleClick('user')}>
                                <FaUser size={25}/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


            {/* PC navbar */}

            <div className="header-pc">
                <nav className='navbar-pc'>
                    <div className="navbar-pc__logo">
                        <a href="#">format</a>
                    </div>
                    <ul className="navbar-pc__list">
                        <li><a href="#">Biz haqimizda</a></li>
                        <li><a href="#">Produktlar</a></li>
                        <li><a href="#">Expertlar</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
