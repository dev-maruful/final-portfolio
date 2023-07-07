import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen py-10">
      <h4>- Let's connect</h4>
      <h3 className="text-4xl font-bold mb-5">
        {"<"}Get in <span className="text-[#42d7f5]">touch!</span>
        {" />"}
      </h3>
      <div className="flex gap-10 h-full border-2 border-red-200">
        <div className="w-1/2">
          <p className="mb-10">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want to run past me. You
            can contact anytime at 24/7.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 border-2 border-[#42d7f5] rounded-md">
                <FaPhoneAlt></FaPhoneAlt>
              </div>
              <p className="font-medium">+88 01537450305</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 border-2 border-[#42d7f5] rounded-md">
                <FaEnvelope></FaEnvelope>
              </div>
              <p className="font-medium">maruful.islam401@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 border-2 border-[#42d7f5] rounded-md">
                <FaMapMarkedAlt></FaMapMarkedAlt>
              </div>
              <p className="font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-[#42d7f5] w-full py-3 pl-5 bg-opacity-20"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#42d7f5] w-full py-3 pl-5 bg-opacity-20"
          />
          <input
            type="text"
            placeholder="Write your message here"
            className="bg-[#42d7f5] w-full py-3 pl-5 bg-opacity-20 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
