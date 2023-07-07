import React from 'react';
import { useCardContext } from '@/context/CardContext';

interface contentItem {
  title:string,
  content:string,
}

interface CardProps {
  title: string;
  price: string[];
  content: contentItem[];
}


const Card = ({title,price,content}:CardProps) => {
  const {setOpen} = useCardContext()
  return (
    <div className='w-80 h-fit rounded-md sm:shadow-2xl bg-transparent'>
      <button className='text-white self-place-start text-xl font-bold font-jakarta  block sm:hidden ' onClick={()=>{setOpen(false)}}>
        &#9932;
      </button>
      <div className='relative bg-[#39714D] w-full h-24 rounded-t-[30px] flex overflow-hidden justify-end p-4'>
        <img src="/images/LogoLG.png" alt="" className="absolute -left-5 -top-4 w-32 -rotate-90" />
        <p className='font-jakarta text-xl text-[#DBC49A] font-light text-right absolute'>
          Avseel<br />
          <span className='font-bold text-4xl'>{title}</span>
        </p>
      </div>
      <div className='bg-[#2C3B2F] w-full h-fit flex flex-col items-center py-6 px-4 whitespace-normal'>
        {
          content.map((item,key)=>{
            return(
              <>
                <div className="w-11/12 bg-[#DBC49A] py-2 px-4 rounded-md mt-4">
                  <p className="whitespace-normal font-jakarta">
                    {item.content}
                  </p>
                </div>
              </>
            )
          })
        }
      </div>
      <div className='bg-[#222F25] w-full h-fit rounded-b-[30px] flex justify-center p-4'>
        <div className='w-full'>
          <p className='whitespace-normal font-jakarta text-4xl font-bold text-[#DBC49A] text-center'>
            IDR {price[0]}<br/><span className='font-light text-2xl'>USD {price[1]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
