import Image from 'next/image'
import React from 'react'

function Fifve() {
  return (
    <article className='flex flex-col items-center justify-start max-w-[435px] h-auto border border-custom  rounded-3xl backdrop-blur-xl p-1'>
      
      <h3 className='text-center text-custom leading-none uppercase text-[70px] sm:text-[110px] lg:hidden py-2'>5</h3>
      <h5 className='uppercase self-center text-center text-lg sm:text-2xl'>COMPOSITING</h5>
      <p className='font-montserrat text-center text-sm sm:text-base font-extralight py-4'>
        On the final stage, we combine all previous stages and create the final animation. We add special effects, adjust colors, fix errors, and add sound if necessary. The result is a finished
        motion design project ready for presentation to the client.
      </p>

    </article>
  )
}

export default Fifve