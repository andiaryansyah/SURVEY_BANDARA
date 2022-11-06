import React from 'react'
import { images } from '../constants'

const ButtonPrev = ({handleClick}) => {
  return (
    <>
        <button onClick={handleClick} className={`mr-3 bg-white text-blue-500 py-2 px-4 w-full md:w-1/4 md:mx-0 font-semibold cursor-pointer
         rounded border border-blue-500 hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out`}>
              <span className="flex justify-center text-center gap-3"><img src={images.prev} alt="prev"/> Sebelumnya</span>
          </button>
    </>
  )
}

export default ButtonPrev