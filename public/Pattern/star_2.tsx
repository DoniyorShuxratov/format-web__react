import React from 'react';

const Star_2 = ({ size = 120, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/star_2.png" alt="" />
  )
}

export default Star_2