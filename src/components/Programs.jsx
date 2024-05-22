import { useState } from 'react';
import ArrowTopCircle from '../../public/Icons/arrow_down_circle';
import ArrowBottomCircle from '../../public/Icons/arrow_up_circle';
import SmilePt from '../../public/Pattern/smile';

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
    const [isOpen, setIsOpen] = useState(Array(programsData.length).fill(false));

    const toggleDropdown = (index) => {
        const updatedOpenState = [...isOpen];
        updatedOpenState[index] = !updatedOpenState[index]; 
        setIsOpen(updatedOpenState); 
    };

    return (
        <>
            <section id="programsSection" className="programs-section">
                <div className="programs container">
                    <div className="programs__pattern">
                        <SmilePt/>
                    </div>
                    <div className="programs-title">
                        <h2>Dastur</h2>
                    </div>
                    <div className="programs__card def-box def-box-light">
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
                    </div>
                </div>
            </section>
        </>
    );
}
