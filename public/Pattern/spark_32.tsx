import React from 'react';

const Pattern_star_2 = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 380 361" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M379.5 180.401C253.3 180.401 241.3 143.301 343.3 69.1008C241.2 143.301 209.7 120.401 248.7 0.300781C209.7 120.301 170.7 120.301 131.7 0.300781C170.7 120.301 139.1 143.201 37.1004 69.1008C139.2 143.301 127.1 180.401 0.900391 180.401C127.1 180.401 139.1 217.501 37.1004 291.701C139.2 217.501 170.7 240.401 131.7 360.501C170.7 240.501 209.7 240.501 248.7 360.501C209.7 240.501 241.3 217.601 343.3 291.701C241.2 217.501 253.3 180.401 379.5 180.401Z" fill="#EB9E47"/>
    </svg>
  )
}

export default Pattern_star_2