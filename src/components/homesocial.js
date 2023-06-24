import React from "react";
import '../components-styles/homesidebar.css';
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const HomeSocial = () =>{
    return(
        <div className="home-contact">
            <a className="linkedin" href="mailto:anandhprabhu888@gmail.com"><FaLinkedin></FaLinkedin></a>
            <a className="github" href="tel:8883430055"><FaGithub></FaGithub></a>
            <a className="insta" href=""><FaInstagramSquare></FaInstagramSquare></a>
        </div>
    )
}

export default HomeSocial;