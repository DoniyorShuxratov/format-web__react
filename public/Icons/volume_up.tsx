import React from 'react';

const VolumeUp = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6.3706C15 4.65827 12.9884 3.73774 11.6926 4.85712L8.36317 7.73321C7.99988 8.04704 7.53583 8.21972 7.05576 8.21973L5.49998 8.21974C4.11928 8.21975 3 9.33903 3 10.7197V14.0127C3 15.3934 4.11929 16.5127 5.5 16.5127H7.0558C7.53587 16.5127 7.99993 16.6854 8.36322 16.9992L11.6926 19.8753C12.9884 20.9947 15 20.0741 15 18.3618V12.3662V6.3706Z" stroke="black" stroke-width="2"/>
    <path d="M18 15.3667C18.6279 14.531 19 13.4923 19 12.3667C19 11.2411 18.6279 10.2024 18 9.3667" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 18.3667C21.2558 16.6954 22 14.6179 22 12.3667C22 10.1155 21.2558 8.03802 20 6.3667" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
};

export default VolumeUp;