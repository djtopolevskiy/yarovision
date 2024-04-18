import React from 'react'
import Image from 'next/image'
import Card_1 from './_ui/card_1'
import Card_2 from './_ui/card_2'
import Card_3 from './_ui/card_3'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"

function Cards() {
  return (
    <section className='cards w-full h-auto flex items-center justify-center border-b border-custom relative ' >
      <div className='flex relative w-[1730px] h-[600px] bg-gradient-to-r from-transparent to-gray-700'>
        <Image className='hidden lg:flex'
        src="/cards.png"
        fill={true}
        alt="cards" 
        // width={1730}
        // height={671}
        sizes="(max-width: 1730px)"
        style={{ objectFit: "fill", objectPosition: "" }}
        priority={true}
      />
      </div>
      

      <div className="advant_title container absolute flex flex-col items-center justify-between w-full space-y-20 py-5">
				<h3 className='flex flex-wrap text-center text-sm ms:text-xl md:text-2xl lg:text-3xl px-0 md:px-6 backdrop-blur-xl border rounded-lg border-transparent'>Advantages of 3d motion design</h3>
			  <div className="advant_blocks lg:flex flex-row items-center justify-between w-full hidden ">
          <Card_1 />
          <Card_2 />
          <Card_3 />
        </div>
        <div className="advant_carusel flex flex-row items-center justify-center self-center w-auto lg:hidden ">
          <Carousel className='w-[270px] flex justify-center'>
            <CarouselContent>
              <CarouselItem><Card_1 /></CarouselItem>
              <CarouselItem><Card_2 /></CarouselItem>
              <CarouselItem><Card_3 /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='-top-6 left-1/3 bg-transparent border-primary' />
            <CarouselNext className='-top-6 right-1/3 bg-transparent border-primary' />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Cards