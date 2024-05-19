import { useState } from 'react';

export function Programs() {
    const [isOpen, setIsOpen] = useState(Array(3).fill(false));

    const toggleDropdown = (index) => {
        const updatedOpenState = [...isOpen];
        updatedOpenState[index] = !updatedOpenState[index]; 
        setIsOpen(updatedOpenState); 
    };

    return (
        <>
            <section id="programsSection" className="programs-section">
                <div className="programs container">
                    <div className="programs__card def-box def-box-light">
                        {[...Array(3)].map((_, index) => (
                            <div className="programs__card--list" key={index}>
                                <div className="program__list--title" onClick={() => toggleDropdown(index)}>
                                    <h3>Lorem ipsum</h3>
                                    {isOpen[index] ? <span>&#9650;</span> : <span>&#9660;</span>}
                                </div>
                                <div className={`program__list--contain ${isOpen[index] ? 'open' : 'closed'}`}>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum!</p>
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
