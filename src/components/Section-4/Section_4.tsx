import React from 'react'
import Bottom from './Bottom'
import { Top } from './Top'

const Section_4 = ({id}:{id:string}) => {
  return (
    <div className='min-h-fit bg-[#d8bc90] p-12' id={id}>
        <Top />
        <Bottom/>
    </div>
  )
}

export default Section_4