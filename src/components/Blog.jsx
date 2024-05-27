import SmilePt from "../../public/Pattern/smile";
import Star_2 from "../../public/Pattern/star_2";
import TelegramPt from "../../public/Pattern/telegram";
import { UseInViewAnimation } from "./Animation";
import { motion as m } from "framer-motion";

export function Blog() {
    const { ref, mainControl } = UseInViewAnimation();
    return (
        <>
            <section className="blog-section">
                <hr />
                <div className="blog-container" ref={ref}>
                    <div className="blog-content">
                        <div className="blog-content__pattern">
                            <m.div 
                            
                            variants={{
                                hidden: {opacity: 0, y: 75},
                                visable: {opacity: 1, y: 0},
                            }}
                            initial='hidden'
                            animate={mainControl}
                            transition={{   
                                duration: 0.9,
                                delay: 1.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}

                            className="blog-content__pattern--1">
                                <SmilePt/>
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
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}

                            className="blog-content__pattern--2">
                                <Star_2/>
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

                            className="blog-content__pattern--3">
                                <TelegramPt/>
                            </m.div>
                        </div>
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
                        
                        className="blog-title">
                            <h2>Telegram kanalimizga obuna bo‘ling</h2>
                            <button className="btn btn-primary">@format_mohirdev</button>
                        </m.div>
                    </div>
                </div>
                <hr />
            </section>
        </>
    )
}