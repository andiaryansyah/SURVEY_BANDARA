import React, { useState, useEffect } from "react";
import ButtonNext from "../../components/ButtonNext";
import ButtonPrev from "../../components/ButtonPrev";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentStep } from "../../store/action/stepperAction";
import { images } from "../../constants";
import { saveEvaluasi } from "../../store/action/evalutionAction";

const QEvaluation1 = () => {
  const { steps, currentStep } = useSelector((state) => state.steps);
  const { evaluasi } = useSelector((state) => state.evaluation);
  const {pekerjaan} = useSelector((state) => state.responden);

  const [evaluation, setEvaluation] = useState(evaluasi);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEvaluation(e.target.value);
  };

  useEffect(() => {
    if( evaluation) {
      setEnabled(true)
    }
  },[evaluation])

  useEffect(() => {
    if(pekerjaan === "") {
      navigate("/")
    }
    // eslint-disable-next-line
  },[pekerjaan])

  const handleNext = () => {
    navigate("/evaluation/question/2");
    dispatch(saveEvaluasi(evaluation));
  };

  const handleprev = () => {
    dispatch(changeCurrentStep(3));
    navigate("/survey");
  };

  return (
    <div>
      <div className="relative mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="rounded bg-blue-100 px-8 py-5 m-10" role="alert">
        <div className="flex items-center mb-3 text-[#182A68]">
          <img src={images.briefingIcon} alt="briefingIcon" width={20} />
          <p className="font-semibold ml-2">Pengarahan Petugas/Pegawai</p>
        </div>
        <div className="text-sm w-11/12">
          <p>Silahkan pilih salah satu dari jawaban berikut.</p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold w-9/12 m-10 md:text-xl md:w-9/12">
          Q1. Sebelum menjawab survei ini, apakah ada pegawai/pejabat pada unit
          layanan ini yang mengarahkan Bapak/Ibu untuk memberikan jawaban yang
          bagus-bagus/baik-baik saja?
        </h1>
      </div>

      <div className="mx-10">
        <fieldset>
        <div className="flex items-center text-center">
            <input
              id="Ya"
              className=" h-4 w-4 peer/Ya"
              type="radio"
              name="evaluasi"
              value="Ya"
              onChange={handleChange}
              checked={evaluation === 'Ya'}
            />
            <label htmlFor="Ya" className="peer-checked/Ya:text-gray-900 ml-2">
              Ya
            </label>
          </div>

          <div className="flex items-center text-center">
            <input
              id="Tidak"
              className=" h-4 w-4 peer/Tidak"
              type="radio"
              name="evaluasi"
              value="Tidak"
              onChange={handleChange}
              checked={evaluation === 'Tidak'}
            />
            <label
              htmlFor="Tidak"
              className="peer-checked/Tidak:text-gray-900 ml-2"
            >
              Tidak
            </label>
          </div>

        </fieldset>
      </div>

      <div className=" grid mx-10 mt-10 m-auto md:flex md:justify-start md:mb-8 md:w-3/4 lg:w-2/3">
        <ButtonPrev handleClick={handleprev} />
        <ButtonNext handleClick={handleNext} enabled={enabled} title={false} />
      </div>
    </div>
  );
};

export default QEvaluation1;
