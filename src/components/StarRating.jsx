import React from "react";
import { AiFillStar } from 'react-icons/ai';
const StarRating = ({
  commentValue,
  onChangeComment,
  count,
  value,
  inactiveColor = "#ddd",
  size = 24,
  activeColor = "#f00",
  onChange,
}) => {
  const stars = Array.from({ length: count }, () => <AiFillStar size={35}/>);
  let info = "Belum ada penilaian";
  let textColor = "text-blue-300";
  let show = "hidden";

  const handleChange = (value) => {
    onChange(value + 1);
  };

  switch (value) {
    case 1:
      info = "Tidak Memadai";
      textColor = "text-gray-900";
      show = "";
      break;
    case 2:
      info = "Kurang Memadai";
      textColor = "text-gray-900";
      show = "";
      break;
    case 3:
      info = "Cukup Memadai";
      textColor = "text-gray-900";
      show = "";
      break;
    case 4:
      info = "Memadai";
      textColor = "text-gray-900";
      break;
    case 5:
      info = "Sangat Memadai";
      textColor = "text-gray-900";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="flex items-center">
        <div className="flex">
          {stars.map((s, index) => {
            let style = inactiveColor;
            if (index < value) {
              style = activeColor;
            }
            return (
              <span
                className={`cursor-pointer`}
                key={index}
                style={{
                  color: style,
                  width: size,
                  height: size,
                  fontSize: size,
                }}
                onClick={() => handleChange(index)}
              >
                {s}
              </span>
            );
          })}
        </div>
        <div className={`ml-6 font-semibold ${textColor}`}>{info}</div>
      </div>

      <div className={`transition duration-300 ${show}`}>
        <p className="mb-2">Apakah ada yang ingin disampaikan?</p>
        <textarea
          className="border-2 focus:outline-none focus:ring-gray-400 focus:border-gray-400 placeholder-gray-300 w-80 md:w-6/12" 
          placeholder="Ketikkan komentar anda disini.."
          cols="45"
          rows="5"
          value={commentValue}
          onChange={onChangeComment}
        ></textarea>
      </div>
    </>
  );
};

export default StarRating;
