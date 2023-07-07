import React from 'react'
import Bottom from './Bottom'
import Top from './Top'

const Section_5 = ({id}:{id:string}) => {
  return (
    <div className='w-full h-fit' id={id}>
        <Top/>
        <Bottom/>
    </div>
  )
}

export default Section_5