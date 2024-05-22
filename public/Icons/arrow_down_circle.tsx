import React from 'react';

const ArrowTopCircle = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2264)">
    <circle cx="12" cy="12" r="9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 11L12 14L15 11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_2264">
    <rect style={iconStyle} fill="white"/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default ArrowTopCircle