
import Link from 'next/link'
import React from 'react'

export default function Navtop() {
  return (
    <nav className='flex flex-col md:flex-row items-center  ml-0 md:ml-16 md:mr-5 uppercase text-nowrap font-normal text-xl md:text-base space-y-10 md:space-y-0 md:space-x-10 backdrop-blur-xl'>
          <Link className='hover:opacity-80' href="/#portfolio">PORTFOLIO</Link>
          <Link className='hover:opacity-80' href="/#pipeline">creation</Link>
          <Link className='hover:opacity-80' href="/#aboutme">About</Link>
          <Link className='hover:opacity-80' href="/#contactme">Contact</Link>
          
    </nav>
    
  )
}
