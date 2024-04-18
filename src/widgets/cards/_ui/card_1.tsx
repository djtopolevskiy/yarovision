import Image from 'next/image'
import React from 'react'

function Card_1() {
  return (
    <div className="advant_block_1 flex flex-col backdrop-blur-lg items-center justify-start w-[270px] h-[330px] border border-custom rounded-3xl p-4">
      <div className="adv_block_pick relative w-16 h-16">
        <Image
          src="/Visual_icon_2.png"
          alt="Visual_icon_2"
          fill={true}
          sizes="(max-width: 64px)"
          style={{ objectFit: "fill", objectPosition: "  " }}
        />
        <Image
          src="/Ellipse_8.png"
          alt="Ellipse_8"
          fill={true}
          sizes="(max-width: 64px)"
          style={{ objectFit: "fill", objectPosition: "  " }}
        />
	  </div>
        <h4 className='text-custom text-base text-center mb-2'>
          Visual Appeal
        </h4>
		  <p className='font-montserrat text-center text-[15px] font-extralight'>
			  3D motion design adds a visually captivating element to your website, making it more engaging and memorable for visitors. It
			  can help you stand out in a crowded digital landscape.
		  </p>
	</div>

  )
}

export default Card_1