import React from "react";
// import Sidebar from "../../components/Sidebar";
import Sidebar1 from "../../components/Sidebar1";
import { GrNotification } from "react-icons/gr";
import user from "../../assets/user.png";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      {/* <Sidebar /> */}
      <Sidebar1 />
      <div className="w-full flex-col">
        <section className="w-full px-9">
          <div className="pt-12 flex justify-end items-center space-x-9">
            <GrNotification size={20} />
            <img
              src={user}
              alt="user"
              className="h-9 w-9 object-cover rounded-full"
            />
          </div>
        </section>
        <section className="w-full bg-blue-200">Content bottom</section>
      </div>
    </div>
  );
};

export default Dashboard;
