'use client'
import React from 'react'
import Layout from './_ui/layout'
import { Logo } from '../header/_ui/logo'
import Link from 'next/link'
import Image from 'next/image'
// import { Logo } from './_ui/logo'





export default function Footer() {
  
  return (
    <footer id='footer' className="flex items-center justify-center flex-wrap w-full h-auto py-5 text-opacity-85 bg-gradient-to-r from-transparent to-gray-700">
      <div className="flex h-auto items-center justify-start xl:1x2 w-[300px]">
        <div className='w-[110px]'>
          <Logo />
        </div>
        <p className='uppercase text-sm w-[250px] flex flex-wrap font-normal'>&copy;all rights reserved.</p>
      </div>
      <nav className=' items-center justify-between w-[150px] hidden'>
        <Link href='https://t.me/jshot27' target="_blank" className='hover:opacity-85' >
          <Image className=''
            src="/telegram.png"
            // fill={true}
            alt="video_art"
            width={40}
            height={40}
            sizes="(max-width: 40px) 5vw, 3vw"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
        </Link>

        <Link href='https://www.instagram.com/jshot27' target="_blank" className='hover:opacity-85'>
          <Image className=''
            src="/Instagram.png"
            // fill={true}
            alt="video_art"
            width={40}
            height={40}
            sizes="(max-width: 40px) 5vw, 3vw"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
        </Link>

        <Link href='https://www.behance.net/jshot27' target="_blank" className='hover:opacity-85'>
          <Image className=''
            src="/Behance.png"
            // fill={true}
            alt="video_art"
            width={40}
            height={40}
            sizes="(max-width: 40px) 5vw, 3vw"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
        </Link>

      </nav>
    </footer>
  )
}
