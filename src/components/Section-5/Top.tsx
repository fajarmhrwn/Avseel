import { useCardContext } from '@/context/CardContext'
import React from 'react'

const Top = () => {
    const {setOpen2,setData2} = useCardContext()
    const handleClick = (data:string) => {
        setData2(data)
        setOpen2(true)
    }
  return (
    <div className='w-screen min-h-32 bg-[#3E5C44] flex flex-col items-center justify-center p-4'>
        <p className='font-jakarta font-bold text-gray-50 text-4xl text-center'>
        Award-winning Product
        </p>
        <div className='sm:flex justify-center items-center px-4 mt-5'>
            <img onClick={()=>{handleClick("nspc")}} src="/images/Juara1.png" alt="Juara Avseel NSPC" className='w-auto h-16 mb-12 sm:mb-2 sm:mr-24'/>
            <img onClick={()=>{handleClick("yisf")}} src="/images/Juara2.png" alt="Juara Avseel YISF" className='w-auto h-24 mb-12 sm:mb-2 sm:mr-24'/>
            <img onClick={()=>{handleClick("aiseef")}} src="/images/Juara3.png" alt="Juara Avseel AISEEF" className='w-auto h-24 mb-12 sm:mb-2 sm:mr-24'/>
            <img onClick={()=>{handleClick("myso")}} src="/images/Juara4.png" alt="Juara Avseel MYSO" className='w-32 h-32 mb-12 sm:mb-2 sm:mr-24'/>
        </div>
    </div>
  )
}

export default Top