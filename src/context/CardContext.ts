import React from "react"

interface contentItem {
    title:string,
    content:string,
  }
  
  interface CardProps {
    title: string;
    price: string[];
    content: contentItem[];
  }

  interface CardContext {
    data:CardProps|null,
    setData:React.Dispatch<React.SetStateAction<CardProps | null>> 
    open : boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    open2 : boolean,
    setOpen2:React.Dispatch<React.SetStateAction<boolean>>,
    data2 : string|null,
    setData2:React.Dispatch<React.SetStateAction<string | null>>
    }


export const CardContext = React.createContext<CardContext>({
    data:null,
    setData:()=>{}
    ,open:false
    ,setOpen:()=>{},
    open2:false
    ,setOpen2:()=>{}
    ,data2:null
    ,setData2:()=>{}
})

 
export const useCardContext = () => React.useContext(CardContext)