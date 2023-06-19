import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-8 text-xl mb-3">
        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-400 hover:cursor-pointer hover:text-[#3b5998]">
          <FaFacebookF></FaFacebookF>
        </div>
        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-400 hover:cursor-pointer hover:text-[#0072b1]">
          <FaLinkedinIn></FaLinkedinIn>
        </div>
        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-400 hover:cursor-pointer">
          <FaGithub></FaGithub>
        </div>
      </div>
      <div>
        <p className="font-medium text-gray-400">
          Copyright © 2023 MD. Maruful Islam <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
