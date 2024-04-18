import React from 'react'
import Image from "next/image";

function Advertising() {
  return (
    <section className="parthners w-full min-h-20 border-b border-custom flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
	
		<div className="parthners_list flex items-center justify-between  w-[1000px] h-full p-5">
      <Image
          src="/discord.png"
          width={100}
          height={120}
          alt="fenix"
          sizes="10vw"
          style={{
            width: '10%',
            height: 'auto',
          }}          
        />
        
          <Image
          src="/isy.png"
          width={100}
          height={120}
          alt="fenix"
          sizes="10vw"
          style={{
            width: '10%',
            height: 'auto',
          }}
          />
          <Image
            src="/Fenix.png"
            width={100}
            height={120}
          alt="fenix"
          sizes="10vw"
          style={{
            width: '10%',
            height: 'auto',
          }}
          />
          <Image
            src="/immutable.png"
            width={100}
            height={120}
          alt="fenix"
          sizes="10vw"
          style={{
            width: '10%',
            height: 'auto',
          }}
          />
          <Image
            src="/bosy_coys.png"
            width={100}
            height={120}
          alt="fenix"
          sizes="10vw"
          style={{
            width: '10%',
            height: 'auto',
          }}
          />
		</div>
	{/* </div> */}
</section>
  )
}

export default Advertising