import React from "react";
import profile from "../assets/images/profile-picture.png";

const About = () => {
  return (
    <div className="py-16 min-h-screen flex flex-col justify-between">
      <div className="flex items-center gap-8">
        <div className="w-2/3">
          <h3 className="text-4xl font-bold mb-5">
            About <span className="text-[#42d7f5]">Myself!</span>
          </h3>
          <div className="text-base flex flex-col gap-5">
            <p>
              Hello there, My name is{" "}
              <span className="text-[#42d7f5] font-medium font-montserrat">
                MD. Maruful Islam
              </span>
              . I'm a Full Stack Developer and I'm very passionate and dedicated
              to my work.
            </p>
            <p>
              With 1+ years of experience as a web developer, I have acquired
              the skills and knowledge necessary to make your project a success.
              I enjoy every step of the design and development process, from
              discussion and collaboration.
            </p>
            <p>
              I am student of Computer Engineering and Technology at Graphic
              Arts Institute. Currently I'm studying in 3<sup>rd</sup> year.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="border-b-2 border-[#42d7f5] text-lg">Age</p>
                <p className="text-base font-medium">21</p>
              </div>
              <div>
                <p className="border-b-2 border-[#42d7f5] text-lg">Born In</p>
                <p className="text-base font-medium">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="border-b-2 border-[#42d7f5] text-lg">Email</p>
                <p className="text-base font-medium">
                  maruful.islam401@gmail.com
                </p>
              </div>
              <div>
                <p className="border-b-2 border-[#42d7f5] text-lg">Phone</p>
                <p className="text-base font-medium">+880 15374 50305</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img className="rounded-full w-72 h-72" src={profile} alt="" />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-full bg-teal-200 rounded py-7 flex flex-col items-center justify-center hover:bg-transparent border-2 border-teal-200 hover:border-teal-400">
          <p className="text-4xl mb-3 font-bold">1+</p>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>
        <div className="w-full bg-indigo-200 rounded py-7 flex flex-col items-center justify-center hover:bg-transparent border-2 border-indigo-200 hover:border-indigo-400">
          <p className="text-4xl mb-3 font-bold">20+</p>
          <p className="text-lg font-medium">Projects Completed</p>
        </div>
        <div className="w-full bg-cyan-200 rounded py-7 flex flex-col items-center justify-center hover:bg-transparent border-2 border-cyan-200 hover:border-cyan-400">
          <p className="text-4xl mb-3 font-bold">1+</p>
          <p className="text-lg font-medium">Clients Work</p>
        </div>
      </div>
    </div>
  );
};

export default About;
