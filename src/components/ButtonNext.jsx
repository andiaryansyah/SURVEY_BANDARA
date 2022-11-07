import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../constants";

const ButtonNext = ({ handleClick, enabled = false, title = false }) => {
  return (
    <>
      <button
        onClick={enabled === true ? handleClick : null}
        className={`text-white py-2 px-4 w-full my-3 md:w-1/4 md:mx-3 md:my-0 cursor-pointer
         rounded border transition duration-200 ease-in-out ${
           enabled === true
             ? "bg-[#182A68] border-[#182A68] hover:bg-blue-700 hover:border-blue-700"
             : "bg-gray-300 border-gray-300 cursor-not-allowed"
         } `}
      >
        {title === true ? (
          <span className="flex justify-center text-center items-center gap-3">
            Kirim Survey <img src={images.send} alt="send" />
          </span>
        ) : (
          <span className="flex justify-center text-center items-center gap-3">
            Selanjutnya <AiOutlineArrowRight />
          </span>
        )}
      </button>
    </>
  );
};

export default ButtonNext;
