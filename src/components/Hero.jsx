
import ArrowTopRight from '../../public/Icons/arrow_top_right';
import Edit from '../../public/Icons/edit';
import Star_1 from '../../public/Pattern/star_1';
import Star_2 from '../../public/Pattern/star_2';
import Vector_3 from '../../public/Pattern/vector_3';
import { UseInViewAnimation } from './Animation';
import { motion as m } from "framer-motion";

export function Hero() {
    const { ref, mainControl } = UseInViewAnimation();
    
    return (
        <>  
            <section id='heroSection' className="hero">
                <div className="hero-container container">
                    <div className="hero-content">
                        <m.div

                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        
                        className="hero-content__active">
                            <div className="hero-content__active--toptext">
                                <Star_1/>
                                <p>Boshlangʻich sinflar uchun</p>
                                <Star_1/>
                            </div>
                            <div className="hero-content__active--maintext">
                                <h1>AT savodxonlik oʻquv dasturi</h1>
                            </div>
                            <div className="hero-content__active--btn">
                                <button onClick={() => window.location.href = 'https://t.me/format_demo'} className='btn btn-primary'><ArrowTopRight/> Darslikni ko‘rish</button>
                            </div>
                        </m.div>
                        <div className="hero-content__img">
                            <m.div 
                            
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                            duration: 0.7,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                            }}

                            className="hero-content__img--1">
                                <Star_2/>
                            </m.div>
                            <m.div
                            
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                            duration: 0.7,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01]
                            }}
                        

                            className="hero-content__img--2">
                                <img src="https://ik.imagekit.io/imagesOptimaization/Images/Format/web-hero-3.png?updatedAt=1716384700149" alt="" />
                            </m.div>
                            <m.div 
                            
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                            duration: 0.7,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                            }}

                            className="hero-content__img--3">
                                <Vector_3/>
                            </m.div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="hero-info" ref={ref}>
                    <m.div 
                    
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visable: {opacity: 1, y: 0},
                    }}
                    initial='hidden'
                    animate={mainControl}
                    transition={{   
                        duration: 0.7,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}


                    className="hero-info__list">
                        <div className="hero-info__list--item">
                            <div className="item-icon">
                                <Edit/>
                            </div>
                            <h3>Tarqatma materiallar</h3>
                        </div>
                        <Star_1/>
                        <div className="hero-info__list--item">
                            <div className="item-icon">
                                <Edit/>
                            </div>
                            <h3>Taqdimotlar</h3>
                        </div>
                        <Star_1/>
                        <div className="hero-info__list--item">
                            <div className="item-icon">
                                <Edit/>
                            </div>
                            <h3>Videolar</h3>
                        </div>
                        <Star_1/>
                        <div className="hero-info__list--item">
                            <div className="item-icon">
                                <Edit/>
                            </div>
                            <h3>Scenariylar</h3>
                        </div>
                    </m.div>
                </div>
                <hr />
            </section>
        </>
    ) 
}