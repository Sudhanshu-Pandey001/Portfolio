import React from 'react'

import { useTheme } from '../../Context/ThemeContext';

import "./Home.css";
import Typewriter from 'typewriter-effect';
import Resume from "../../assets/documents/Resume.txt"

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const  Home = () => {
  const [theme, setTheme] = useTheme()

  //handle theme 
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">

        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (<BsFillMoonStarsFill size={30}/>): (<BsFillSunFill size={30}/>)}
        </div>

        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
          <Typewriter
                options={{
                  strings: ['FullStack Developer !', 'Mern Stack Developer !','React native Developer !'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </h1>

          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Your_name.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
