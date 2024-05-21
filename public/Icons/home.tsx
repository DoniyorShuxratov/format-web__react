import React from 'react';

const HomeIcon = ({ size = 24, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_2083)">
        <path d="M17.9679 6.29821C18.8259 6.93726 19.4218 7.38204 19.8634 7.76974C20.2939 8.1477 20.5211 8.4241 20.6676 8.69941C20.9732 9.27355 21 9.93274 21 11.9512V13.4425C21 15.4924 20.9971 16.9126 20.8291 17.9823C20.6683 19.0052 20.376 19.5672 19.8854 19.987C19.3722 20.4261 18.6482 20.7031 17.3721 20.8499C16.081 20.9984 14.3813 21 12 21C9.6187 21 7.91896 20.9984 6.62794 20.8499C5.35176 20.7031 4.62775 20.4261 4.11465 19.987C3.62402 19.5672 3.33166 19.0052 3.17094 17.9823C3.00288 16.9126 3 15.4924 3 13.4425L3 11.9512C3 9.93274 3.02685 9.27355 3.33235 8.69941C3.47885 8.4241 3.7061 8.1477 4.13659 7.76974C4.57818 7.38204 5.17409 6.93726 6.03209 6.29821C7.61608 5.11843 8.73442 4.28755 9.68662 3.74156C10.6129 3.21043 11.2983 3 12 3C12.7017 3 13.3871 3.21043 14.3134 3.74156C15.2656 4.28755 16.3839 5.11843 17.9679 6.29821Z" stroke="black" stroke-width="2"/>
      </g>
      <defs>
        <clipPath id="clip0_2_2083">
          <rect style={iconStyle} fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;