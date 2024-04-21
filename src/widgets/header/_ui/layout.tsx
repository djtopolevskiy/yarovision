import React from 'react'


export default function Layout({
  logo,
  navtop,
  toggle,
  burger,
}: {
  logo?: React.ReactNode;
  navtop?: React.ReactNode;
  toggle?: React.ReactNode;
  burger?: React.ReactNode;
}) {
  return (
    <header className="flex items-center justify-between w-full text-[14px] text-opacity-60 fixed z-50 backdrop-blur-xl my-1">
      <div className="sm:container flex h-11 items-center justify-between xl:1x2 w-full px-2 sm:px-10 ">
        <div className="hover:text-primary flex w-[135px] h-11">{logo}</div>
        <div className='hidden md:flex'>
          {navtop}
        </div>
        <div className='flex space-x-2'>
          {toggle}
        {burger}
        </div>
        
      </div>
    </header>
  )
}
