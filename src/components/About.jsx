import ArrowTopRight from "../../public/Icons/arrow_top_right";
import Pause from "../../public/Icons/player_pause";
import PlayerPlayIcon from "../../public/Icons/player_play";
import Star_1 from "../../public/Pattern/star_1";
import Star_2 from "../../public/Pattern/star_2";
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
                                <h2>Format loihasi</h2>
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
                            <Star_2/>
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
                                        <video onClick={handlePlayPause} ref={videoRef} src="./Video/video.mp4"></video>
                                        <button className="play-button">
                                            {isPlaying ? <Pause/> : <PlayerPlayIcon/>}
                                        </button>
                                    </div>
                                </div>
                                <div className="about-card__right">
                                    <div className="about-card__right--title">
                                        <h2>Dastur o'zi nima?</h2>
                                    </div>
                                    <div className="about-card__right--paragraph">
                                        <p>
                                            Dastur Mohirdev kompaniyasining loyihasi hisoblanadi. Kompaniya onlayn taʼlim platformasida asosan maktab yoshidan oshganlar uchun kurslar taqdim qilsa, Format loyihasi esa maktab oʻquvchilari uchun moʻljallangan. <br /><br />
                                            Biz informatika darslari uchun zamon talablariga mos keluvchi oʻquv rejasi, har bir dars uchun bola psixologiyasiga moslangan materiallarni taʼminlaymiz. Oʻquv dasturimiz malakali mutaxassislar yordamida ishlab chiqilgan va sinovdan oʻtkazilgan.<br /><br />
                                            Dastur maqsadi - oʻquvchilarda qoʻshimcha kurslarga ehtiyoj tugʻdirmasdan, maktabning oʻzida ATni oʻrgatish
                                        </p>
                                    </div>
                                    <div className="about-card__right--btn">
                                        <button className="btn btn-primary"><ArrowTopRight/>Yaqindan tanishing</button>
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