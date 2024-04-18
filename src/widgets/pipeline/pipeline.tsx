import Image from 'next/image'
import React from 'react'
import One from './_ui/one'
import Two from './_ui/two'
import Free from './_ui/free'
import Four from './_ui/four'
import Fifve from './_ui/fifve'

function Pipeline() {
  return (
    <section id='pipeline' className='w-full h-auto flex items-center justify-center border-b border-custom relative py-4 bg-gradient-to-r from-transparent to-gray-700'>
      <div className='portfolio flex justify-center relative w-auto h-auto '>
          <Image className='hidden lg:flex'
        src="/pipeline1.png"
        fill={true}
        alt="cards"
        // width={1730}
        // height={4400}
        sizes="(max-width: 1440px)"
        style={{ objectFit: "fill", objectPosition: " " }}
        priority={true}
        />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-7 h-auto lg:h-[1600px] w-full gap-x-40 px-10 z-20">
          
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent flex items-center justify-center lg:pt-[110px] '>
            <One />
          </div>
          <div className='border border-transparent flex items-center justify-start lg:pt-[160px]'><Two /> </div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent flex items-center justify-center lg:pt-[250px]'><Free /></div>
          <div className='border border-transparent flex items-center justify-center lg:pt-[300px]'><Four /></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent hidden lg:flex'></div>
          <div className='border border-transparent flex items-center justify-center lg:-mt-[5px]'><Fifve /></div>
          
          </div>
      </div>
    </section>
    
  )
}

export default Pipeline