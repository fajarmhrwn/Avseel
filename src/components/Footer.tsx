import React from 'react'

const Footer = () => {
  return (
    <div className='h-32 w-full items-center justify-center flex'>
        <div className='flex items-center justify-center'>
            <img src="/images/Logo.png" alt="Logo" className='h-16 w-16 object-cover'/>
            <p className='font-jakarta ml-4 sm:ml-12'>&copy; AVSEEL 2023</p>
        </div>
    </div>
  )
}

export default Footer