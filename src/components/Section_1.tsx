"use client"
import React,{useRef,useEffect} from 'react'
import { motion,useInView,useAnimation } from "framer-motion"

const Section_1 = () => {
    const imageAnimation = useAnimation();
    const textAnimation = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref)
    const animationLaptop = async () => {
        await imageAnimation.start({
            opacity:1,
            transition:{
                duration:1,
                ease:'easeIn',
                delay:1
            }
        })
        await imageAnimation.start({
            left:0,
            transform:'translateX(50%)',
            transition:{
                duration:1,
                ease:'easeOut',
                delay:1
            }
        })
        await textAnimation.start({
            opacity:1,
            transition:{
                duration:1,
                ease:'easeIn'
            }
        })
        
    }
    const animateMobile = async () => {
        await imageAnimation.start({
            opacity:1,
            transition:{
                duration:1,
                ease:'easeIn',
            }
        })
        await textAnimation.start({
            opacity:1,
            transition:{
                duration:1,
                ease:'easeIn'
            }
        })
    }
    useEffect(() => {
        const screenWidth = window.innerWidth;
        if(isInView){
            setTimeout(() => {screenWidth < 500 ? animateMobile():animationLaptop()}, 1000);
        }else{
            imageAnimation.start({
                opacity:0,
                left:screenWidth <= 500 ? "" : '30%',
                transform:screenWidth <= 500 ? '' : 'translateX(50%)'
            })
            textAnimation.start({
                opacity:0,
            })
        }
    }, [isInView,imageAnimation,textAnimation])



  return (
    <div ref={ref} className="relative flex flex-col bg-[url('/images/Background3.png')] bg-cover bg-center h-128 sm:min-h-screen flex justify-center items-center sm:items-end p-12 pb-36 sm:pb-2">
        <motion.img src="/images/gen1.png" className='absolute left-1/2 transform -translate-x-1/2 w-32 h-auto sm:w-64'
        initial={{opacity:0}}
        animate={imageAnimation}
        / >
        <motion.p  className="font-jakarta absolute sm:font-extralight text-white text-center sm:text-right text-lg sm:text-3xl translate-y-44 sm:translate-y-0 w-3/4 sm:w-7/12"
        initial={{opacity:0}}
        animate={textAnimation}>
        Our first journey started with the first generation of AVSEEL as Organic Scented Repelling Spray.The product at this stage is applicated for external use, such as the skin.
        </motion.p>
    </div>

  )
}

export default Section_1