import React from "react";

const Navigation = () => {
  return (
    <div className="h-full">
      <ul className="flex flex-col gap-3 font-medium items-center justify-center">
        <li className="cursor-pointer hover:text-[#42d7f5]">About</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">Skills</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">Projects</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">Contact</li>
        <li className="cursor-pointer hover:text-[#42d7f5]">Blogs</li>
      </ul>
    </div>
  );
};

export default Navigation;
