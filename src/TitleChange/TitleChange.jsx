import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./TitleChange.css";

const TitleChange = () => {
  const [titles, setTitles] = useState([
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Frontend Developer",
    "JavaScript Developer",
  ]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[currentTitleIndex]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setCurrentTitle(titles[currentTitleIndex]);
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentTitleIndex, titles]);

  return (
    <div className="inline">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade"
        key={currentTitle}
      >
        <h1 key={animationKey} className="fade-in-out">
          {currentTitle}
        </h1>
      </CSSTransition>
    </div>
  );
};

export default TitleChange;
