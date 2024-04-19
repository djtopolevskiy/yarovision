import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Portfolio() {
  return (
    <section id='portfolio' className='w-full h-auto flex items-center justify-center border-b border-custom relative '>
      {/* <div className='flex flex-col items-center justify-center w-[1730px] h-full absolute'> */}
        <div className='portfolio flex justify-center relative w-[1730px] h-auto bg-gradient-to-r from-transparent to-gray-700'>
          <Image className=''
        src="/video_art.png"
        fill={true}
        alt="cards"
        // width={1730}
        // height={4400}
        sizes="(max-width: 1440px)"
        style={{ objectFit: "fill", objectPosition: " " }}
        priority={true}
        />
        
        <nav className='flex flex-col items-center justify-between left-0 right-0 bottom-0 top-0 mx-10 my-20 z-10 '>
        <Link className='hover:opacity-80' href="https://vimeo.com/656502337" target="_blank">
          <Image className='h-auto'
            src="/discord_img.png"
            // fill={true}
            alt="video_art"
            width={800}
            height={400}
            sizes="(max-width: 1730px)"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
          <p className='text-center uppercase mt-2 mb-6'>discord</p>
        </Link>

        <Link className='hover:opacity-80' href="https://vimeo.com/719868813" target="_blank">
          <Image className='h-auto'
        src="/phoenixcore.png"
        // fill={true}
        alt="phoenixcore"
        width={800}
        height={800}
        sizes="(max-width: 800px)"
        style={{ objectFit: "cover", objectPosition: " " }}
        priority={true}
          />
          <p className='text-center uppercase mt-2 mb-6'>phoenixcore</p>
        </Link>

        <Link className='hover:opacity-80' href="https://vimeo.com/859359045" target="_blank">
          <Image className='h-auto'
            src="/immutable_img.png"
            // fill={true}
            alt="immutable_img"
            width={800}
            height={800}
            sizes="(max-width: 1730px)"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
          <p className='text-center     mt-2 mb-6'>Immutable X</p>
        </Link>

        <Link className='hover:opacity-80' href="https://vimeo.com/859364997" target="_blank">
          <Image className='h-auto'
            src="/ilsy.png"
            // fill={true}
            alt="ilsy"
            width={800}
            height={800}
            sizes="(max-width: 1730px)"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
          <p className='text-center uppercase mt-2 mb-6'>ilsy</p>
        </Link>

        <Link className='hover:opacity-80' href="https://vimeo.com/859366521" target="_blank">
          <Image className='h-auto'
            src="/eagle.png"
            // fill={true}
            alt="eagle"
            width={800}    
            height={800}
            sizes="(max-width: 1730px)"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
          <p className='text-center uppercase mt-2 mb-6'>eagle</p>
        </Link>

        <Link className='hover:opacity-80' href="https://www.instagram.com/jshot27/reels/" target="_blank">
          <Image className='h-auto'
        src="/reels.png"
        // fill={true}
        alt="reels"
        width={800}
        height={800}
        sizes="(max-width: 1730px)"
        style={{ objectFit: "cover", objectPosition: " " }}
        priority={true}
          />
          <p className='text-center uppercase mt-2 mb-6 w-auto '>reels</p>
        </Link>

      </nav>
        </div>
        
      {/* </div> */}
      

      
    </section>
  )
}

export default Portfolio