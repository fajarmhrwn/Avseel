import React, { useState } from "react";
import { CarouselItem,CarouselProps} from "./CarouselItem";
import "./Carousel.css";
export const Carousel = ({items}:{items:CarouselProps[]}) => {
  const [activeIndex, setActiveIndex] = useState<Number>(0);
  const updateIndex = (newIndex:number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="overflow-hidden w-full h-full flex flex-col justify-center">
    <div>
        <p className="sm:ml-2 font-jakarta text-lg sm:text-2xl font-bold text-white">AVSEEL</p>
        {items.map((item, index) => {
        return (
            <button
            key={index}
            className="indicator-buttons"
            onClick={() => {
                updateIndex(index);
            }}
            >
            <span
                className={`text-3xl sm:text-5xl font-jakarta font-bold mr-4 sm:mr-12 ${
                index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                }`}
            >
                {item.title}
            </span>
            </button>
        );
        })}
    </div>
      <div
        className="whitespace-nowrap transition-transform duration-300 box-shadow-sm"
        style={{ transform: `translate(-${activeIndex as number * 100}%)`
     }}
      >
        {items.map((item,key) => {
          return <CarouselItem key={key} item={item.item} title={item.title} content={item.content} width={"100%"} />;
        })}
      </div>

    </div>
  );
};