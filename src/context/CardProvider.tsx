"use client"
import React,{useState} from 'react'
import { CardContext } from './CardContext';

interface contentItem {
  title:string,
  content:string,
}

interface CardProps {
  title: string;
  price: string[];
  content: contentItem[];
}

interface IProps {
  children:React.ReactNode
} 

export const CardProvider = ({children}:IProps) => {
  const [data, setData] = useState<CardProps|null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [open2, setOpen2] = useState<boolean>(false)
  const [data2, setData2] = useState<string|null>(null)

  return (
    <CardContext.Provider value={{data,setData,open,setOpen,open2,setOpen2,data2,setData2}}>
      {children}
    </CardContext.Provider>
  )
}
