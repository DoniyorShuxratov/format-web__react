import React from 'react';

const Instagram = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

    return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_3039)">
        <rect x="3" y="3" width="18" height="18" rx="6.03499" stroke="black" stroke-width="2"/>
        <rect x="9" y="9" width="6" height="6" rx="2" stroke="black" stroke-width="2"/>
        </g>
        </svg>
    );
};

export default Instagram;