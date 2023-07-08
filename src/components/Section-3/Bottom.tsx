import React,{useRef} from 'react'
import SlidingInterval from './Carousel';
import { Reveal } from '../ui/Reveal';

const Bottom = () => {
    const ref = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
  return (
    <>
        <div className='overflow-hidden relative  min-h-100  sm:min-h-screen bg-[#142419] flex justify-center'>
            <div className='h-fit bg-[#48855C] w-10/12 grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-4 p-12'>
                <Reveal ref={ref3} className="col-span-2 sm:col-span-2 row-span-2 rounded-lg w-full h-full">
                    <div className="rounded-lg w-full h-full bg-black flex items-center justify-center">
                        <img src="/images/kotak1.png" alt="Kelebihan 1" className="object-cover"/>
                    </div>
                </Reveal>
                <Reveal ref={ref3} className="rounded-lg w-full h-full">
                    <div className="rounded-lg w-full h-full bg-black flex items-center justify-center">
                        <img src="/images/kotak2.png" alt="Kelebihan 2" className="object-fill"/>
                    </div>
                </Reveal>
                <Reveal ref={ref2} className="rounded-lg w-full h-full">
                    <div className="rounded-lg w-full h-full bg-black flex items-center justify-center">
                        <img src="/images/kotak3.png" alt="Kelebihan 3" className="object-fill"/>
                    </div>
                </Reveal>
                <Reveal ref={ref4} className="rounded-lg w-full h-full">
                    <div className="hidden sm:block  rounded-lg w-full h-full bg-black flex items-center justify-center">
                        <img src="/images/kotak4.png" alt="Kelebihan 4" className="object-fill"/>
                    </div>
                </Reveal>
                <Reveal ref={ref} className="col-span-2 sm:col-span-2 rounded-lg w-full h-full">
                    <div className="rounded-lg w-full h-full bg-black flex items-center justify-center">
                        <img src="/images/kotak6.png" alt="Kelebihan 6" className="object-fill"/>
                    </div>
                </Reveal>
                <Reveal ref={ref} className="col-span-2 sm:col-span-3 rounded-lg w-full h-full">
                    <div className="rounded-lg w-full h-full bg-black flex items-center justify-center">
                        <img src="/images/kotak5.png" alt="Kelebihan 5" className="object-fill"/>
                    </div>
                </Reveal>
            </div>
        </div>
    </>
  )
}

export default Bottom