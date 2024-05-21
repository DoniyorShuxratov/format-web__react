import React from 'react';

const Pause = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2553)">
    <path d="M5 7C5 5.89543 5.89543 5 7 5H8C9.10457 5 10 5.89543 10 7V17C10 18.1046 9.10457 19 8 19H7C5.89543 19 5 18.1046 5 17V7Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14 7C14 5.89543 14.8954 5 16 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H16C14.8954 19 14 18.1046 14 17V7Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_2553">
    <rect style={iconStyle} fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};

export default Pause;