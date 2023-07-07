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
import Footer from "@/components/Footer"
import Modal2 from "@/components/ui/Modal2"

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
  const {data,open,data2,open2} = useCardContext()
  return (
    <>
      <div>
        <Navbar/>
        <Hero id="hero"/>
        <Section_1 id="section_1"/>
        <Section_2 id="section_2"/>
        <Section_3 id="section_3"/>
        <Section_4 id="section_4"/>
        <Section_5 id="section_5"/>
        <Footer />
      </div>
      {
       data &&  open && <Modal title={data.title}  content={data.content} price={data.price}/>
      }
      <Modal2 visible={open2} title={data2 as string}/>
    </>
  )
}
