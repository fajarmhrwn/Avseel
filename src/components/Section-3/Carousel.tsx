'use client';

import { Carousel } from 'flowbite-react';

export default function SecCarousel() {
  return (
    <div className='relative min-h-96 bg-[#142419] flex sm:pb-12 justify-center'>
            <div className='h-72 bg-[#48855C] w-10/12 pt-12 flex justify-center'>
                <Carousel className='absolute h-96 sm:h-100 w-11/12 sm:bottom-10' slideInterval={3000}>
                    <div className="flex h-full items-center justify-center bg-transparent">
                        <img src="/images/Gambar1.jpeg" alt="" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar2.jpeg" alt="" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar3.jpeg" alt="" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar4.jpeg" alt="" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                    <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                        <img src="/images/Gambar5.jpeg" alt="" className="rounded-md object-fill w-[50rem] h-auto"/>
                    </div>
                </Carousel>
            </div>
        </div>
  )
}


