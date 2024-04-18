import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <section className=" flex items-center justify-center w-full py-5 border-b border-custom  bg-gradient-to-r from-transparent to-gray-700 " id="aboutme">
	<div className="flex flex-col items-center justify-center">
		<h1 className='uppercase text-center'>YAROVISION.</h1>
		<p className='text-center max-w-[1000px] pb-3 text-sm sm:text-base'>The company provides services for creating 3Dmotion videoproducts for the purpose of advertising or designing your website. You can find us on social networks</p>
		<nav className=" flex items-center justify-center space-x-5">
			<Link href='https://t.me/jshot27' target="_blank" className='hover:opacity-85' >
          <Image className=''
            src="/telegram.png"
            // fill={true}
            alt="video_art"
            width={50}
            height={50}
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
            width={50}
            height={50}
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
            width={50}
            height={50}
            sizes="(max-width: 40px) 5vw, 3vw"
            style={{ objectFit: "cover", objectPosition: " " }}
            priority={true}
          />
        </Link>
		</nav>
	</div>
</section>
  )
}

export default About