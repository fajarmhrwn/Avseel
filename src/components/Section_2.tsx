"use client"
import React,{useRef,useEffect} from 'react'
import { motion,useInView,useAnimation } from "framer-motion"

const Section_2 = () => {
    const textAnimation = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref)
    useEffect(() => {
        if(isInView){
            textAnimation.start({
                    opacity:1,
                    transition:{
                        duration:1,
                        ease:'easeIn',
                    }
                })
        }else{
            textAnimation.start({
                opacity:0,
            })
        }

    }, [isInView,textAnimation])



  return (
    <div ref={ref} className="relative flex flex-col bg-[url('/images/Background4.png')] bg-cover bg-center h-128 sm:min-h-screen flex justify-center items-center p-12 pb-36 sm:pb-2">
        <motion.p  className="font-jakarta absolute sm:font-extralight text-white text-center text-lg sm:text-3xl w-3/4 sm:w-7/12"
        initial={{opacity:0}}
        animate={textAnimation}>
        Continued to the <span className='font-bold'>second generation</span>, AVSEEL X, we present this calming essential oil which also acts as distressing media as novelty with a number of scent variation and ginger scent as our foremost smell. You can use AVSEEL X to increase your room aesthetic value!
        </motion.p>
        <img />
    </div>

  )
}

export default Section_2