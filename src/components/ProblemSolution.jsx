import React from 'react';

import { motion as m } from "framer-motion";
import { UseInViewAnimation } from './Animation';

export function ProblemSolution() {
  const { ref, mainControl } = UseInViewAnimation();
  return (
    <section id='problemSolution' className="psinfo-section">
      <div className="psinfo-container container">
        <div className="psinfo-content" ref={ref}>
          <m.div 
          
          variants={{
            hidden: {opacity: 0, y: 75},
            visable: {opacity: 1, y: 0},
          }}
          initial='hidden'
          animate={mainControl}
          transition={{   
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
          }}

          className="psinfo-title">
            <h2>Problem Solution</h2>
          </m.div>
          <div className="psinfo-actives">
            <div className="psinfo-list">
              <m.div 
              
              variants={{
                hidden: {opacity: 0, y: 75},
                visable: {opacity: 1, y: 0},
              }}
              initial='hidden'
              animate={mainControl}
              transition={{   
                  duration: 0.5,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              
              className="psinfo-list--cards">
                <div className="psinfo-list__card">
                  <div className="psinfo-list__card--top">
                    <h3>Problema #1</h3>
                  </div>
                  <div className="psinfo-list__card--paragraph">
                    <p>AT tez oʻsuvchan soha. Natijada darsliklardagi bilimlar oson eskirishi mumkin. </p>
                  </div>
                </div>
                <div className="psinfo-list__card">
                  <div className="psinfo-list__card--top">
                    <h3>Problema #1</h3>
                  </div>
                  <div className="psinfo-list__card--paragraph">
                    <p>AT tez oʻsuvchan soha. Natijada darsliklardagi bilimlar oson eskirishi mumkin. <br /><br /> AT tez oʻsuvchan soha. Natijada darsliklardagi bilimlar oson eskirishi mumkin. </p>
                  </div>
                </div>
                <div className="psinfo-list__card">
                  <div className="psinfo-list__card--top">
                    <h3>Problema #1</h3>
                  </div>
                  <div className="psinfo-list__card--paragraph">
                    <p>Maktab oʻqituvchilarining ishlash davri oʻrtacha 30 yil hisoblanadi. Bu vaqtda ustozlarning ham pedogogik, ham sohaga oid bilimi eskiradi.<br /><br />Bizning dastur esa oʻqituchilarga muntazam treninglar tashkil qilishni taklif qilib, ustozlarni qiynayotgan muammolarga yechim beramiz</p>
                  </div>
                </div>

              </m.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
