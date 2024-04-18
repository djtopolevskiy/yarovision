import React from 'react'
import Image from 'next/image'

function Dmotion() {
  return (
    <section className='w-full h-auto border-b border-custom flex justify-center items-center relative' >
      <Image
        src="/3DMotion.png"
        width={1730}
        height={890}
        alt="Picture of the author"
        // sizes="100vw"
        sizes="(max-width: 1730px) 100vw, 23vw"
        // style={{
        //   width: '100%',
        //   height: 'auto',
        // }}
        style={{ objectFit: "cover" }}
        priority={true}
        	// fill={true}
      />
      <section className="container flex flex-col justify-start items-start absolute  pt-16 ">
        <div className=' top-10 sm:top-32 md:top-40 lg:top-52'>
          <h1 className="uppercase sm:pl-8 font-medium leading-none text-l sm:text-2xl md:text-3xl lg:text-5xl backdrop-blur-sm p-1 rounded-xl">3D MOTION DESIGNER</h1>
          <p className="sm:pl-8 text-[10px] md:text-xl leading-none font-normal p-1 max-w-48 sm:max-w-[640px]">A Worthy brand deserves worthy promotion.</p>
        </div>
      </section>
      
     
    
    </section>
  )
}

export default Dmotion