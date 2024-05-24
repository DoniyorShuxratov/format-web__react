import React, { useState } from 'react';
import ArrowBottomCircle from '../../public/Icons/arrow_up_circle';
import ArrowTopCircle from '../../public/Icons/arrow_down_circle';
import { motion as m } from "framer-motion";
import { UseInViewAnimation } from './Animation';

export function Packages() {
    const { ref, mainControl } = UseInViewAnimation();
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownVisible(dropdownVisible === index ? null : index);
    };

    return (
        <>
            <section className="packages-section">
                <div className="packages-container container">
                    <div className="packages-content" ref={ref}>
                        <m.div
                        
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial='hidden'
                        animate={mainControl}
                        transition={{   
                            duration: 0.7,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        
                        className="packages-title">
                            <h2>Paketlar</h2>
                        </m.div>
                        <m.div
                        
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial='hidden'
                        animate={mainControl}
                        transition={{   
                            duration: 0.8,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        
                        className="packages-list">
                            {/* Card 1 */}
                            <div className="packages-list__card">
                                <div className="package-card__1 def-box" onMouseEnter={() => toggleDropdown(1)}>
                                    <div className="package-card__title">
                                        <h3>Boshlang‘ich</h3>
                                    </div>
                                    <div className="package-card__img">
                                        <img src="./Images/hr.png" alt="" srcSet="" />
                                    </div>
                                    <div className="package-card__active" >
                                        <h3>13.5M so'm</h3>
                                        {dropdownVisible === 1 ? <ArrowBottomCircle /> : <ArrowTopCircle />}
                                    </div>
                                    <div className={`package-card__list ${dropdownVisible === 1 ? 'open' : ''}`}>
                                        <p>- 68 ta dars ssenariyasi;</p>
                                        <p>- 68 ta dars uchun taqdimot;</p>
                                        <p>- Topshiriqlar va uy vazifalari;</p>
                                        <p>- Tarqatma materiallar.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="packages-list__card">
                                <div className="package-card__2 def-box" onMouseEnter={() => toggleDropdown(2)}>
                                    <div className="package-card__title">
                                        <h3>Standard</h3>
                                    </div>
                                    <div className="package-card__img">
                                        <img src="./Images/hr.png" alt="" srcSet="" />
                                    </div>
                                    <div className="package-card__active" >
                                        <h3>20M so'm</h3>
                                        {dropdownVisible === 2 ? <ArrowBottomCircle /> : <ArrowTopCircle />}
                                    </div>
                                    <div className={`package-card__list ${dropdownVisible === 2 ? 'open' : ''}`}>
                                        <p>- 68 ta dars ssenariyasi;</p>
                                        <p>- 68 ta dars uchun taqdimot;</p>
                                        <p>- Topshiriqlar va uy vazifalari;</p>
                                        <p>- Tarqatma materiallar;</p>
                                        <p>- Dasturni joriy etishda texnik koʻmak;</p>
                                        <p>- Videolar;</p>
                                        <p>- 5 nafargacha oʻqituvchi bilan test sinovi;</p>
                                        <p>- Oʻqituvchilar uchun individual rivojlanish  rejasi.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="packages-list__card">
                                <div className="package-card__3 def-box" onMouseEnter={() => toggleDropdown(3)}>
                                    <div className="package-card__title">
                                        <h3>Premium</h3>
                                    </div>
                                    <div className="package-card__img">
                                        <img src="./Images/hr.png" alt="" srcSet="" />
                                    </div>
                                    <div className="package-card__active" >
                                        <h3>30M so'm</h3>
                                        {dropdownVisible === 3 ? <ArrowBottomCircle /> : <ArrowTopCircle />}
                                    </div>
                                    <div className={`package-card__list ${dropdownVisible === 3 ? 'open' : ''}`}>
                                        <p>- 68 ta dars ssenariyasi;</p>
                                        <p>- 68 ta dars uchun taqdimot;</p>
                                        <p>- Topshiriqlar va uy vazifalari;</p>
                                        <p>- Tarqatma materiallar;</p>
                                        <p>- Dasturni joriy etishda texnik koʻmak;</p>
                                        <p>- Videolar;</p>
                                        <p>- 5 nafargacha oʻqituvchi bilan test sinovi;</p>
                                        <p>- Oʻqituvchilar uchun individual rivojlanish  rejasi;</p>
                                        <p>- 10 tagacha darsni talabga koʻra  moslashtirib berish;</p>
                                        <p>- 9 oy davomida oʻqituvchilarga yordam  koʻrsatish, treninglar tashkillashtirish.</p>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </section>
        </>
    );
}
