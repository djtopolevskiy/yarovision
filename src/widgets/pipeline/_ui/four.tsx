import Image from 'next/image'
import React from 'react'

function Four() {
  return (
    <article className='flex flex-col items-center justify-start max-w-[435px] h-auto border border-custom  rounded-3xl backdrop-blur-xl p-1'>
      
      <h3 className='text-center text-custom leading-none uppercase text-[70px] sm:text-[110px] lg:hidden py-2'>4</h3>
      <h5 className='uppercase self-center text-center text-lg sm:text-2xl'>LOOK DEVELOPMENT</h5>
      <p className='font-montserrat text-center text-sm sm:text-base font-extralight py-4'>
        During this stage, we give visual style to the assets. This includes texturing, lighting, material adjustments, and color correction. The goal is to make all resources vibrant, attractive,
        and in line with the art direction concept.
      </p>

    </article>
  )
}

export default Four