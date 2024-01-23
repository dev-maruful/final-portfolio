import React from "react";
import TitleChange from "../TitleChange/TitleChange";
import Lottie from "lottie-react";
import blog from "../assets/Blog.json";

const Home = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <h2 className="text-6xl font-bold mb-3">
            {"<"}Hi, I'm <span className="text-[#42d7f5]">Maruf!</span>
            {" />"}
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
            I'm currently working with web development technologies and
            libraries like JavaScript and Node.js
            <br />
            Currently studying in Graphic Arts Institute
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-5 mb-10">
            <button className="border-2 max-w-[150px] px-3 py-2 rounded border-[#42d7f5] text-lg font-semibold hover:bg-[#42d7f5] hover:text-white">
              Hire Me!
            </button>
            <a
              className="max-w-[250px] px-3 py-2 rounded bg-[#42d7f5] text-lg text-white font-semibold hover:border-2 hover:border-[#42d7f5] hover:text-black hover:bg-transparent"
              target="_blank"
              href="https://drive.google.com/file/d/1rP0JIvRIMKjBOUKtHzGMRYQLio7p_3O1/view?usp=sharing"
            >
              Download Resume!
            </a>
          </div>
          <div className="border-l-4 pl-5 border-[#42d7f5] text-lg font-medium">
            maruful.islam401@gmail.com <br />
            +880 15374 50305 <br />
            Dhaka, Bangladesh
          </div>
        </div>
        <div className="h-80 w-80">
          <Lottie animationData={blog} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
