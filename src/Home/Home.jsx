import React from "react";
import TitleChange from "../TitleChange/TitleChange";

const Home = () => {
  return (
    <div className="min-h-screen py-16">
      <h2 className="text-6xl font-bold">
        Hi, I'm <span className="text-[#42d7f5]">Maruf!</span>
      </h2>
      <h2 className="text-6xl font-bold flex items-center gap-3">
        <span>I'm a</span>
        <span className="text-[#42d7f5]">
          <TitleChange></TitleChange>
        </span>
      </h2>
    </div>
  );
};

export default Home;
