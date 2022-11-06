import React from 'react'

const StepperControl = ({handleClick, currentStep, steps, enabled =false}) => {

  return (
    <div className="flex justify-start mt-10 mb-8 mx-10">
        <button onClick={() => handleClick()} className={`mr-3 bg-white text-blue-500 uppercase py-2 px-4 w-1/5 font-semibold cursor-pointer
         border-2 border-blue-500 hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out`}>
              Sebelumnya
          </button>
        <button onClick={() => handleClick("next")} className={`text-white uppercase py-2 px-4 w-1/5 font-semibold cursor-pointer
         border-2 transition duration-200 ease-in-out ${enabled === true ? "bg-blue-500 border-blue-500 hover:bg-blue-700" : "bg-gray-300 border-gray-300 cursor-not-allowed"} `}>
              Next
          </button>
    </div>
  )
}

export default StepperControl