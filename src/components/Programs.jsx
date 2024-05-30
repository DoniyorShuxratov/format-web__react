import { useState } from 'react';
import ArrowTopCircle from '../../public/Icons/arrow_down_circle';
import ArrowBottomCircle from '../../public/Icons/arrow_up_circle';
import SmilePt from '../../public/Pattern/smile';
import { motion as m } from "framer-motion";
import { UseInViewAnimation } from './Animation';

const programsData = [
    {
        "title": "I chorak",
        "lesson_1": {
            'lesson_name': '1-modul: AT kirish',
            'quantity': 'Darslar soni: 9'
        },
        "lesson_2": {
            'lesson_name': '2-modul: Windows asoslari',
            'quantity': 'Darslar soni: 8'
        },
        "lesson_3": {
            'lesson_name': '',
            'quantity': ''
        }
    },
    {
        "title": "II chorak",
        "lesson_1": {
            'lesson_name': '1-modul: Windows asoslari',
            'quantity': '2-modul: Darslar soni: 8'
        },
        "lesson_2": {
            'lesson_name': '2-modul: Internet asoslari',
            'quantity': 'Darslar soni: 7'
        },
        "lesson_3": {
            'lesson_name': '',
            'quantity': ''
        }
    },
    {
        "title": "III chorak",
        "lesson_1": {
            'lesson_name': '1-modul: Mantiq',
            'quantity': 'Darslar soni: 8'
        },
        "lesson_2": {
            'lesson_name': '2-modul: Scratch',
            'quantity': 'Darslar soni: 4'
        },
        "lesson_3": {
            'lesson_name': '3-modul: Raqamli fuqarolik',
            'quantity': 'Darslar soni: 7'
        }
    },
    {
        "title": "IV chorak",
        "lesson_1": {
            'lesson_name': '1-modul: Raqamli ijodkorlik',
            'quantity': 'Darslar soni: 11'
        },
        "lesson_2": {
            'lesson_name': '2-modul: Yakuniy darslar',
            'quantity': 'Darslar soni: 6'
        },
        "lesson_3": {
            'lesson_name': '',
            'quantity': ''
        }
    },
];

export function Programs() {
    const {ref, mainControl} = UseInViewAnimation()
    const [isOpen, setIsOpen] = useState(Array(programsData.length).fill(false));

    const toggleDropdown = (index) => {
        const updatedOpenState = [...isOpen];
        updatedOpenState[index] = !updatedOpenState[index]; 
        setIsOpen(updatedOpenState); 
    };

    return (
        <>
            <section id="programsSection" className="programs-section">
                <div className="programs container" ref={ref}>
                    <m.div
                    
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visable: {opacity: 1, y: 0},
                    }}
                    initial='hidden'
                    animate={mainControl}
                    transition={{   
                        duration: 1,
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}

                    className="programs__pattern">
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
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}

                    className="programs-title">
                        <h2>Dastur</h2>
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
                    
                    className="programs__card def-box def-box-light">
                        {programsData.map((program, index) => (
                            <div className="programs__card--list" key={index}>
                                <div className="program__list--title" onClick={() => toggleDropdown(index)}>
                                    <h3>{program.title}</h3>
                                    {isOpen[index] ?  <ArrowBottomCircle/> : <ArrowTopCircle/>}
                                </div>
                                <div className={`program__list--contain ${isOpen[index] ? 'open' : 'closed'}`}>
                                    <div className="program__contain">
                                        <div className="program__contain--list">
                                            <h4>{program.lesson_1.lesson_name}</h4>
                                            <span>{program.lesson_1.quantity}</span>
                                            <br />
                                            <br />
                                            <h4>{program.lesson_2.lesson_name}</h4>
                                            <span>{program.lesson_2.quantity}</span>
                                            <br />
                                            <br />
                                            <h4>{program.lesson_3.lesson_name}</h4>
                                            <span>{program.lesson_3.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                                {index !== programsData.length - 1 && <hr />}
                            </div>
                        ))}
                    </m.div>
                </div>
            </section>
        </>
    );
}
