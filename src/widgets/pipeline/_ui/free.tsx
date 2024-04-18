import Image from 'next/image'
import React from 'react'

function Free() {
  return (
    <article className='flex flex-col items-center justify-start max-w-[435px] h-auto border border-custom  rounded-3xl backdrop-blur-xl p-1'>
      
      <h3 className='text-center text-custom leading-none uppercase text-[70px] sm:text-[110px] lg:hidden py-2'>3</h3>
      <h5 className='uppercase self-center text-center text-lg sm:text-2xl'>ASSETING</h5>
      <p className='font-montserrat text-center text-sm sm:text-base font-extralight py-4'>
        At this stage, we create all the necessary resources for the animation, such as characters, objects, backgrounds, and other elements. Resources may be created in vector programs or modeled
        in 3D environments. This is a crucial stage because the quality of resources affects the appearance of the animation.
      </p>

    </article>
  )
}

export default Free