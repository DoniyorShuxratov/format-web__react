import React from 'react';

const Vector_3 = ({ size = 250, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/vector_3.png" alt="" />
  )
}

export default Vector_3