"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [open,setOpen] =useState(false)
  return (
    
<nav className="bg-[#d8bc90] border-[#d8bc90]">
  <div className="max-w-screen-xl flex flex-wrap items-center gap-12 mx-auto p-4 px-12">
    <a href="#" className="flex items-center">
        <Image src="/images/Logo.png" width={36} height={36} className="mr-3" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> <a href="#">Avseel</a></span>
    </a>
    <span className='block md:hidden grow'/>
    {/* Button SM */}
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={()=>{setOpen(!open)}}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {/* List of page section */}
    <div className={`${open ? "block" : "hidden" } w-full md:block sm:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#d8bc90]">
        <li>
          <Link to="hero" smooth={true} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="section_1" smooth={true} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">Gen 1</Link>
        </li>
        <li>
          <Link to="section_2" smooth={true} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">Gen 2</Link>
        </li>
        <li>
          <Link to="section_3" smooth={true} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">Gen 3</Link>
        </li>
        <li>
          <Link to="section_4" smooth={true} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">Price and Article</Link>
        </li>
        <li>
          <Link to="section_5" smooth={true} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">Certificate and Award</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar