import React from 'react';

const Pattern_star_3 = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
        <svg style={iconStyle} viewBox="0 0 426 370" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M319.3 0.800781C248.3 123.701 177.4 123.701 106.4 0.800781C177.4 123.701 141.9 185.101 0 185.101C141.9 185.101 177.4 246.501 106.4 369.401C177.4 246.501 248.3 246.501 319.3 369.401C248.3 246.501 283.8 185.101 425.7 185.101C283.8 185.101 248.3 123.701 319.3 0.800781Z" fill="#24242E"/>
        </svg>
  )
}

export default Pattern_star_3