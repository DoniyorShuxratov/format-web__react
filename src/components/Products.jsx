import React, { useState } from 'react';
import { UseInViewAnimation } from './Animation';
import { motion as m } from "framer-motion";

const productData = [
    {
        id: 1,
        category: 'Taqdimotlar',
        imgSrc: './Images/hr.png',
        title: 'Mavzu: Microsoft Office Word',
        slides: 14
    },
    {
        id: 2,
        category: 'Taqdimotlar',
        imgSrc: './Images/hr_1.png',
        title: 'Mavzu: Klaviatura bilan ishlash',
        slides: 12
    },
    {
        id: 3,
        category: 'Videolar',
        imgSrc: './Images/hr_2.png',
        title: 'Mavzu: Video Editing',
        slides: 8
    }

];

export function Products() {
    const { ref, mainControl } = UseInViewAnimation();
    const [selectedCategory, setSelectedCategory] = useState('Taqdimotlar');

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
    };

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
                        delay: 0.7,
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
                        duration: 0.7,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}

                    className="product-filter">
                        <div className="product-filter__list">
                            {['Taqdimotlar', 'Videolar', 'Tarqatma materiallar', 'Scenariylar'].map(category => (
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
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}

                    className="product-cards">
                        {filteredProducts.map(product => (
                            <div className="product-card def-box" key={product.id}>
                                <div className="product-card__top">
                                    <img src={product.imgSrc} alt={product.title} />
                                </div>
                                <div className="product-card__content">
                                    <h2>{product.title}</h2>
                                    <div className="product-card__content--btns">
                                        <p>Slayd: <span>{product.slides}</span></p>
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
}
