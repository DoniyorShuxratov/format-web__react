import React from 'react';

const SmilePt = ({ size = 150, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/smile.png" alt="smile" />
  )
}

export default SmilePt