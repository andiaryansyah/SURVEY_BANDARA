import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const ButtonPrev = ({handleClick}) => {
  return (
    <>
        <button onClick={handleClick} className={`mr-3 bg-white text-[#182A68] py-2 px-4 w-full md:w-1/4 md:mx-0 cursor-pointer
         rounded border border-[#182A68] hover:bg-blue-700 hover:border-blue-700 hover:text-white transition duration-200 ease-in-out`}>
              <span className="flex justify-center items-center text-center gap-3"><AiOutlineArrowLeft className="hover:text-white"/> Sebelumnya</span>
          </button>
    </>
  )
}

export default ButtonPrev