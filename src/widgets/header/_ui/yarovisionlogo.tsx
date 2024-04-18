import React from 'react'

function Yarovisionlogo() {
   return (
      <svg width="100%" height="40" version="1.1" viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg">
         <g className='min-w-20 ' transform="translate(0 0)">
            <rect x="0" width="110" height="40" className="fill-transparent font-bold" />
            <text transform="matrix(1 0 0 1 0 0)" className=" fill-foreground" >
               <tspan x="15" y="20" className="text-l font-bold">YARO</tspan>
            </text>
            <text transform="matrix(1 0 0 1 0 0)" className="fill-foreground leading-none" >
              <tspan x="15" y="32" height='20' className="text-l font-bold leading-none hover:text-primary">VISION.</tspan>
            </text>
         </g>
      </svg>
  )
}

export default Yarovisionlogo