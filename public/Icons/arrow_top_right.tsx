import React from 'react';

const ArrowTopRight = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2268)">
    <path d="M7 7H17M17 7V17M17 7L7 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_2268">
    <rect style={iconStyle} fill="white"/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default ArrowTopRight