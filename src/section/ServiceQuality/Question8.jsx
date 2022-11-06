import React, { useState, useEffect } from "react";
import StarRating from "../../components/StarRating";
import ButtonNext from "../../components/ButtonNext";
import ButtonPrev from "../../components/ButtonPrev";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../../components/Stepper";
import { changeCurrentStep } from "../../store/action/stepperAction";
import { images } from "../../constants";
import { saveKonsultasi } from "../../store/action/qualityAction";

const Question8 = () => {
  const {steps, currentStep} = useSelector((state) => state.steps);
  const {konsultasi} = useSelector((state) => state.quality);
  const {pekerjaan} = useSelector((state) => state.responden);
 
  const [comment, setComment] = useState(konsultasi.comment);
  const [rating, setRating] = useState(konsultasi.rating);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newKonsultasi = {
    rating:rating,
    comment:comment,
  }

  const handleChange = (value) => {
    setRating(value);

    if (value > 3 ) {
      setComment("")
    }
  };

  useEffect(() => {
    if( rating > 0) {
      setEnabled(true)
    }
  },[rating])

  useEffect(() => {
    if(pekerjaan === "") {
      navigate("/")
    }
    // eslint-disable-next-line
  },[pekerjaan])

  const handleNext = () => {
    dispatch(saveKonsultasi(newKonsultasi))

    dispatch(changeCurrentStep(2))
    navigate("/survey");
  };

  const handleprev = () => {
    navigate("/service-quality/question/7");
  };

  return (
    <div>
      <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="rounded bg-blue-100 px-8 py-5 m-10" role="alert">
        <div className="flex items-center mb-3 text-blue-500">
          <img src={images.consultationIcon} alt="consultationIcon" width={20} />
          <p className="font-semibold ml-2">Konsultasi dan Pengaduan</p>
        </div>
        <div className="text-sm w-11/12">
          <p>
            Pernyataan ini disampaikan untuk melihat apakah sarana layanan
            konsultasi dan pengaduan beragam (tempat konsultasi dan
            pengaduan/hotline/call center/media online), prosedur untuk
            melakukan konsultasi dan pengaduan mudah, respon konsultasi dan
            pengaduan cepat serta tindak lanjut proses penanganan konsultasi dan
            pengaduan jelas.
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold w-9/12 m-10 md:text-xl md:w-2/3 lg:w-1/2">
          Q8. Layanan konsultasi dan pengaduan yang disediakan unit layanan ini
          mudah digunakan/diakses
        </h1>
      </div>

      <div className="m-10">
        <StarRating
          count={5}
          size={40}
          value={rating}
          activeColor={"#2F80ED"}
          inactiveColor={"#2F80ED50"}
          onChange={handleChange}
          commentValue={comment}
          onChangeComment={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="grid mx-10 m-auto md:flex md:justify-start md:mt-10 md:mb-8 md:w-3/4 lg:w-2/3">
        <ButtonPrev handleClick={handleprev} />
        <ButtonNext handleClick={handleNext} enabled={enabled} />
      </div>
    </div>
  );
};

export default Question8;
