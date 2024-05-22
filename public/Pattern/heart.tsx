import React from 'react';

const HeartPt = ({ size = 30, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/heart.png" alt="smile" />
  )
}

export default HeartPt