import React from 'react'
import "./Menus.css"

import { Link } from 'react-scroll';

import {FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc"

const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <> 
        <div className="navbar-profile-pic">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MN85awIpwlqrBL9GJ145mL5POrFE1xqe2A&s" alt="profile pic" />
      </div>
      <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
              <FcHome/>Home
              </Link>
       
            </div>
{/* Copy paste  */}

            <div className="nav-link">

              <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
              <FcAbout />About
              </Link>
            </div>

            <div className="nav-link">

              <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
              <FcReadingEbook />Education
              </Link>
            </div>

            <div className="nav-link">

              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
              <FcBiotech/>Tech stack
              </Link>
           </div>

            <div className="nav-link">

              <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
              <FcVideoProjector />Projects
              </Link>
            </div>

            <div className="nav-link">

              <Link to="work-exp" spy={true} smooth={true} offset={-100} duration={100}>
              <FcPortraitMode />Work Experince
              </Link>
            </div>

            <div className="nav-link">

              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
              <FcBusinessContact/>Contact
              </Link>
          </div>
          
        </div>
      </div>
        </>
    ) : (
        
        <>
{/* Copy paste  */}
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
              <FcHome/>
              </Link></div>

            <div className="nav-link">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
              <FcAbout />
              </Link></div>

            <div className="nav-link">
            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
              <FcReadingEbook />
              </Link></div>

             <div className="nav-link">
             <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
              <FcBiotech/>
              </Link></div>

            <div className="nav-link">
            <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
              <FcVideoProjector />
              </Link></div>

            <div className="nav-link">
            <Link to="work-exp" spy={true} smooth={true} offset={-100} duration={100}>
              <FcPortraitMode />
              </Link></div>

            <div className="nav-link">
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
              <FcBusinessContact/>
              </Link></div>
        </div>
      </div>        
        </>
    )}
      
    </>
  )
}

export default Menu
