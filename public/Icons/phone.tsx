
import React from 'react';

const Phone = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_2774)">
            <path d="M19.5063 7.95952C18.0666 13.6147 13.6147 18.0666 7.95953 19.5063C5.81867 20.0513 4 18.2091 4 16V15C4 14.4477 4.44883 14.0053 4.99842 13.9508C5.92696 13.8587 6.81815 13.6397 7.65438 13.3112L9.17366 14.8305C11.6447 13.648 13.648 11.6447 14.8305 9.17367L13.3112 7.65438C13.6397 6.81816 13.8587 5.92696 13.9508 4.99842C14.0053 4.44883 14.4477 4 15 4H16C18.2091 4 20.0513 5.81867 19.5063 7.95952Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_2_2774">
                <rect style={iconStyle} fill="white"/>
            </clipPath>
        </defs>
    </svg>
  );
};

export default Phone;