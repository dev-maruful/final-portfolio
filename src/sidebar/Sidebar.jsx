import React from "react";
import profile_pic from "../assets/images/profile-picture.png";
import signature from "../assets/images/signature.png";
import Footer from "../footer/Footer";

const Sidebar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="rounded-full h-32 w-32 p-1 border-2 border-[#42d7f5]"
          src={profile_pic}
          alt=""
        />
      </div>
      <div className="flex flex-col relative items-center justify-center">
        <img className="w-[200px] h-[65px]" src={signature} alt="" />
        <h3 className="font-bold text-xl absolute top-5">MD. Maruful Islam</h3>
      </div>
      <div className="min-h-[280px]">navbar</div>
      <Footer></Footer>
    </div>
  );
};

export default Sidebar;
