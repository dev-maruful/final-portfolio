import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-8 text-xl mb-3">
        <a
          className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-50 hover:cursor-pointer hover:text-[#3b5998]"
          target="_blank"
          href="https://www.facebook.com/annonymous.adnan"
        >
          <FaFacebookF></FaFacebookF>
        </a>
        <a
          className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-50 hover:cursor-pointer hover:text-[#0072b1]"
          target="_blank"
          href="https://www.linkedin.com/in/maruful-islam22/"
        >
          <FaLinkedinIn></FaLinkedinIn>
        </a>
        <a
          className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-50 hover:cursor-pointer"
          target="_blank"
          href="https://github.com/tawsif-adnan"
        >
          <FaGithub></FaGithub>
        </a>
      </div>
      <div>
        <p className="font-medium text-gray-400 text-center">
          Copyright © 2023 MD. Maruful Islam <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
