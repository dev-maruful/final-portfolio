import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hf7gu2a",
        "template_0lfm2gd",
        form.current,
        "sAXQMbq2WIFXWtYgG"
      )
      .then(
        (result) => {
          // console.log(result.text);
          e.target.reset();
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen py-10">
      <h4>- Let's connect</h4>
      <h3 className="text-4xl font-bold mb-10">
        {"<"}Get in <span className="text-[#42d7f5]">touch!</span>
        {" />"}
      </h3>
      <div className="flex items-center justify-center">
        <div className="flex gap-10 h-full">
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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-1/2 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="bg-[#42d7f5] w-full py-3 pl-5 bg-opacity-20"
            />
            <input
              name="from_email"
              type="email"
              placeholder="Enter your email address"
              className="bg-[#42d7f5] w-full py-3 pl-5 bg-opacity-20"
            />
            <input
              name="message"
              type="text"
              placeholder="Write your message here"
              className="bg-[#42d7f5] w-full py-3 pl-5 bg-opacity-20 h-32"
            />
            <button
              type="submit"
              className="w-1/3 px-3 py-2 bg-[#42d7f5] text-lg text-white font-semibold hover:text-black hover:bg-cyan-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

export default Contact;
