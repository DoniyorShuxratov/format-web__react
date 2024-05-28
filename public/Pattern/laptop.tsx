import React from 'react';

const LaptopPtIcon = ({ width = 80, height = 65,  color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: width,
    height: height,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/laptop.png" alt="smile" />
  )
}

export default LaptopPtIcon