import React from "react";
import TitleChange from "../TitleChange/TitleChange";

const Home = () => {
  return (
    <div className="min-h-screen py-16 flex flex-col justify-between">
      <div>
        <h2 className="text-6xl font-bold mb-3">
          Hi, I'm <span className="text-[#42d7f5]">Maruf!</span>
        </h2>
        <h2 className="text-5xl font-bold flex items-center gap-3">
          <span>I'm a</span>
          <span className="text-[#42d7f5]">
            <TitleChange></TitleChange>
          </span>
        </h2>
      </div>
      <div className="text-lg font-semibold">
        <p>
          I'm a student of Computer Engineering and Technology
          <br />
          I'm currently working with web development technologies and libraries
          like JavaScript and Node.js
          <br />
          Currently studying in Graphic Arts Institute
        </p>
      </div>
      <button className="border-2 max-w-[150px] px-3 py-2 rounded border-[#42d7f5] text-lg font-semibold hover:bg-[#42d7f5] hover:text-white">
        Hire Me!
      </button>
      <div className="border-l-4 pl-5 border-[#42d7f5] text-lg font-medium">
        maruful.islam401@gmail.com <br />
        +880 15374 50305 <br />
        Dhaka, Bangladesh
      </div>
    </div>
  );
};

export default Home;
