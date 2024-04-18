import Image from 'next/image'
import React from 'react'

function One() {
  return (
    <article className='flex flex-col items-center justify-start max-w-[435px] h-auto border border-custom  rounded-3xl backdrop-blur-xl p-1'>
      
      <h3 className='text-center text-custom leading-none uppercase text-[70px] sm:text-[110px] lg:hidden py-2'>1</h3>
      <h5 className='uppercase self-center text-center text-lg sm:text-2xl '>ART DIRECTION</h5>
      <p className='font-montserrat text-center text-sm sm:text-base font-extralight py-4'>
        At this stage, we define the overall look and style of the project. This includes selecting colors, textures, key aesthetic decisions, and creating a concept that will serve as the foundation for further work. The goal is to determine how the project will look as a whole.
      </p>

    </article>
  )
}

export default One