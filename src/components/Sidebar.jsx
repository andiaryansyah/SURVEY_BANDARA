import React, { useState } from "react";
import {
  RiDashboard3Line,
  RiArrowLeftSLine,
  RiSurveyLine,
} from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/logo.png";

const Sidebar1 = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Dashboard", icon: <RiDashboard3Line size={20} /> },
    { title: "Survey", icon: <RiSurveyLine size={20} /> },
    { title: "Pengaduan", icon: <CiBullhorn size={20} /> },
    { title: "PAS Bandara", icon: <BsCardChecklist size={20} /> },
    { title: "User", icon: <HiOutlineUserCircle size={20} /> },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-5 pt-8 bg-[#182A68] relative`}
    >
      <RiArrowLeftSLine
        size={20}
        className={`absolute cursor-pointer rounded-full bg-white -right-3 top-9  border-2 border-[#182A68] h-7 w-7 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          alt="logo"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white  tracking-wider origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          SULTAN BANTILAN
        </h1>
      </div>
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer px-2 py-3 hover:bg-light-white rounded-md ${
              index === 0 && "bg-light-white"
            }`}
          >
            <div>{menu.icon}</div>
            <div className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar1;
