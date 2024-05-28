import React from 'react';

const ShoppingBag = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2899)">
        <path d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79202 20 4.92829 19.2112 4.83464 18.1811L4 9Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
        <path d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </g>
        <defs>
        <clipPath id="clip0_2_2899">
            <rect style={iconStyle} fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default ShoppingBag;