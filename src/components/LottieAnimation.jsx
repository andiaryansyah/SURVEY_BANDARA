import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/successfully.json";
import { useNavigate } from "react-router-dom";
import { resetState } from "../store/action";
import { useDispatch } from "react-redux";

const LottieAnimation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(resetState())
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
