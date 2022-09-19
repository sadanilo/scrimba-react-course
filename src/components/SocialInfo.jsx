import React from "react";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

function SocialInfo(){
    return(
        <div className="social-info">
            <a href=""><FaTwitterSquare className="icon"/></a>
            <a href=""><FaFacebookSquare className="icon"/></a>
            <a href=""><FaInstagramSquare className="icon"/></a>
            <a href=""><FaGithubSquare className="icon"/></a>
        </div>
    )
}

export default SocialInfo