import React from 'react';
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';

function InstCard({ username, imgSrc, pfpImg }) {
  return (
    <div className="about-inst def-box def-box-light">
      <div className="about-inst__top">
        <div className="about-inst__top--img">
          <img src={pfpImg} alt="" />
        </div>
        <div className="about-inst__top--username">
          <p><b>{username}</b></p>
        </div>
      </div>
      <div className="about-inst__img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="about-inst__actions">
        <div className="about-inst__actions--left">
          <FaHeart scale={25}/>
          <FaComment scale={25} />
        </div>
        <div className="about-inst__actions--right">
          <FaBookmark scale={25} />
        </div>
      </div>
    </div>
  );
}

export function Carousel() {
  const cardsData = [
    { username: 'format.mohirdev', pfpImg: './Images/pfp.png', imgSrc: './Images/inst_c-1.png' },
    { username: 'format.mohirdev', pfpImg: './Images/pfp.png', imgSrc: './Images/inst_c-2.png' },
    { username: 'format.mohirdev', pfpImg: './Images/pfp.png', imgSrc: './Images/inst_c-3.png' }
  ];

  return (
    <div className="inst-section">
      <div className="inst-section__carousel">
        {cardsData.map((card, index) => (
          <InstCard key={index} username={card.username} imgSrc={card.imgSrc} pfpImg={card.pfpImg} />
        ))}
      </div>
    </div>
  );
}
