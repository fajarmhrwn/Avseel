import { useCardContext } from "@/context/CardContext";
import React from "react";
import Card from "./Card";

interface contentItem {
    title:string,
    content:string,
}


export interface CarouselProps {
    item:{
        icon:string,
    },
    width:string,
    title:string,
    price:string[],
    content:contentItem[]
}

export const CarouselItem = ({ item, width,title,content,price,...props }:CarouselProps) => {
    const {setData,setOpen} = useCardContext()
    const CardProps ={
        title:title,
        content:content,
        price:price
    }
    const openModal = () => {
        setData(CardProps)
        setOpen(true)
    }
  return (
    <div className="inline-flex h-fit overflow-hidden" style={{ width: width }}>
        <div className="grow h-fit sm:h-100 flex justify-center py-12">
            <img src={item.icon} alt="" className="sm:max-w-full max-h-full sm:mr-32" onClick={openModal}/>
            <div className="sm:block hidden">
                <Card title={title} content={content} price={price} />
            </div>
        </div>
    </div>
  );
};