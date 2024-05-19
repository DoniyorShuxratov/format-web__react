import React from 'react';

const Pattern_star_4 = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 403 384" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M201.6 0.599609C201.6 128.2 134.5 176.9 0.400391 146.8C134.6 176.9 160.2 255.8 77.3004 383.4C160.2 255.8 243.1 255.8 326.1 383.4C243.2 255.8 268.8 176.9 403 146.8C268.7 177 201.6 128.2 201.6 0.599609Z" fill="#5C5CBC"/>
    </svg>
  )
}

export default Pattern_star_4