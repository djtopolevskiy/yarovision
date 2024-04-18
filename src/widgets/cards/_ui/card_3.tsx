import Image from 'next/image'
import React from 'react'
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ["400", "700"],
//   // display: 'swap',
//   variable: '--font-montserrat',
// })

function Card_3() {
  return (
    <div className="advant_block_1 flex flex-col backdrop-blur-lg items-center justify-start w-[270px] h-[330px] border border-custom rounded-3xl p-4">
      <div className="adv_block_pick relative w-16 h-16">
        <Image
          src="/icon_3.png"
          alt="icon_3"
          fill={true}
          sizes="(max-width: 64px)"
          style={{ objectFit: "fill", objectPosition: "  " }}
        />
        <Image
          src="/blur_3.png"
          alt="blur_3"
          fill={true}
          sizes="(max-width: 64px)"
          style={{ objectFit: "fill", objectPosition: "  " }}
        />
	  </div>
        <h4 className='text-custom text-base text-center mb-2'>
          Visual Appeal
        </h4>
		  <p  className='font-montserrat text-center text-[15px] font-extralight'>
			  3D motion design sets you apart from competitors by showcasing your commitment to innovation and creativity. It helps
			establish a unique brand identity in the minds of your audience.
		  </p>
	</div>

  )
}

export default Card_3