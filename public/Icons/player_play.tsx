import React from "react"

const PlayerPlayIcon = ({size = 24, color = 'black', strokeWidth = 2}) => {
    const iconStyle = {
        width: size,
        height: size,
    }
    return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_2555)">
        <path d="M19 10.2679C20.3333 11.0377 20.3333 12.9623 19 13.7321L10 18.9282C8.66667 19.698 7 18.7358 7 17.1962L7 6.80385C7 5.26425 8.66667 4.302 10 5.0718L19 10.2679Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_2_2555">
        <rect style={iconStyle} fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )
}
export default PlayerPlayIcon



