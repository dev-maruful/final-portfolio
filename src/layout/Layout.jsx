import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MouseEffect from "../mouseEffect/MouseEffect";

const Layout = () => {
  return (
    <div className="grid md:grid-cols-4 min-h-screen font-montserrat">
      <div className="col-span-1 text-center py-10 border-r-2 border-gray-200">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-3">hello2</div>
      <MouseEffect></MouseEffect>
    </div>
  );
};

export default Layout;
