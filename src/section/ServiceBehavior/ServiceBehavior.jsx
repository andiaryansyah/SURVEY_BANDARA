import React, {useEffect} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import { changeCurrentStep } from "../../store/action/stepperAction";

const ServiceBehavior = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pekerjaan} = useSelector((state) => state.responden);

  const data = [
    {
      icon: images.discriminationIcon,
      title: "Diskriminasi",
    },
    {
      icon: images.fraudIcon,
      title: "Kecurangan",
    },
    {
      icon: images.gratificationIcon,
      title: "Gratifikasi",
    },
    {
      icon: images.brokerIcon,
      title: "Pungli",
    },
    {
      icon: images.extortionIcon,
      title: "Calo",
    },
  ];

  useEffect(() => {
    if(pekerjaan === "") {
      navigate("/")
    }
    // eslint-disable-next-line
  },[pekerjaan])

  const handleNext = () => {
    navigate("/service-behaviour/question/1");
  };

  const handlePrev = () => {
    dispatch(changeCurrentStep(1));
    navigate("/service-quality/question/8");
  };

  return (
    <div className="mx-10">
      <div className="my-10">
        <h1 className="font-semibold lg:text-2xl sm:text-xs md:text-lg">
          Pada bagian ini, kami akan meminta pendapat Bapak/Ibu mengenai
          beberapa hal terkait perilaku petugas pelayanan yang menyimpang pada
          unit layanan ini.
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-7 w-10/12 m-auto md:m-0">
        {data.map((data, index) => (
          <div
            key={index}
            className="rounded bg-blue-100 border border-blue-300 px-8 py-2 "
            role="alert"
          >
            <div className=" text-b lue-900 p-4 ">
              <img src={data.icon} alt="icon" className="m-auto" />
              <h3 className="text-center mt-5">{data.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid m-auto md:m-0 md:flex md:items-center md:justify-start md:mt-8">
        <button
          onClick={handlePrev}
          className={`mr-3 bg-white text-[#182A68] py-2 px-4  w-full mt-5 md:w-1/5 md:mt-0 cursor-pointer
         rounded border border-[#182A68] hover:bg-blue-700 hover:border-blue-700 hover:text-white transition duration-200 ease-in-out`}
        >
          <span className="flex justify-center text-center items-center gap-3">
          <AiOutlineArrowLeft className="hover:text-white"/> Sebelumnya
          </span>
        </button>

        <button
          onClick={handleNext}
          className={`text-white py-2 px-4 cursor-pointer my-3 w-full md:w-1/5 md:ml-3
          rounded border transition duration-200 ease-in-out bg-[#182A68] border-[#182A68] hover:bg-blue-700 hover:border-blue-700`}
        >
          <span className="flex justify-center text-center items-center gap-3">
            Selanjutnya <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceBehavior;
