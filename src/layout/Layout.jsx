import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MouseEffect from "../mouseEffect/MouseEffect";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="grid md:grid-cols-4 min-h-screen font-montserrat relative">
      <div className="col-span-1 text-center border-r-2 border-gray-200 fixed w-1/4 min-h-screen max-h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-3 absolute right-0 w-3/4">
        <div className="max-w-4xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <MouseEffect></MouseEffect>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
