import React from 'react';

const DocPtIcon = ({ size = 70, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/doc.png" alt="smile" />
  )
}

export default DocPtIcon