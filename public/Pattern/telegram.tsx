import React from 'react';

const TelegramPt = ({ size = 120, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <img style={iconStyle} src="./Pattern/telegram.png" alt="" />
  )
}

export default TelegramPt