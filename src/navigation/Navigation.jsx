import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-full">
      <ul className="flex flex-col gap-3 font-medium items-center justify-center">
        <Link to="/">
          <li className="cursor-pointer hover:text-[#42d7f5]">Home</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer hover:text-[#42d7f5]">About Me</li>
        </Link>
        <li className="cursor-pointer hover:text-[#42d7f5]">My Skills</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">My Projects</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">Contact Me</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">My Blogs</li>
      </ul>
    </div>
  );
};

export default Navigation;
