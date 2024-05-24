import React, { useState, useRef } from 'react';
import { UseInViewAnimation } from './Animation';
import { motion as m } from "framer-motion";
import ArrowLeft2 from '../../public/Icons/arrow_left_2';
import ArrowRight2 from '../../public/Icons/arrow_right_2';

const productData = [
    {
        id: 1,
        category: 'Taqdimotlar',
        imgSrc: './Images/hr.png',
        title: 'Mavzu: Microsoft Office Word',
        slides: Array(13).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide_${index + 1}.png?updatedAt=1716441977282`)
    },
    {
        id: 2,
        category: 'Taqdimotlar',
        imgSrc: './Images/hr_1.png',
        title: 'Mavzu: Klaviatura bilan ishlash',
        slides: Array(13).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide_${index + 1}.png?updatedAt=1716441977282`)
    },
    {
        id: 3,
        category: 'Videolar',
        imgSrc: './Images/hr_2.png',
        title: 'Mavzu: Video Editing',
        slides: Array(13).fill('').map((_, index) => `https://ik.imagekit.io/imagesOptimaization/Images/Format/hr_slide_${index + 1}.png?updatedAt=1716441977282`)
    }
];

export function Products(){
    const { ref, mainControl } = UseInViewAnimation();
    const [selectedCategory, setSelectedCategory] = useState('Taqdimotlar');
    const cardRefs = productData.map(() => useRef());

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
        <section id="productSection" className="product-section">
            <div className="product-container container" ref={ref}>
                <div className="product-content">
                    <m.div 
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial='hidden'
                        animate={mainControl}
                        transition={{   
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="product-title">
                        <h2>Produktlar</h2>
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
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
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
                                <m.div  className="product-card__carousel" ref={cardRefs[index]}>
                                    <m.div className="product-card__top">
                                        {product.slides.map((slide, index) => (
                                            <m.img className='img' key={index} src={slide} alt={`Slide ${index + 1}`} />
                                        ))}
                                    </m.div>
                                    <div className="product-card__carousel--control">
                                        <button className='btn-ctrl' onClick={() => scrollHorizontally('left', index)}><ArrowLeft2/></button>
                                        <button className='btn-ctrl' onClick={() => scrollHorizontally('right', index)}><ArrowRight2/></button>
                                    </div>
                                </m.div>
                                <div className="product-card__content">
                                    <h2>{product.title}</h2>
                                    <div className="product-card__content--btns">
                                        <p>Slayd: <span>{product.slides.length}</span></p>
                                        <button>Ko'rish (demo)</button>
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
