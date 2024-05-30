import React, { useState, useRef } from 'react';
import { UseInViewAnimation } from './Animation';
import { motion as m } from "framer-motion";
import ArrowLeft2 from '../../public/Icons/arrow_left_2';
import ArrowRight2 from '../../public/Icons/arrow_right_2';
import VolumeOff from '../../public/Icons/volume_off';
import VolumeUp from '../../public/Icons/volume_up';

const productData = [
    {
        id: 1,
        category: 'Taqdimotlar',
        title: 'Mavzu: Microsoft Office Word',
        type: '5-sinf',
        slides: Array(13).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide_${index + 1}.png?updatedAt=1716441977282`)
    },
    {
        id: 2,
        category: 'Taqdimotlar',
        title: 'Mavzu: MS Excel. Formula bilan tanishish',
        type: '5-sinf',
        slides: Array(9).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide2_${index + 1}.png?updatedAt=1716441977282`)
    },
    {
        id: 3,
        category: 'Taqdimotlar',
        title: 'Mavzu: Google Akkaunt yaratish',
        type: '1-sinf',
        slides: Array(13).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide3_${index + 1}.png?updatedAt=1716441977282`)
    },
    {
        id: 4,
        category: 'Taqdimotlar',
        title: 'Mavzu: Parolllar xaqida',
        type: '1-sinf',
        slides: Array(10).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide4_${index + 1}.png?updatedAt=1716441977282`)
    },
    {
        id: 5,
        category: 'Videolar',
        title: 'Mavzu: Parol qo\'yish',
        slides: Array(1).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Video/password.mp4?updatedAt=1716705733405`)
    },
    {
        id: 6,
        category: 'Videolar',
        title: 'Mavzu: Akkaunt nima?',
        slides: Array(1).fill('').map((_, index) => `https://ik.imagekit.io/yr7ebaock/Video/What%20is%20an%20account.mp4?updatedAt=1716887155647`)
    },
    {
        id: 7,
        category: 'Tarqatma materiallar',
        title: 'Mavzu: Akkaunt nima?',
        slides: Array(3).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_mt5_${index + 1}.png?updatedAt=1716887155647`)
    },
    {
        id: 8,
        category: 'Tarqatma materiallar',
        title: 'Mavzu: Ishonchli Parollar',
        slides: Array(2).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_mt6_${index + 1}.png?updatedAt=1716887155647`)
    },
    {
        id: 9,
        category: 'Ssenariylar',
        title: 'Mavzu: Akkaunt nima?',
        slides: Array(2).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_sc_${index + 1}.png?updatedAt=1716887155647`)
    },
    {
        id: 10,
        category: 'Ssenariylar',
        title: 'Mavzu: Ishonchli Parollar?',
        slides: Array(2).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_sc1_${index + 1}.png?updatedAt=1716887155647`)
    }
];

export function Products(){
    const { ref, mainControl } = UseInViewAnimation();
    const [selectedCategory, setSelectedCategory] = useState('Taqdimotlar');
    const cardRefs = productData.map(() => useRef());
    const cardMutedStates = productData.map(() => useState(true));

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
    };

    function scrollHorizontally(direction, index) {
        const container = cardRefs[index].current.querySelector('.product-card__top');
    
        if (direction === 'left') {
            container.scrollLeft -= 550; 
        } else if (direction === 'right') {
            container.scrollLeft += 550; 
        }
    }

    const filteredProducts = selectedCategory === 'All'
        ? productData
        : productData.filter(product => product.category === selectedCategory);

    return (
        <section className="product-section">
            <div className="product-container container" ref={ref}>
                <div className="product-content">
                    <m.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visable: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate={mainControl}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="product-title">
                        <h2 id="productSection">Produktlar</h2>
                    </m.div>
                    <m.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visable: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate={mainControl}
                        transition={{
                            duration: 0.8,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="product-filter">
                        <div className="product-filter__list">
                            {['Taqdimotlar', 'Videolar', 'Tarqatma materiallar', 'Ssenariylar'].map(category => (
                                <button
                                    key={category}
                                    className={`btn btn-secondary product-filter__list--item ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </m.div>
                    <m.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visable: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate={mainControl}
                        transition={{
                            duration: 0.7,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="product-cards">

                        {filteredProducts.map((product, index) => (
                            <div className="product-card def-box" key={product.id}>
                                {selectedCategory === 'Videolar' ? (
                                    <div className="product-card__video">
                                        {product.slides.map((slide, slideIndex) => (
                                            <video key={slideIndex} className='img' autoPlay loop muted={cardMutedStates[index][0]} ref={cardRefs[index]}>
                                                <source src={slide} type='video/mp4' />
                                                Your browser does not support the video tag.
                                            </video>
                                        ))}
                                        <div className="product-card__video--btn">
                                            <button className='btn-ctrl' onClick={() => {
                                                const [, setMuted] = cardMutedStates[index]; 
                                                setMuted(prevMuted => !prevMuted);
                                            }}>
                                                {cardMutedStates[index][0] ? <VolumeUp /> : <VolumeOff />}
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="product-card__carousel" ref={cardRefs[index]}>
                                        <div className="product-card__top">
                                            {product.slides.map((slide, slideIndex) => (
                                                <img key={slideIndex} className='img' src={slide} alt={`Slide ${slideIndex + 1}`} />
                                            ))}
                                        </div>
                                        <div className="product-card__carousel--control">
                                            <div className="product-card__carousel--grade">
                                                <h3>{product.type}</h3>
                                            </div>
                                            <div className="product-card__carousel--btn">
                                                <button className='btn-ctrl' onClick={() => scrollHorizontally('left', index)}><ArrowLeft2 /></button>
                                                <button className='btn-ctrl' onClick={() => scrollHorizontally('right', index)}><ArrowRight2 /></button>
                                            </div>
                                           
                                        </div>
                                    </div>
                                )}
                                <div className="product-card__content">
                                    <div className="product-card__content--txt">
                                        <h2>{product.title}</h2>
                                        <div className="product-card__content--btns">
                                            <p>Slayd: <span>{product.slides.length}</span></p>
                                            <button onClick={() => window.location.href = 'https://t.me/format_demo'}>Ko'rish (demo)</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    );
};
