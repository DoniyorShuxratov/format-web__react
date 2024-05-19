import React from 'react';

const Pattern_star_5 = ({ size = 50, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 402 403" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M401.8 201.8C317.1 155.4 247.4 85.7004 201 0.900391C154.6 85.7004 84.9002 155.4 0.200195 201.7C85.0002 248.1 154.7 317.8 201 402.5C247.4 317.8 317.1 248.1 401.8 201.8Z" fill="#24242E"/>
    </svg>
  )
}

export default Pattern_star_5