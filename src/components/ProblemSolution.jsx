import React from 'react';

import { motion as m } from "framer-motion";
import { UseInViewAnimation } from './Animation';
import LaptopPtIcon from '../../public/Pattern/laptop';
import DocPtIcon from '../../public/Pattern/doc';
import BagPtIcon from '../../public/Pattern/bag';

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
            <h2>Afzalliklarimiz</h2>
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
                    <LaptopPtIcon/>
                  </div>
                  <div className="psinfo-list__card--bottom">
                    <div className="psinfo-list__card--top">
                      <h3>Zamonaviy metodlar</h3>
                    </div>
                    <div className="psinfo-list__card--paragraph">
                      <p>Baʼzida oʻqituvchilar metodlari eskirgani tufayli hatto kuchli bilimli boʻlsalar-da, yaxshi dars bera olishmaydi. Format dasturida esa darslar uchun zamonaviy metodlar mavjud va ustozlarga pedogogika boʻyicha ham treninglar oʻtkaziladi.</p>
                    </div>
                  </div>
                </div>
                <div className="psinfo-list__card">
                <div className="psinfo-list__card--top">
                    <DocPtIcon/>
                  </div>
                  <div className="psinfo-list__card--bottom">
                    <div className="psinfo-list__card--top">
                      <h3>Faqat kerakli bilimlar</h3>
                    </div>
                    <div className="psinfo-list__card--paragraph">
                      <p>AT tez oʻsuvchan soha va maktabdagi darsliklar ham shuning natijasida tez eskiradi. Bizning dasturimiz esa muntazam yangilanib turadi. Bu orqali oʻrganilgan bilimlar foydasiz boʻlib qolmaydi.</p>
                    </div>
                  </div>
                </div>
                <div className="psinfo-list__card">
                <div className="psinfo-list__card--top">
                    <BagPtIcon/>
                  </div>
                  <div className="psinfo-list__card--bottom">
                    <div className="psinfo-list__card--top">
                      <h3>Amaliy koʻnikmalar</h3>
                    </div>
                    <div className="psinfo-list__card--paragraph">
                      <p>Ayrim oʻrganilgan narsalar faqat qoʻgʻozda qoladi. Bunday nazariy bilmlar oʻquvchi miyasini band qiladi va vaqtini oladi. Formatda esa eng aktual amaliy koʻnikmalar oʻrgatiladi. Mashgʻulotlar davomida va keyinchalik hayotda ham ularni qoʻllash imkoni yaratiladi.</p>
                    </div>
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
