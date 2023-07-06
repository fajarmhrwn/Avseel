import React from "react";

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
    content:contentItem[]
}

export const CarouselItem = ({ item, width,title,content,...props }:CarouselProps) => {
  return (
    <div className="inline-flex h-3/4 overflow-hidden" style={{ width: width }}>
        <div className="grow  h-72 sm:h-100 flex justify-center py-12">
            <img src={item.icon} alt="" className="max-w-full max-h-full sm:mr-32"/>
            <div className="w-72 sm:w-100 h-fit rounded-lg bg-white">
                <ul className="p-8">
                    {
                        content.map((item,index)=>{
                            return(
                                <li key={index} className="flex mb-4">
                                    <div className="flex flex-col">
                                        <p className="text-center sm:text-2xl font-bold">{item.title}</p>
                                        <p className="text-center sm:text-lg">{item.content}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  );
};