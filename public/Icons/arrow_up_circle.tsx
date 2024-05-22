import React from 'react';

const ArrowBottomCircle = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2262)">
    <circle cx="12" cy="12" r="9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 13L12 10L9 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_2262">
    <rect style={iconStyle} fill="white"/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default ArrowBottomCircle