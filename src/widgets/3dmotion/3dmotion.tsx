import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Dmotion() {
  return (
    <section className='w-full h-auto border-b border-custom flex justify-center items-center relative' >
      <div className='flex relative w-[1730px] h-[400px] md:h-[600px] bg-gradient-to-r from-transparent to-gray-700 sm:pl-8 pt-12 sm:pt-32'>
        <Image className=''
        src="/3DMotion_1.png"
        // width={1730}
        // height={890}
        alt="Picture of the author"
        // sizes="100vw"
        sizes="(max-width: 1730px)"
        // style={{
        //   width: '100%',
        //   height: 'auto',
        // }}
        style={{ objectFit: "cover", objectPosition: "65%" }}
        priority={true}
        	fill={true}
        />

        <section className="flex flex-col z-10 sm:pl-8 pt-12 sm:pt-18 ">
        <h1 className="flex uppercase w-auto font-medium text-balance text-4xl md:text-5xl p-1">3D MOTION DESIGNER</h1>
        <p className="flex text-lg md:text-xl w-auto sm:w-auto text-balance leading-none font-normal p-1 ">A Worthy brand deserves worthy promotion.</p>
        <div className='table p-1'>
          <Link className='mt-3 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50' href="/#contactme">Contact</Link>
        </div>
      </section>
      </div>
      
      
    </section>
  )
}

export default Dmotion

      