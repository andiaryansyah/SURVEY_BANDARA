import React, { useState, useEffect } from "react";
import StarRating from "../../components/StarRating";
import ButtonNext from "../../components/ButtonNext";
import ButtonPrev from "../../components/ButtonPrev";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { saveGratifikasi } from "../../store/action/behaviourAction";

import { images } from "../../constants";

const QBehaviour3 = () => {
  const { steps, currentStep } = useSelector((state) => state.steps);
  const { gratifikasi } = useSelector((state) => state.behaviour);
  const {pekerjaan} = useSelector((state) => state.responden);
  
  const [comment, setComment] = useState(gratifikasi.comment);
  const [rating, setRating] = useState(gratifikasi.rating);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newGratifikasi = {
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
    navigate("/service-behaviour/question/4");
    dispatch(saveGratifikasi(newGratifikasi))
  };

  const handleprev = () => {
    navigate("/service-behaviour/question/2");
  };

  return (
    <div>
      <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="rounded bg-blue-100 px-8 py-5 m-10" role="alert">
        <div className="flex items-center mb-3 text-[#182A68]">
          <img src={images.gratificationIcon} alt="gratifikasi" width={20} />
          <p className="font-semibold ml-2">Gratifikasi</p>
        </div>
        <div className="text-sm w-11/12">
          <p>
            Pernyataan ini disampaikan untuk mengetahui apakah ada Petugas yang
            menerima/bahkan meminta imbalan uang untuk alasan administrasi,
            transpor, rokok, kopi, dll di luar ketentuan, pemberian imbalan
            barang berupa makanan jadi, rokok, parsel, perhiasan, elektronik,
            pakaian, bahan pangan, dll diluar ketentuan, pemberian imbalan
            fasilitas berupa akomodasi (hotel, resort perjalanan/jasa transport,
            komunikasi, hiburan, voucher belanja, dll) diluar ketentuan.
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold w-9/12 m-10 md:text-xl md:w-2/3 lg:w-1/2">
          Q3. Tidak ada penerimaan imbalan uang/barang/fasilitas diluar
          ketentuan yang berlaku pada unit layanan ini
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

export default QBehaviour3;
