import React from 'react'
import "./Menus.css"
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
            <FcHome/>Home</div>
{/* Copy paste  */}

            <div className="nav-link">
            <FcAbout />About</div>

            <div className="nav-link">
            <FcPortraitMode />Work Experince</div>

            <div className="nav-link">
            <FcBiotech/>Tech stack</div>

            <div className="nav-link">
            <FcReadingEbook />Eduction</div>

            <div className="nav-link">
            <FcVideoProjector />Projects</div>

            <div className="nav-link">
            <FcVoicePresentation/>Testimonial</div>

            <div className="nav-link">
            <FcBusinessContact/>Contact</div>
        </div>
      </div>
        </>
    ) : (
        
        <>
{/* Copy paste  */}
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
            <FcHome title="Home" /></div>

            <div className="nav-link">
            <FcAbout title="About"/></div>

            <div className="nav-link">
            <FcPortraitMode title="Work Experince"/></div>

            <div className="nav-link">
            <FcBiotech title="Tech stack"/></div>

            <div className="nav-link">
            <FcReadingEbook title="Eduction"/></div>

            <div className="nav-link">
            <FcVideoProjector title="Project"/></div>

            <div className="nav-link">
            <FcVoicePresentation title="Testimonial"/></div>

            <div className="nav-link">
            <FcBusinessContact title="Contact"/></div>
        </div>
      </div>        
        </>
    )}
      
    </>
  )
}

export default Menu
