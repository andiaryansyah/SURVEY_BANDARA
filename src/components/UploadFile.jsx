import React from "react";

import { AiOutlineCloudUpload, AiOutlineDelete } from "react-icons/ai";
import { images } from "../constants";

const UploadFile = ({ file, setFile, onChange, onDelete, note }) => {

    const handleChange = (e) => {
        const image = e.target.files[0];
        setFile(image);
      };
    
      const handleClear = () => {
        setFile("");
      };

    function getExtension(filename) {
        return filename.split('.').pop()
      }
  return (
    <>
      {file ? (
        <div className="px-10 flex justify-between items-center w-full h-28 bg-blue-50 rounded-lg border-2 border-blue-400 border-solid cursor-pointer">
          <div className="flex items-center">
            { getExtension(file["name"]).toLowerCase() === "pdf" ? <img src={images.formatPDF} alt="pdf" /> : <img src={images.formatJPG} alt="jpg" /> }
            
            <p className="font-semibold ml-2">{file && `${file.name}`}</p>
          </div>
          <div className="rounded-full bg-gray-50 p-3 hover:bg-gray-200">
            <AiOutlineDelete size={30} className="text-red-600" onClick={handleClear}/>
          </div>
        </div>
      ) : (
        <>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-36 bg-gray-100 rounded-lg border-2 border-blue-500 border-dashed cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <AiOutlineCloudUpload size={45} className="text-blue-500 mb-4" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-blue-500">Pilih file</span>{" "}
              atau drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ukuran file maksimal 1MB
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>
          <div className="text-blue-500 mt-2 font-medium">
            <h1>
              <i>{note}</i>
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default UploadFile;
