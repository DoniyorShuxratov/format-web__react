import React from 'react';

const BagPtIcon = ({ size = 70, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/bag.png" alt="smile" />
  )
}

export default BagPtIcon