import React from 'react';

const InformationCircle = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2353)">
    <circle cx="12" cy="11.9999" r="9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="12" y="8" width="0.01" height="0.01" stroke="black" stroke-width="3" stroke-linejoin="round"/>
    <path d="M12 12V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_2353">
    <rect style={iconStyle} fill="white"/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default InformationCircle