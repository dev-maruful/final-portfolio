import React from "react";
import project1 from "../assets/images/Projects/project1.png";
import project2 from "../assets/images/Projects/project2.png";
import project3 from "../assets/images/Projects/project3.png";
import project4 from "../assets/images/Projects/project4.png";
import project5 from "../assets/images/Projects/project5.png";
import project6 from "../assets/images/Projects/project6.png";

const Projects = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col justify-between">
      <div>
        <h3 className="text-4xl font-bold mb-5">
          {"<"}Full-Stack <span className="text-[#42d7f5]">Projects</span>
          {" />"}
        </h3>
        <div className="grid grid-cols-3 gap-5">
          <div className="w-full h-[200px] shadow-2xl flex items-center justify-center rounded-xl relative transition duration-200 transform hover:-translate-y-1">
            <img className="h-full rounded-xl" src={project1} alt="" />
            <div className="bg-black bg-opacity-75 text-white absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
              <a
                href="https://assignment-12-sportsmania.web.app/"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Live Site Link
              </a>
              <a
                href="https://github.com/tawsif-adnan/sportsMania-client"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Client Site Code
              </a>
              <a
                href="https://github.com/tawsif-adnan/sportsMania-server"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Server Side Code
              </a>
            </div>
          </div>
          <div className="w-full h-[200px] shadow-2xl flex items-center justify-center rounded-xl relative transition duration-200 transform hover:-translate-y-1">
            <img className="h-full rounded-xl" src={project2} alt="" />
            <div className="bg-black bg-opacity-75 text-white absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
              <a
                href="https://assignment-11-toygalaxy.web.app/"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Live Site Link
              </a>
              <a
                href="https://github.com/tawsif-adnan/toy-galaxy-client"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Client Site Code
              </a>
              <a
                href="https://github.com/tawsif-adnan/toy-galaxy-server"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Server Side Code
              </a>
            </div>
          </div>
          <div className="w-full h-[200px] shadow-2xl flex items-center justify-center rounded-xl relative transition duration-200 transform hover:-translate-y-1">
            <img className="h-full rounded-xl" src={project3} alt="" />
            <div className="bg-black bg-opacity-75 text-white absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
              <a
                href="https://assignment-10-rannaghor.web.app/"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Live Site Link
              </a>
              <a
                href="https://github.com/tawsif-adnan/rannaghor-client"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Client Site Code
              </a>
              <a
                href="https://github.com/tawsif-adnan/rannaghor-server"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-5">
          {"<"}User Interface(UI){" "}
          <span className="text-[#42d7f5]">Designs</span>
          {" />"}
        </h3>
        <div className="grid grid-cols-3 gap-5">
          <div className="w-full h-[200px] shadow-2xl flex items-center justify-center rounded-xl relative transition duration-200 transform hover:-translate-y-1">
            <img className="h-full rounded-xl" src={project4} alt="" />
            <div className="bg-black bg-opacity-75 text-white absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
              <a
                href="https://www.figma.com/file/UgJoXxAvMcRSU9p1OqmoXE/Unbound?type=design&mode=design&t=avJTJmKUDIPtN2Ir-1"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Figma File Link
              </a>
            </div>
          </div>
          <div className="w-full h-[200px] shadow-2xl flex items-center justify-center rounded-xl relative transition duration-200 transform hover:-translate-y-1">
            <img className="h-full rounded-xl" src={project5} alt="" />
            <div className="bg-black bg-opacity-75 text-white absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
              <a
                href="https://www.figma.com/file/CgksyildwxuDOn3T15Kk4g/worker?type=design&mode=design&t=avJTJmKUDIPtN2Ir-1"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Figma File Link
              </a>
            </div>
          </div>
          <div className="w-full h-[200px] shadow-2xl flex items-center justify-center rounded-xl relative transition duration-200 transform hover:-translate-y-1">
            <img className="h-full rounded-xl" src={project6} alt="" />
            <div className="bg-black bg-opacity-75 text-white absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
              <a
                href="https://www.figma.com/file/IOidbfdggKcZNiLnElvdbz/Techie?type=design&mode=design&t=avJTJmKUDIPtN2Ir-1"
                target="_blank"
                className="border-2 border-white px-5 py-1 rounded-3xl hover:bg-white hover:text-black cursor-pointer font-semibold hover:font-bold"
              >
                Figma File Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
