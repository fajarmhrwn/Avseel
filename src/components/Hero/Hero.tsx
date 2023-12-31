"use client"
import React, { useRef, useEffect } from 'react';
import { motion,useInView,useAnimation } from "framer-motion"
import './Hero.css';

const Hero = ({id}:{id:string}) => {
  
  const heroRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(heroRef);
  const animation = useAnimation();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const transformValue = screenWidth <= 500 ? "translateY(220%)" : "translateY(150%)";
    if (isInView) {
      animation.start({
        transform: transformValue,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    }
    if (!isInView) {
      animation.start({
        transform: "translateY(0%)",
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, animation]);


  return (
    <div className="relative" id={id}>
      <motion.img
        src="/images/OilDropper.png"
        className="absolute z-20 left-32 w-48 sm:w-72 h-auto top-10"
        alt="Logo"
        animate={animation}
      />
      <div  className="sm:relative bg-[url('/images/Background.png')] bg-cover bg-center overflow-hidden h-128 sm:min-h-screen flex justify-center items-end pb-36 sm:pb-2 sm:justify-end">
        <p  className="font-jakarta text-white text-center sm:text-left text-3xl sm:text-7xl sm:absolute sm:bottom-48 sm:right-12">
          <span className="text-[20px]">Avseel</span>
          <br />
          Experience
          <br />
          <span className="font-bold">the Magic of Nature</span>
          <br />
          in Your Own Space
        </p>
      </div>
      <div className="bg-[url('/images/Background2.png')] p-8 pb-24 sm:pb-0 bg-cover bg-center overflow-hidden h-128 sm:min-h-screen flex items-end sm:items-center justify-center sm:justify-end">
        <p ref={heroRef} className="font-jakarta text-white text-center sm:text-left sm:w-6/12 sm:text-5xl">
          AVSEEL has been <span className="font-bold">everyone's companion</span> not only limited merely to mosquito repellent, yet beyond. We have developed the product with determination by <span className="font-bold">listening to consumers</span> and to <span className="font-bold">crucial environmental issues</span>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
