"use client"
import React, { useEffect } from "react"
import Hero from "@/components/Hero/Hero"
import Navbar from "@/components/Navbar"
import Section_1 from "@/components/Section_1"
import Section_2 from "@/components/Section_2"
import Section_3 from "@/components/Section-3/Section_3"
import Section_4 from "@/components/Section-4/Section_4"
import Modal from "@/components/ui/Modal"
import { useCardContext } from "@/context/CardContext"
import Section_5 from "@/components/Section-5/Section_5"

interface contentItem {
  title:string,
  content:string,
}

interface CardProps {
  title: string;
  price: string[];
  content: contentItem[];
}

export default function Home() {
  const {data,open} = useCardContext()
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
        <Section_5/>
      </div>
      {
       data &&  open && <Modal title={data.title}  content={data.content} price={data.price}/>
      }
    </>
  )
}
