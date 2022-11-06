import React, { useState, useEffect } from "react";
import StarRating from "../../components/StarRating";
import ButtonNext from "../../components/ButtonNext";
import ButtonPrev from "../../components/ButtonPrev";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../../components/Stepper";
import { images } from "../../constants";
import { saveWaktu } from "../../store/action/qualityAction";

const Question4 = () => {
  const {steps, currentStep} = useSelector((state) => state.steps);
  const { waktu } = useSelector((state) => state.quality);
  const {pekerjaan} = useSelector((state) => state.responden);

  const [comment, setComment] = useState(waktu.comment);
  const [rating, setRating] = useState(waktu.rating);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newWaktu = {
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
    navigate("/service-quality/question/5");
    dispatch(saveWaktu(newWaktu))
  };

  const handleprev = () => {
    navigate("/service-quality/question/3");
  };

  return (
    <div>
      <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="rounded bg-blue-100 px-8 py-5 m-10" role="alert">
        <div className="flex items-center mb-3 text-blue-500">
          <img src={images.timeIcon} alt="timeIcon" width={20}/>
          <p className="font-semibold ml-2">Waktu Penyelesaian</p>
        </div>
        <div className="text-sm w-11/12">
          <p>
            Pernyataan ini disampaikan untuk melihat apakah informasi jangka
            waktu penyelesaian pelayanan dapat dipahami dengan jelas, jangka
            waktu penyelesaian pelayanan tersebut wajar, dan jangka waktu
            penyelesaian pelayanan sesuai dengan yang diinformasikan.
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold w-9/12 m-10 md:text-xl md:w-2/3 lg:w-1/2">
          Q4. Jangka waktu penyelesaian pelayanan yang diterima Bapak/Ibu sesuai
          dengan yang ditetapkan unit layanan ini
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

export default Question4;
