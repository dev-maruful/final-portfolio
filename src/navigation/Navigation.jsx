import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-full">
      <ul className="flex flex-col gap-3 font-medium items-center justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#43d7f5] font-bold" : ""
          }
        >
          <li className="cursor-pointer hover:text-[#42d7f5]">Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#43d7f5] font-bold" : ""
          }
        >
          <li className="cursor-pointer hover:text-[#42d7f5]">About Me</li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-[#43d7f5] font-bold" : ""
          }
        >
          <li className="cursor-pointer hover:text-[#42d7f5]">My Skills</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-[#43d7f5] font-bold" : ""
          }
        >
          <li className="cursor-pointer hover:text-[#42d7f5]">My Projects</li>
        </NavLink>
        <li className="cursor-pointer hover:text-[#42d7f5]">Contact Me</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">My Blogs</li>
      </ul>
    </div>
  );
};

export default Navigation;
