import React from 'react'

const Bottom = () => {
  return (
    <div className='flex flex-col py-8 px-4 bg-[#334A37] items-center justicy-center'>
        <div className='sm:flex justify-center'>
            <img src="/images/sertifikat1_1.jpg" alt="Sertifikat HAKI Avseel 1" className='w-80 h-auto rounded-md sm:mr-12'/>
            {/* <img src="/images/sertifikat2_1.jpg" alt="" className='w-80 h-auto rounded-md mt-4'/> */}
        </div>
        <div className='sm:flex justify-center mt-12'>
            <img src="/images/sertifikat1_2.jpg" alt="Sertifikat HAKI Avseel 2" className='w-80 h-auto rounded-md  sm:mr-12'/>
            {/* <img src="/images/sertifikat2_2.jpg" alt="" className='w-80 h-auto rounded-md mt-4'/> */}
        </div>
        <div className='flex flex-col justify-center items-center mt-12'>
            <img src="/images/gubernur.jpg" alt="Sertifikat Gubernur Avseel" className='w-80 h-auto rounded-md  sm:mr-12'/>
            <p className='text-white font-jakarta font-light w-3/4 text-center mt-3'>
            Receiving an honorable appreciation from East Java governor, Dra. Hj. Khofifah Indar Parawansa, M.Si.
            </p>
        </div>
    </div>
  )
}

export default Bottom