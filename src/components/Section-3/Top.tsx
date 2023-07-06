"use client"
import React,{useRef,useEffect} from 'react'
import { motion,useInView,useAnimation } from "framer-motion"

const Top = () => {
    const textAnimation = useAnimation();
    const circleAnimation = useAnimation();
    const imageAnimation = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref)
    const animate = async () => {
        await textAnimation.start({
                opacity:1,
                transition:{
                    duration:0.5,
                    ease:'easeIn',
                }
            })
        await imageAnimation.start({
            y:"3%",
            transition:{
                duration:1,
                ease:'easeInOut',
            }
        })
        await circleAnimation.start({
            opacity:1,
            scale:[null,1.5,1],
            transition:{
                duration:1,
                ease:'easeInOut',
            }
        })
    }
    useEffect(() => {
        if(isInView){
            animate()
        }else{
            textAnimation.start({
                opacity:0,
            })
            circleAnimation.start({
                opacity:0,
                scale:0,
            })
            imageAnimation.start({
                y:"100vh",
            })


        }

    }, [isInView,textAnimation])
  return (
    <div ref={ref} className='overflow-hidden relative  min-h-100  sm:min-h-screen bg-[#142419] pt-64 flex justify-center'>
        <div className='h-64 sm:h-128 bg-[#48855C] w-10/12 rounded-t-full flex justify-center'>
            <motion.p className='absolute top-24 sm:top-24 z-10 text-center font-jakarta text-white text-4xl sm:text-8xl sm:w-1/2 drop-shadow-2xl'
            initial={{opacity:0}}
            animate={textAnimation}>
            BRAND NEW<br/><span className='text-5xl sm:text-9xl font-bold'>AVSEEL X+</span>
            </motion.p>
            <motion.img src="/images/Gen3.png" className='absolute top-36 sm:top-24 w-72 sm:w-128 z-1 h-auto'
            initial={{y:"100vh"}}
            animate={imageAnimation}/>
        </div>
        <motion.div className='absolute top-72 sm:top-80 -rotate-12 right-12 sm:right-44 z-20 w-24 sm:w-44 h-24 sm:h-44 bg-white rounded-full flex justify-center items-center p-2'
            initial={{scale:0,opacity:0}}
            animate={circleAnimation}
            >
            <p className='text-center font-jakarta text-xs sm:text-lg'>
                <span className='font-bold text-3xl sm:text-7xl'>3</span><span className='font-bold text-md sm:text-5xl'>rd</span> Generation
            </p>
        </motion.div>
    </div>
  )
}

export default Top