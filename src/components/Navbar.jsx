import { useState } from 'react';
import HomeIcon from '../../public/Icons/home';
import HeartIcon from '../../public/Icons/heart';
import PlayerPlayIcon from '../../public/Icons/player_play';
import UserIcon from '../../public/Icons/user';

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
                            <a href="#heroSection" className={`header__nav-link ${activeLink === 'home' ? 'active-nav' : ''}`} onClick={() => handleClick('home')}>
                                <HomeIcon size={25} />
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#aboutSection" className={`header__nav-link ${activeLink === 'info' ? 'active-nav' : ''}`} onClick={() => handleClick('info')}>
                                <HeartIcon size={25}/>
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#productSection" className={`header__nav-link ${activeLink === 'heart' ? 'active-nav' : ''}`} onClick={() => handleClick('heart')}>
                                <PlayerPlayIcon size={25}/>
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#exportSection" className={`header__nav-link ${activeLink === 'user' ? 'active-nav' : ''}`} onClick={() => handleClick('user')}>
                                <UserIcon size={25}/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


            {/* PC navbar */}

            <div className="header-pc">
                <nav className='navbar-pc'>
                    <div className=" ">
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
