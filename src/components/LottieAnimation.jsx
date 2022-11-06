import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/successfully.json";
import { useNavigate } from "react-router-dom";

const LottieAnimation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
        navigate("/")
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Lottie style={{ height: "350px" }} animationData={animationData} />
      <div
        className="text-center font-bold text-blue-500"
        style={{ fontSize: "32px" }}
      >
        <h1>Survey anda berhasil terkirim</h1>
      </div>
      <div className=" mt-5 flex justify-center items-center">
        <p className="text-center text-xl w-1/2">
          Terima kasih atas kesediaan bapak/ibu yang bersedia meluangkan waktu
          guna mengisi survey
        </p>
      </div>
    </div>
  );
};

export default LottieAnimation;
