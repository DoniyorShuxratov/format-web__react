import React from 'react';

const Star_1 = ({ size = 25, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0343 14.0343L24 12L14.0343 9.96571L12 0L9.96571 9.96571L0 12L9.96571 14.0343L12 24L14.0343 14.0343Z" fill="#24242E"/>
    </svg>
  )
}

export default Star_1