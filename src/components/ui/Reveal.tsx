"use client"
import React,{useEffect} from 'react'
import { motion,useAnimation,useInView } from "framer-motion"
import cn from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const divVariants = cva(
    'relative overflow-hidden',
)

export interface DivProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  href?: string
}

const Reveal = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, children, ...props }, ref) => {
    const textAnimation = useAnimation();
    const refInView = useInView(ref as any)
    useEffect(() => {
        if(refInView){
            textAnimation.start("visible")
        }else{
            textAnimation.start("hidden")
        }
    }, [refInView,textAnimation])


    return (
        <div ref={ref} className={cn(divVariants({className}))} {...props}>
            <motion.div
            variants={{
                hidden:{
                    opacity:0,
                    y:100,
                },
                visible:{
                    opacity:1,
                    y:0,
                }
            }}
            className="w-full h-full"
            initial='hidden'
            animate={textAnimation}
            transition={{
                duration:1,
                ease:'easeInOut',
            }}>
                {children}
            </motion.div>
        </div>
    )
  }
)
Reveal.displayName = 'Reveal'

export { Reveal, divVariants }