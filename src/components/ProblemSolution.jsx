import React from 'react';
import ArrowTopRight from '../../public/Icons/arrow_top_right';
import Pattern_1 from '../../public/Pattern/spark_23';
import Pattern_star_2 from '../../public/Pattern/spark_32';
import Pattern_star_3 from '../../public/Pattern/spark_67';
import Pattern_star_4 from '../../public/Pattern/spark_68';
import Pattern_star_5 from '../../public/Pattern/spark_88';

export function ProblemSolution() {

  return (
    <section className="psinfo-section">
      <div className="psinfo">
        <hr />
        <div className="psinfo__content container">
          <div className="psinfo__left">
            <div className="psinfo__left--top">
              <div className="psinfo__content--card">
                <div className="card--title">
                  <h3>Darsga tayyorgarlik </h3>
                  <Pattern_1 />
                </div>
                <p>oʻqituvchilardan qoʻshimcha vaqt va kuch talab qiladi. Natijada ustozlarning eʼtibori asosiy vazifasi - dars oʻtishdan chalgʻiydi. Bizning oʻquv dasturimizda esa toʻliq yillik darslar rejalashtirilgan boʻladi. Ustozlar tayyorgarlik uchun taxminan 20 daqiqa sarflashlari yetarli boʻladi.</p>
              </div>
              <div className="psinfo__content--card">
                <div className="card--title">
                  <h3>AT tez oʻsuvchan soha.</h3>
                  <Pattern_star_2 />
                </div>
                <p>Natijada darsliklardagi bilimlar oson eskirishi mumkin. Format oʻquv dasturida mavzular zamon talablariga moslanib,  yangilanib turadi.</p>
              </div>
            </div>
            <div className="psinfo__left--bottom">
              <div className="psinfo__content--card">
                <div className="card--title">
                  <h3>Maktab oʻqituvchilarining ishlash davri</h3>
                  <Pattern_star_3 />
                </div>
                <p>oʻrtacha 30 yil hisoblanadi. Bu vaqtda ustozlarning ham pedogogik, ham sohaga oid bilimi eskiradi. Bizning dastur esa oʻqituchilarga muntazam treninglar tashkil qilishni taklif qilib, ustozlarni qiynayotgan muammolarga yechim beramiz</p>
              </div>
              <div className="psinfo__content--card">
                <div className="card--title">
                  <h3>Maktabda oʻrgatiladigan nazariy bilimlar</h3>
                  <Pattern_star_4 />
                </div>
                <p>odatda amaliyotda yaroqsiz hisoblanadi. Formatda esa darslar amaliy konikmalarni rivojlantirishga qaratilgan.</p>
              </div>
            </div>
          </div>
          <div className="psinfo__right">
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
