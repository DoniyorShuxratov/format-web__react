import ArrowTopRight from "../../public/Icons/arrow_top_right";
import PlayerPlayIcon from "../../public/Icons/player_play";
import SmilePt from "../../public/Pattern/smile";
import Star_1 from "../../public/Pattern/star_1";
import { UseInViewAnimation } from "./Animation";
import { motion as m } from "framer-motion";
import React, { useRef, useState } from 'react';

export function About() {
    const { ref, mainControl } = UseInViewAnimation();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <section id="aboutSection" className="about">
                <div className="about__container container">
                    <div className="about-content" ref={ref}>
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

                        className="about-content__title">
                            <div className="about-content__title--toptext">
                                <Star_1/>
                                    <p>Biz haqimizda</p>
                                <Star_1/>
                            </div>
                            <div className="about-content__title--title">
                                <h2>Format loyihasi</h2>
                            </div>
                            <div className="about-content__title--paragraph">
                                <p>Format - boshlangʻich sinflar uchun AT (axborot texnologiyalari) savodxonligi oʻquv dasturi. Biz maktablarning boshlangʻich sinflari uchun informatika darslarini samarali tashkil qilishda koʻmaklashamiz.</p>
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
                            duration: 0.8,
                            delay: 1.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}

                        className="about-section__pattern">
                            <SmilePt/>
                        </m.div>
                        <div className="about-content__card">
                            <m.div
                            
                            variants={{
                                hidden: {opacity: 0, y: 75},
                                visable: {opacity: 1, y: 0},
                            }}
                            initial='hidden'
                            animate={mainControl}
                            transition={{   
                                duration: 0.7,
                                delay: 1.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}

                            className="about-card def-box">
                                <div className="about-card__left">
                                    <div className="about-card__left--img">
                                        <video onClick={handlePlayPause} ref={videoRef} src="https://ik.imagekit.io/imagesOptimaization/Video/video%20compressed%20480.mp4?updatedAt=1716375288718"></video>
                                        <button onClick={handlePlayPause} className="play-button">
                                            {isPlaying ? '' : <PlayerPlayIcon/>}
                                        </button>
                                    </div>
                                </div>
                                <div className="about-card__right">
                                    <div className="about-card__right--title">
                                        <h2>Dastur — Informatika fanining mukammal ssenariysi.</h2>
                                    </div>
                                    <div className="about-card__right--paragraph">
                                        <p>
                                        Format oʻquv dasturi Mohirdev kompaniyasi loyihalaridan biridir. U maktab oʻquvchilari uchun moʻljallangan. Biz bu dastur bilan AT(Axborot Texnologiyalari)ni oʻrganish uchun qoʻyilgan yosh chegaralarini buzamiz, uni faqat qoʻshimcha kurslarda oʻrganish mumkinligi haqidagi tasavvurlarni yoʻqqa chiqaramiz.
                                        </p>
                                    </div>
                                    <div className="about-card__right--btn">
                                        <button onClick={() => window.location.href = 'https://www.instagram.com/format.mohirdev/'} className="btn btn-primary"><ArrowTopRight/>Yaqindan tanishing</button>
                                    </div>
                                </div>
                            </m.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}