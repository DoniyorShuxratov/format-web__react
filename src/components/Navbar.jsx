import { useState } from 'react';
import HomeIcon from '../../public/Icons/home';
import HeartIcon from '../../public/Icons/heart';
import PlayerPlayIcon from '../../public/Icons/player_play';
import UserIcon from '../../public/Icons/user';
import { useInView, motion as m, useAnimation } from "framer-motion";
export function Navbar() {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link); 
    };

    return (
        <>
            <m.div 
            
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 1, y: 0},
            }}
            initial='hidden'
            animate='visible'
            transition={{duration: .2, delay: .5, ease: 'easeOut'}}

            className="header">
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
            </m.div>


            {/* PC navbar */}

            <m.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 1, y: 0},
            }}
            initial='hidden'
            animate='visible'
            transition={{duration: .2, delay: .5, ease: 'easeOut'}}
            className="header-pc">
                <nav className='navbar-pc__container'>
                    <ul className="navbar-pc__list">
                        <li className='navbar-pc__item--logo'><a className='navbar-pc__item--link' href="#heroSection">format</a></li>
                        <li className='navbar-pc__item'><a className='navbar-pc__item--link' href="#aboutSection">Biz haqimizda</a></li>
                        <li className='navbar-pc__item'><a className='navbar-pc__item--link' href="#productSection">Produktlar</a></li>
                        <li className='navbar-pc__item'><a className='navbar-pc__item--link' href="#packagesSection">Paketlar</a></li>
                    </ul>
                </nav>
            </m.div>
        </>
    );
}
