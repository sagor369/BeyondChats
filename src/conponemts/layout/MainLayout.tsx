import React from "react";
import SenderList from "../ui/SenderList";
import Header from "../ui/Header";
import SenderMessage from "../ui/Sender/SenderMessage";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>

    <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 min-h-[100vh]">
      <div className="col-span-1 bg-blue-400 p-4">
        <Header></Header>
        <SenderList/>
      </div>
      <div className="lg:col-span-3 sm:hidden md:block bg-amber-200">
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
