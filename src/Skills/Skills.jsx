import React from "react";
import Marquee from "react-fast-marquee";
import reactIcon from "../assets/images/icons/react.png";
import htmlIcon from "../assets/images/icons/html.png";
import cssIcon from "../assets/images/icons/css.png";
import tailwindIcon from "../assets/images/icons/tailwind.png";
import bootstrapIcon from "../assets/images/icons/bootstrap.png";
import routerIcon from "../assets/images/icons/router.png";
import jsIcon from "../assets/images/icons/js.png";
import firebaseIcon from "../assets/images/icons/firebase.png";
import nodeIcon from "../assets/images/icons/node.png";
import expressIcon from "../assets/images/icons/express.png";
import mongodbIcon from "../assets/images/icons/mongodb.png";
import jwtIcon from "../assets/images/icons/jwt.png";
import canvaIcon from "../assets/images/icons/canva.png";
import figmaIcon from "../assets/images/icons/figma.png";
import gitIcon from "../assets/images/icons/git.png";
import githubIcon from "../assets/images/icons/github.png";
import netlifyIcon from "../assets/images/icons/netlify.png";
import npmIcon from "../assets/images/icons/npm.png";
import vercelIcon from "../assets/images/icons/vercel.png";
import viteIcon from "../assets/images/icons/vite.png";
import vscodeIcon from "../assets/images/icons/vscode.png";

const Skills = () => {
  return (
    <div className="py-16 flex flex-col items-center justify-between min-h-screen ">
      <h3 className="text-4xl font-bold">
        {"<"}My <span className="text-[#42d7f5]">Skills!</span>
        {" />"}
      </h3>
      <div className="w-full">
        {/* frontend technologies */}
        <div className="text-2xl font-semibold mb-5">
          {"<"}Frontend <span className="text-[#42d7f5]">technologies</span>=
          {`{`}{" "}
          <div className="w-full inline h-28">
            <Marquee className="flex items-center gap-5">
              <div className="flex items-center mr-5 gap-2">
                <img src={reactIcon} alt="" />
                <h3 className="text-4xl">React.js</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={htmlIcon} alt="" />
                <h3 className="text-4xl">HTML</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={cssIcon} alt="" />
                <h3 className="text-4xl">CSS</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={tailwindIcon} alt="" />
                <h3 className="text-4xl">Tailwind CSS</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={bootstrapIcon} alt="" />
                <h3 className="text-4xl">Bootstrap</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={routerIcon} alt="" />
                <h3 className="text-4xl">React Router</h3>
              </div>
            </Marquee>
          </div>{" "}
          {"}"} {" />"}
        </div>
        {/* backend technologies */}
        <div className="text-2xl font-semibold mb-5">
          {"<"}Backend <span className="text-[#42d7f5]">technologies</span>=
          {`{`}{" "}
          <div className="w-full inline h-28">
            <Marquee className="flex items-center gap-5">
              <div className="flex items-center mr-5 gap-2">
                <img src={jsIcon} alt="" />
                <h3 className="text-4xl">JavaScript</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={firebaseIcon} alt="" />
                <h3 className="text-4xl">Firebase</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={nodeIcon} alt="" />
                <h3 className="text-4xl">Node.js</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={expressIcon} alt="" />
                <h3 className="text-4xl">Express.js</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={mongodbIcon} alt="" />
                <h3 className="text-4xl">MongoDB</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={jwtIcon} alt="" />
                <h3 className="text-4xl">JWT</h3>
              </div>
            </Marquee>
          </div>{" "}
          {"}"} {" />"}
        </div>
        {/* tools */}
        <div className="text-2xl font-semibold mb-5">
          {"<"}Tools <span className="text-[#42d7f5]">names</span>={`{`}{" "}
          <div className="w-full inline h-28">
            <Marquee className="flex items-center gap-5">
              <div className="flex items-center mr-5 gap-2">
                <img src={vscodeIcon} alt="" />
                <h3 className="text-4xl">VS Code</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={netlifyIcon} alt="" />
                <h3 className="text-4xl">Netlify</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={vercelIcon} alt="" />
                <h3 className="text-4xl">Vercel</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={figmaIcon} alt="" />
                <h3 className="text-4xl">Figma</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={gitIcon} alt="" />
                <h3 className="text-4xl">Git</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={githubIcon} alt="" />
                <h3 className="text-4xl">GitHub</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={viteIcon} alt="" />
                <h3 className="text-4xl">Vite</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={npmIcon} alt="" />
                <h3 className="text-4xl">NPM</h3>
              </div>
              <div className="flex items-center mr-5 gap-2">
                <img src={canvaIcon} alt="" />
                <h3 className="text-4xl">Canva</h3>
              </div>
            </Marquee>
          </div>{" "}
          {"}"} {" />"}
        </div>
      </div>
      <button className="border-2 max-w-[250px] px-3 py-2 rounded border-[#42d7f5] text-lg font-semibold hover:bg-[#42d7f5] hover:text-white">
        Download Resume!
      </button>
    </div>
  );
};

export default Skills;
