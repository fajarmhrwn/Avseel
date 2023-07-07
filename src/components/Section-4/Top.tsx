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
          content:'Mint scented'
        },
        {
          title:'test',
          content:'Applied to the skin'
        },
        {
          title:'test',
          content:'Pocket-sized'
        },
      ],
      price:['50k','3.33']
    },
    {
      item: {
        icon: '/images/OilDropper.png'
      },
      width: '100%',
      title: 'Gen 2',
      content:[
        {
          title:'test',
          content:'Ginger-lemongrass scented'
        }
        ,
        {
          title:'test',
          content:'Relieving aromatherapy'
        }
        ,
        {
          title:'test',
          content:'Increase room aesthetic value'
        }
      ],
      price:['82K','5.47']
    },
    {
      item: {
        icon: '/images/Gen2.jpg'
      },
      width: '100%',
      title: 'Gen 2 +',
      content:[
        {
          title:'test',
          content:'1 box include 2 bottle avseel x, candle, and burner'
        },
      ],
      price:['175K','11.62']
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
          content:'Boost up immune system'
        }
        ,
        {
          title:'test',
          content:'Cleaner, fresher, and healthier air'
        }
        ,
        {
          title:'test',
          content:'IoT based'
        }
      ],
      price:['500K','33.35']
    },
  ]
  return (
    <div className='flex justify-center'>
      <Carousel items={items} />
    </div>
  )
}
