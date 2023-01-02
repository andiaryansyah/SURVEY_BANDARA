import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { AiFillInfoCircle } from "react-icons/ai";
import logo from "../../assets/logo.png";
import cover from "../../assets/bg1.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentStep } from "../../store/action/stepperAction";
import { saveGender, savePekerjaan, savePendidikan, saveUsia } from "../../store/action/respondenAction";

const Landingpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {pekerjaan, usia, gender, pendidikan} = useSelector((state) => state.responden)

  const [enabled, setEnabled] = useState(false);
  const [job, setJob] = useState(pekerjaan)
  const [age, setAge] = useState(usia)
  const [jk, setJk] = useState(gender)
  const [education, setEducation] = useState(pendidikan)

  const lastEducation = [
    {value:"Sekolah Dasar (SD)", label:"Sekolah Dasar (SD)"},
    {value:"Sekolah Menengah Pertama (SMP)", label:"Sekolah Menengah Pertama (SMP)"},
    {value:"Sekolah Menengah Atas (SMA)", label:"Sekolah Menengah Atas (SMA)"},
    {value:"Diploma", label:"Diploma"},
    {value:"Strata 1 (S1)",label:"Strata 1 (S1)"},
    {value:"Strata 2 (S2)", label:"Strata 2 (S2)"},
    {value:"Strata 3 (S3)", label:"Strata 3 (S3)"},
  ];
  const genders = [
    { value:"Laki-Laki", label:"Laki-Laki"},
    { value:"Perempuan", label:"Perempuan"}
  ];
  const ages = [
    { value:"18-20 Tahun", label: "18-20 Tahun"},
    { value:"21-30 Tahun", label: "21-30 Tahun"},
    { value:"31-40 Tahun", label: "31-40 Tahun"},
    { value:"41-50 Tahun", label: "41-50 Tahun"},
    { value:"51-60 Tahun", label: "51-60 Tahun"},
    { value:"> 60 Tahun", label: "> 60 Tahun"},
  ];

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(savePekerjaan(job));
    dispatch(saveUsia(age));
    dispatch(saveGender(jk));
    dispatch(savePendidikan(education));

    dispatch(changeCurrentStep(1));
    navigate("/survey");
  };

  useEffect(() => {

    if(age && job && jk && education) {
      setEnabled(true)
    }else {
      setEnabled(false)
    }

  },[age, job, jk, education]);
  
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-2 md:auto-rows-min">
          <div
            className="text-white h-full"
            style={{
              background: `url(${cover})`,
            }}
          >
            <div className="flex mt-10 ml-9">
              <div className="mr-3">
                <img src={logo} alt="logo" />
              </div>
              <div className="font-semibold tracking-wide">
                <h1>
                  BADAN LAYANAN UMUM <br /> UPBU SULTAN BANTILAN
                </h1>
              </div>
            </div>
            <div className="pt-7 px-10">
              <fieldset className="border-t bg-white"></fieldset>
            </div>
            <div
              className="font-bold leading-normal tracking-wide"
              style={{ fontSize: "48px", padding: "88px 40px" }}
            >
              <h1>SURVEY KEPUASAN PELANGGAN</h1>
            </div>
          </div>

          <div className="my-10 mx-10">
            <div className="rounded bg-blue-100 px-8 py-5 " role="alert">
              <div className="flex items-start mb-6 text-[#182A68]">
                <AiFillInfoCircle size={40} className="mr-3" />
                <p className=" font-medium text-sm">
                  Untuk meningkatkan kualitas pelayanan publik, KEMENTERIAN
                  PERHUBUNGAN melakukan survei pelayanan publik.
                </p>
              </div>
              <div className="text-sm">
                <p>
                  Mohon kesediaan untuk mengisi kuesioner ini sesuai dengan
                  penilaian yang Bapak/Ibu/Saudara alami selama menggunakan
                  layanan pada UPBU KELAS II SULTAN BANTILAN, KEMENTERIAN
                  PERHUBUNGAN. <br />
                  <br />
                  <b>
                    {" "}
                    Harap jawab setiap pertanyaan sejujur mungkin. Semua jawaban
                    dirahasiakan. Terima kasih atas kerja sama anda.
                  </b>
                </p>
              </div>
            </div>

            <div className="mt-8 mb-1">
              <h1 className="font-semibold text-2xl">Identitas Responden</h1>
              <p className="text-gray-400 mb-5">
                Silahkan masukkan identitas anda pada form dibawah ini
              </p>
            </div>

            {/* <form className="mt-8"> */}
              <label className="block">
                <span className="block text-slate-700 mb-1">
                  <b>Pekerjaan</b> (Wajib diisi)
                </span>
                <input
                  type="text"
                  placeholder="Cth: Karyawan Swasta"
                  className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none 
                     border-gray-400 focus:ring-blue-500 focus:border-blue-700"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  required
                />
              </label>

              <label className="block mt-4">
                <span className="block text-slate-700 mb-1"><b>Usia</b> (Wajib diisi)</span>
              <Select
                options={ages}
                placeholder="Pilih usia anda"
                value={ages.find((option) => {
                  return option.value === age
               })}
                onChange={(e) => setAge(e.value, e.label)}
                required
              />
              </label>

              <label className="block mt-4">
                <span className="block text-slate-700 mb-1"><b>Jenis Kelamin</b> (Wajib diisi)</span>
              <Select
                options={genders}
                placeholder="Pilih jenis kelamin anda"
                value={genders.find((option) => {
                  return option.value === jk
               })}
                onChange={(e) => setJk(e.value, e.label)}
                required
              />
              </label>

              <label className="block mt-4">
                <span className="block text-slate-700 mb-1"><b>Pendidikan</b> (Wajib diisi)</span>
              <Select
                menuPlacement="top"
                options={lastEducation}
                placeholder="Pilih pendidikan terakhir anda"
                value={lastEducation.find((option) => {
                  return option.value === education
               })}
                onChange={(e) => setEducation(e.value, e.label)}
                required
              />
              </label>
              
              <button
                onClick={enabled === true ? handleClick : null}
                className={`text-white py-2 px-4 mt-8 w-full cursor-pointer
                 rounded border transition duration-200 ease-in-out ${
                   enabled === true
                     ? "bg-[#182A68] border-[#182A68] hover:bg-blue-700 "
                     : "bg-gray-300 border-gray-300 cursor-not-allowed"
                 } `}
              >
                Isi Survey Sekarang
              </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
