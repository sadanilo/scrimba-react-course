import React from "react";
import photo from "../assets/dan.webp"
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function PersonalInfo() {
  return (
    <div className="personal-info">
      <img src={photo} alt="React Logo" />
      <h2>Danilo Araújo</h2>
      <h4>Frontend Developer</h4>
      <p>dandevsapps.com</p>
      <div className="info-buttons">
        <a href=""><FaEnvelope className="icon" />Email</a>
        <a href=""><FaLinkedin className="icon" />Linkedin</a>
      </div>
    </div>
  );
}

export default PersonalInfo;
