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
  const [open, setOpen] = useState<boolean>(true)

  return (
    <CardContext.Provider value={{data,setData,open,setOpen}}>
      {children}
    </CardContext.Provider>
  )
}
