import { Carousel } from '../ui/Carousel'
import React from 'react'

export const Top = () => {
  const items = [
    {
      item: {
        icon: '/images/Gen1.png'
      },
      width: '100%',
      title: 'Gen 1',
      content:[
        {
          title:'test',
          content:'test'
        },
        {
          title:'test',
          content:'test'
        },
        {
          title:'test',
          content:'test'
        },
        {
          title:'test',
          content:'test'
        },
        {
          title:'test',
          content:'test'
        }
      ]
    },
    {
      item: {
        icon: '/images/Gen2.jpg'
      },
      width: '100%',
      title: 'Gen 2',
      content:[
        {
          title:'test',
          content:'test'
        }
      ]
    },
    {
      item: {
        icon: '/images/Gen3.png'
      },
      width: '100%',
      title: 'Gen 3',
      content:[
        {
          title:'test',
          content:'test'
        }
      ]
    },
  ]
  return (
    <div className='flex justify-center'>
      <Carousel items={items} />
    </div>
  )
}
