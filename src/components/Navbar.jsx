import { useState } from 'react';
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";

export function Navbar() {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link); 
    };

    return (
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
                        <a href="#" className={`header__nav-link ${activeLink === 'heart' ? 'def-box' : ''}`} onClick={() => handleClick('heart')}>
                            <AiFillHeart size={25}/>
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className={`header__nav-link ${activeLink === 'user' ? 'def-box' : ''}`} onClick={() => handleClick('user')}>
                            <FaUser size={25}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
