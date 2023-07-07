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
    }


export const CardContext = React.createContext<CardContext>({
    data:null,
    setData:()=>{}
    ,open:false
    ,setOpen:()=>{}
})

 
export const useCardContext = () => React.useContext(CardContext)