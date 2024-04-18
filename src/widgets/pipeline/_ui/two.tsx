import Image from 'next/image'
import React from 'react'

function Two() {
  return (
    <article className='flex flex-col items-center justify-start max-w-[435px] h-auto border border-custom rounded-3xl backdrop-blur-xl p-1'>
      
      <h3 className='text-center text-custom leading-none uppercase text-[70px] sm:text-[110px] lg:hidden py-2'>2</h3>
      <h5 className='uppercase self-center text-center text-lg sm:text-2xl'>BLOCKING</h5>
      <p className='font-montserrat text-center text-sm sm:text-base font-extralight py-4'>
        During this stage, we develop the basic structure of the animation. We determine the movements and positions of objects on the scene, creating a motion plan. This helps us understand how
					objects will interact in the animation and the primary motion paths.</p>

    </article>
  )
}

export default Two