import React, { useState, useEffect } from "react";
import StarRating from "../../components/StarRating";
import ButtonNext from "../../components/ButtonNext";
import ButtonPrev from "../../components/ButtonPrev";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../../components/Stepper";
import { images } from "../../constants";
import { savePersyaratan } from "../../store/action/qualityAction";

const Question2 = () => {
  const {steps, currentStep} = useSelector((state) => state.steps);
  const {persyaratan} = useSelector((state) => state.quality);
  const {pekerjaan} = useSelector((state) => state.responden);
 
  const [comment, setComment] = useState(persyaratan.comment);
  const [rating, setRating] = useState(persyaratan.rating);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newPersyaratan = {
    rating:rating,
    comment:comment,
  }

  useEffect(() => {
    if(pekerjaan === "") {
      navigate("/")
    }
    // eslint-disable-next-line
  },[pekerjaan])

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

  const handleNext = () => {
    navigate("/service-quality/question/3");
    dispatch(savePersyaratan(newPersyaratan))
  };

  const handleprev = () => {
    navigate("/service-quality/question/1");
  };

  

  return (
    <div>
      <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="rounded bg-blue-100 px-8 py-5 m-10" role="alert">
        <div className="flex items-center mb-3 text-[#182A68]">
          <img src={images.conditionIcon} alt="conditionIcon" width={20}/>
          <p className="font-semibold ml-2">Persyaratan</p>
        </div>
        <div className="text-sm w-11/12">
          <p>
            Pernyataan ini disampaikan untuk melihat apakah informasi
            persyaratan layanan dapat dipahami dengan jelas dan sesuai untuk
            mendapatkan produk/jenis pelayanan, serta penerapan persyaratan
            pelayanan sesuai dengan yang diinformasikan.
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold w-9/12 m-10 md:text-xl md:w-2/3 lg:w-1/2">
          Q2. Persyaratan pelayanan yang diinformasikan sesuai dengan
          persyaratan yang ditetapkan unit layanan ini
        </h1>
      </div>

      <div className="m-10">
        <StarRating
          count={5}
          size={40}
          value={rating}
          activeColor={"#facc15"}
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

export default Question2;
