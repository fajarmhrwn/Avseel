"use client"
import Hero from "@/components/Hero/Hero"
import Navbar from "@/components/Navbar"
import Section_1 from "@/components/Section_1"
import Section_2 from "@/components/Section_2"
import Section_3 from "@/components/Section-3/Section_3"
import Head from "next/head"
import Link from "next/link"
import Section_4 from "@/components/Section-4/Section_4"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
    </div>
  )
}
