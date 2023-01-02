import React, { useState, useEffect } from "react";
import ButtonNext from "../../components/ButtonNext";
import ButtonPrev from "../../components/ButtonPrev";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../constants";
import { savePerbaikan } from "../../store/action/evalutionAction";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../pages/Loading";

const QEvaluation2 = () => {

  const { steps, currentStep } = useSelector((state) => state.steps);
  const { pekerjaan, usia, gender, pendidikan } = useSelector((state) => state.responden);
  const { info, persyaratan, prosedur, waktu, biaya, sarana, respon, konsultasi } = useSelector((state) => state.quality)
  const { diskriminasi, kecurangan, gratifikasi, pungli, calo } = useSelector((state) => state.behaviour);
  const {evaluasi, perbaikan} = useSelector((state) => state.evaluation);
  
  const [repairing, setRepairing] = useState(perbaikan);
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {value, checked } = e.target;

    if (checked) {
      if (value === "Tidak ada yang perlu diperbaiki") {
        setRepairing([value],);  
      } else {
        let tempData = repairing.filter((e) => e !== "Tidak ada yang perlu diperbaiki")
        tempData.push(value)
        setRepairing(tempData);
      }
    }
    else {
      setRepairing(repairing.filter((e) => e !== value))
    }

  };

  useEffect(() => {
    if (repairing.length) {
      setEnabled(true)
    } else {
      setEnabled(false)
    }

  },[repairing])

  useEffect(() => {
    if(pekerjaan === "") {
      navigate("/")
    }
    // eslint-disable-next-line
  },[pekerjaan])

  const handleNext = () => {
    dispatch(savePerbaikan(repairing))
    let payload = {
      // produk_layanan: {
      //     produk_layanan: Lain-Lain
      // },
      identitas: {
          pekerjaan,
          usia,
          jenis_kelamin: gender,
          pendidikan_terakhir: pendidikan
      },
      kualitas_layanan: {
          informasi: info.rating,
          ket_informasi: info.comment,
          persyaratan: persyaratan.rating,
          ket_persyaratan: persyaratan.comment,
          prosedur: prosedur.rating,
          ket_prosedur: prosedur.comment,
          waktu_penyelesaian: waktu.rating,
          ket_waktu_penyelesaian: waktu.comment,
          tarif: biaya.rating,
          ket_tarif: biaya.comment,
          sarana_prasarana: sarana.rating,
          ket_sarana_prasarana: sarana.comment,
          respon: respon.rating,
          ket_respon: respon.comment,
          konsultasi: konsultasi.rating,
          ket_konsultasi: konsultasi.comment
      },
      penyimpangan_pelayanan: {
          diskriminasi: diskriminasi.rating,
          ket_diskriminasi: diskriminasi.comment,
          kecurangan: kecurangan.rating,
          ket_kecurangan: kecurangan.comment,
          gratifikasi: gratifikasi.rating,
          ket_gratifikasi: gratifikasi.comment,
          pungli: pungli.rating,
          ket_pungli: pungli.comment,
          calo: calo.rating,
          ket_calo: calo.comment
      },
      evaluasi_perbaikan: {
          pengarahan: evaluasi,
          perbaikan: perbaikan
      }
    }
    setLoading(true);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/survey/add`,
      data: payload
    })
      .then((res) => {
      setLoading(false);
      navigate("/survey-done");
    })
    .catch((err) => {
      setLoading(false);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      // console.log(err);
    })
  };

  const handleprev = () => {
    dispatch(savePerbaikan(repairing))
    navigate("/evaluation/question/1");
  };

  return (
    <>
    {
      loading ? <Loading /> :
    <div>
      <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="rounded bg-blue-100 px-8 py-5 m-10" role="alert">
        <div className="flex items-center mb-3 text-[#182A68]">
          <img src={images.repairIcon} alt="repairIcon" width={20} />
          <p className="font-semibold ml-2">Perbaikan</p>
        </div>
        <div className="text-sm w-11/12">
          <p>
            Silahkan pilih bagian yang perlu diperbaiki pada unit layanan ini.
            Jawaban bisa dipilih lebih dari 1 (satu)
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold w-9/12 m-10 md:text-xl md:w-1/2">
          Q2. Bagaimana penlilaian Bapak/ Ibu terhadap pilihan dibawah ini yang
          perlu diperbaiki pada unit layanan ini
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-10 md:11/12 lg:w-7/12">
        <div className="form-check flex ">
          <input
            type="checkbox"
            name="agree"
            value="Kebijakan Pelayanan"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Kebijakan Pelayanan")}
            />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Kebijakan Pelayanan
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Profesionalisme SDM"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Profesionalisme SDM")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Profesionalisme SDM
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Kualitas Sarana Prasarana"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Kualitas Sarana Prasarana")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Kualitas Sarana Prasarana
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Sistem Informasi dan Pelayanan Publik"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Sistem Informasi dan Pelayanan Publik")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Sistem Informasi dan Pelayanan Publik
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Konsultasi dan Pengaduan"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Konsultasi dan Pengaduan")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Konsultasi dan Pengaduan
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Penghilangan Praktik Pungli"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Penghilangan Praktik Pungli")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Penghilangan Praktik Pungli
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Penghilangan Praktik Diluar Prosedur"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Penghilangan Praktik Diluar Prosedur")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Penghilangan Praktik Diluar Prosedur
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Penghilangan Praktik Percaloan"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Penghilangan Praktik Percaloan")}
          />
          <label
            className="form-check flex-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Penghilangan Praktik Percaloan
          </label>
        </div>

        <div className="form-check flex">
          <input
            type="checkbox"
            name="agree"
            value="Tidak ada yang perlu diperbaiki"
            id="agree"
            className="peer h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={handleChange}
            checked={repairing.includes("Tidak ada yang perlu diperbaiki")}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Tidak ada yang perlu diperbaiki
          </label>
        </div>

      </div>

      <div className="grid mx-10 mt-10 m-auto md:flex md:justify-startmd:mb-8 ">
        <ButtonPrev handleClick={handleprev} />
        <ButtonNext handleClick={handleNext} enabled={enabled} title={true}/>
      </div>
    </div>
    }
    </>
  );
};

export default QEvaluation2;
