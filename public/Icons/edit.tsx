import React from 'react';

const Edit = ({ size = 25, color = 'black', strokeWidth = 2 }) => {
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 13V17C21 19.7614 18.7614 22 16 22H8C5.23858 22 3 19.7614 3 17V9C3 6.23858 5.23858 4 8 4H12" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <path d="M17.1721 3.28601C17.9525 2.50437 19.2184 2.50389 19.9994 3.28494L21.4887 4.77419C22.2631 5.54858 22.2711 6.80222 21.5067 7.58649L14.4467 14.8301C13.8823 15.4092 13.1082 15.7357 12.2998 15.7357L10.6026 15.7356C9.7498 15.7356 9.06872 15.0246 9.10459 14.1719L9.17869 12.4104C9.21028 11.6592 9.52251 10.9472 10.0536 10.4153L17.1721 3.28601Z" stroke="black" stroke-width="2"/>
    <path d="M15.7298 4.86852L19.7438 8.88251" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Edit