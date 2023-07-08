'use client';

import { Carousel } from 'flowbite-react';

export default function SecCarousel() {
  return (
    <div className='relative h-72 sm:min-h-96 bg-[#142419] flex sm:pb-12 justify-center'>
            <div className='h-16 bg-[#48855C] w-10/12 flex justify-center'>
            </div>
            <div className='absolute top-0 h-64 sm:h-96 sm:h-100 w-11/12 sm:bottom-10'>
                <Carousel slideInterval={3000}>
                    <div className="flex h-full items-center justify-center bg-transparent">
                        <img src="/images/Gambar1.jpeg" alt="Carousel 1" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar2.jpeg" alt="Carousel 2" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar3.jpeg" alt="Carousel 3" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar4.jpeg" alt="Carousel 4" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                </Carousel>
            </div>
        </div>
  )
}


