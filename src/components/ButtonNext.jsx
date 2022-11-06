import React from "react";
import { images } from "../constants";

const ButtonNext = ({ handleClick, enabled = false, title = false }) => {
  return (
    <>
      <button
        onClick={enabled === true ? handleClick : null}
        className={`text-white py-2 px-4 w-full my-3 md:w-1/4 md:mx-3 md:my-0 font-semibold cursor-pointer
         rounded border transition duration-200 ease-in-out ${
           enabled === true
             ? "bg-blue-500 border-blue-500 hover:bg-blue-700"
             : "bg-gray-300 border-gray-300 cursor-not-allowed"
         } `}
      >
        {title === true ? (
          <span className="flex justify-center text-center gap-3">
            Kirim Survey <img src={images.send} alt="send" />
          </span>
        ) : (
          <span className="flex justify-center text-center gap-3">
            Selanjutnya <img src={images.next} alt="next" />
          </span>
        )}
      </button>
    </>
  );
};

export default ButtonNext;
