import React, { useState } from "react";

import { images } from "../../constants";
import logo from "../../assets/logo.png";
import UploadFile from "../../components/UploadFile";

const PasBandara = () => {
  const [enabled ] = useState(true);
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();
  const [file6, setFile6] = useState();
  const [file7, setFile7] = useState();
  const [file8, setFile8] = useState();

  return (
    <div>
      <div className="relative">
        <img
          src={images.pasBandara}
          alt="pas-bandara"
          className="w-full h-72"
        />
        <div className="absolute right-8 left-px top-10 text-center text-white uppercase flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="mb-3 h-16 w-14" />
          <h1 className="mb-3 font-bold text-hxl">Permohonan Pas Bandara</h1>
          <h3 className="font-semibold">
            Badan layanan umum UPBU Sultan Bantilan
          </h3>
        </div>
      </div>

      <div className="m-10">
        <h1 className="font-semibold text-2xl mb-1">
          Form Permohonan PAS Bandara
        </h1>
        <p className="text-gray-400">
          Silahkan lengkapi dokumen permohonan anda di bawah ini
        </p>

        <div className="rounded bg-blue-50 px-8 py-5 " role="alert">
          <p>Unduh form persyaratan :</p>
          <div>
            <a
              href="https://drive.google.com/u/0/uc?id=161yFXdTcjg9OMdljE5uG_aUbXEQO0CfX&export=download"
              download="Contoh Surat Permohonan"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-500 hover:text-blue-700"
            >
              1. Surat Permohonan
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/u/0/uc?id=161yFXdTcjg9OMdljE5uG_aUbXEQO0CfX&export=download"
              download="Contoh surat pernyataan dari atasan ditempat bekerja"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-500 hover:text-blue-700"
            >
              2. Contoh surat pernyataan dari atasan ditempat bekerja
            </a>
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Upload Surat Permohonan (Dari Kantor Admin Bandara)</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file1}
              // onChange={handleChange}
              // onDelete={handleClear}
              setFile={setFile1}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Pas Foto ukuran 3x4 cm</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file2}
              setFile={setFile2}
              note={"* Hanya format file : .jpeg, .jpg"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Pernyataan dari atasan bekerja</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file3}
              setFile={setFile3}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Daftar riwayat hidup</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file4}
              setFile={setFile4}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Identitas diri (KTP, Paspor atau KITAS)</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file5}
              setFile={setFile5}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Keterangan Catatan Kepolisian (SKCK) kecuali bagi pegawai pemerintah dan pegawai BUMN</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file6}
              setFile={setFile6}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Keterangan Pegawai Kontrak (Copy)</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file7}
              setFile={setFile7}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Bebas Narkoba dari Rumah Sakit (Khusus yang bekerja di operasional terminal bandar udara)</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={file8}
              setFile={setFile8}
              note={"* Hanya format file : .pdf"}
              />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            // onClick={enabled === true ? handleClick : null}
            className={`text-white py-4 px-4 mt-8 w-96 cursor-pointer
                 rounded border transition duration-200 ease-in-out font-semibold ${
                   enabled === true
                     ? "bg-[#182A68] border-[#182A68] hover:bg-blue-700 "
                     : "bg-gray-300 border-gray-300 cursor-not-allowed"
                 } `}
          >
            Kirim Permohonan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasBandara;
