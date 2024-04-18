import Image from 'next/image'
import React from 'react'

function Card_2() {
  return (
    <div className="advant_block_1 flex flex-col backdrop-blur-lg items-center justify-start w-[270px] h-[330px] border border-custom rounded-3xl p-4">
      <div className="adv_block_pick relative w-16 h-16">
        <Image
          src="/icon_2.png"
          alt="icon_2"
          fill={true}
          sizes="(max-width: 64px)"
          style={{ objectFit: "fill", objectPosition: "  " }}
        />
        <Image
          src="/blur_2.png"
          alt="blur_2"
          fill={true}
          sizes="(max-width: 64px)"
          style={{ objectFit: "fill", objectPosition: "  " }}
        />
	  </div>
        <h4 className='text-custom text-base text-center mb-3'>
          Enhanced Storytelling
        </h4>
		  <p className='font-montserrat text-center text-[15px] font-extralight'>
			  3D motion design allows you to tell your brand&apos;s story in a dynamic and immersive way. You can convey complex ideas or
			concepts more effectively through animated visuals, improving audience comprehension.
		  </p>
	</div>

  )
}

export default Card_2