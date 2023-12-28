import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


export default function Testimonials(props) {
    let reviews=props.reviews;
    const[id,setId]=useState(0)
    function leftShiftHandler() {
        if (id-1<0) {
            setId(reviews.length -1)
        }else{
            setId(id-1);
        }
    }
    function rightShiftHandler(params) {
        if (id+1>=reviews.length) {
            setId(0)
        }else{
            setId(id+1);
        }
    }
    function surpriseHandler(params) {
       setId(Math.floor(Math.random()*reviews.length))
    }
  return (
    <div className=' w-[84vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={reviews[id]}/>
        
        <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button
            onClick={rightShiftHandler}
             className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight/>
            </button>
        </div>
        <div className='mt-6'>
            <button
            onClick={surpriseHandler}
             className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
        px-10 py-2 rounded-md font-bold  text-white text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}
