import { useState } from 'react';
import ArrowTopCircle from '../../public/Icons/arrow_down_circle';
import ArrowBottomCircle from '../../public/Icons/arrow_up_circle';
import SmilePt from '../../public/Pattern/smile';
import { motion as m } from "framer-motion";
import { UseInViewAnimation } from './Animation';

const programsData = [
    {
        title: "Program 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum!"
    },
    {
        title: "Program 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum!"
    },
    {
        title: "Program 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum!"
    }
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
                                    <p>{program.description}</p>
                                </div>
                                <hr/>
                            </div>
                        ))}
                    </m.div>
                </div>
            </section>
        </>
    );
}
