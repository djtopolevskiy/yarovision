import React from 'react'
import Link from 'next/link'
import Image from 'next/image';



export default function Layout({
  // logo,
  // navtop,
  // toggle,
}: {
  // logo?: React.ReactNode;
  // navtop?: React.ReactNode;
  // toggle?: React.ReactNode;
}) {
  return (
    <footer className="flex items-center justify-between w-full h-auto text-[14px] text-opacity-60">
      <div className="container flex h-11 items-center justify-start xl:1x2 w-full px-10">
        footer
        {/* <div className="hover:text-primary flex w-[135px] h-11">{logo}</div> */}
{/*         
        {navtop}
        {toggle} */}

        
      </div>
    </footer>
  )
}
