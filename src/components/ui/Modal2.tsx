import React from 'react'
import { useCardContext } from '../../context/CardContext'

interface IProps {
    visible:boolean,
    title:string
}

const item = [
    {
    title:'nspc',
    logo:'/images/nspc.png',
    content:[
        {
            image:'/images/nspc_1.jpg',
            desc:'photo with Prof. Dr. Ir. Raldi Artono Koestoer lecturer from University of Indonesia as judge at NSPC 2023'
        },
        {
            image:'/images/nspc_2.jpg',
            desc:'Awarding ceremony at NSPC 2023 with Mr. Budi Santoso M.Pd., CHt. as founder of Prestasi Pendidik Indonesia, Avseel X team received gold medal'
        }
        ]
    },
    {
        title:'aiseef',   
        logo:'/images/aiseef.png',  
        content:[
           {
               image:'/images/aiseef1.jpg',
               desc:'Photo with Ms. Mada Sophianingrum, S.T., M.T., MSc. as judge at AISEEF 2023'
           },
           {
               image:'/images/aiseef3.jpg',
               desc:'Awarding ceremony at AISEEF 2023, Avseel team received gold medal and MYSO special award'
           }
           ]
       },
       {
        title:'myso',
        logo:'/images/myso.png',
        content:[
            {
                image:'/images/myso1.jpg',
                desc:'Special award from Malaysia Young Scientist Organization (MYSO)'
            }
        ]
       },
       {
        title:'yisf',
        logo:'/images/yisf.png',
        content:[
            {
                image:'/images/yisf1.jpg',
                desc:'Photo with judge from thailand at YISF 2023'
            }
            ,
            {
                image:'/images/yisf2.jpg',
                desc:'Awarding ceremony at YISF 2023, Avseel team received gold medal'

            }
        ]
       }
]

const Modal2 = ({visible,title}:IProps,) => {
    const {setOpen2} = useCardContext()
    if(!visible) return null
  return (
    <div className='fixed z-30 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white w-3/4 sm:w-96 min-h-fit rounded-[20px] p-8 shadow-xl'>
            <button className='text-black self-place-start text-xl font-bold font-jakarta' onClick={()=>{setOpen2(false)}}>
                &#9932;
            </button>
            {
                item.map((item,index)=>{
                    if(item.title == title){
                        return (
                            <>
                                <div className='flex justify-center'>
                                    <img src={item.logo} alt="" className='w-16 h-auto mb-4'/>
                                </div>
                                {
                                    item.content.map((item,index)=>{
                                        return(
                                            <>
                                                <div className='flex justify-center'>
                                                    <img src={item.image} alt="" className='w-64 rounded-md h-auto mb-3 mt-3'/>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <p className='font-jakarta text-xs'>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                
                            </>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default Modal2