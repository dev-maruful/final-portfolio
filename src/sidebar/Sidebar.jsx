import React from "react";
import profile_pic from "../assets/images/profile-picture.png";
import signature from "../assets/images/signature.png";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between py-10">
      <div className="mb-auto">
        <div className="mb-5">
          <div className="flex justify-center">
            <img
              className="rounded-full h-32 w-32 p-1 border-2 border-[#42d7f5]"
              src={profile_pic}
              alt=""
            />
          </div>
          <div className="flex flex-col relative items-center justify-center">
            <img className="w-[200px] h-[65px]" src={signature} alt="" />
            <h3 className="font-bold text-xl absolute top-5">
              MD. Maruful Islam
            </h3>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <Navigation></Navigation>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sidebar;
