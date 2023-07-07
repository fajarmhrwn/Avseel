import React from 'react'
import Card from './Card'
import { useCardContext } from '@/context/CardContext'

interface contentItem {
    title:string,
    content:string,
  }
  
  interface CardProps {
    title: string;
    price: string[];
    content: contentItem[];
  }

const Modal = ({title,price,content}:CardProps) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <Card title={title} content={content} price={price} />
    </div>
  )
}

export default Modal