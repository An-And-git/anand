import React from "react";
import '../components-styles/homesidebar.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const HomeContact = () =>{
    return(
        <div className="home-contact">
            <a class="email" href="mailto:anandhprabhu888@gmail.com"><FaEnvelope></FaEnvelope></a>
            <a class="phone" href="tel:8883430055"><FaPhoneAlt></FaPhoneAlt></a>
            <a class="map" href="https://goo.gl/maps/7tkRH12TFX9s9jgKA"><FaMapMarkerAlt></FaMapMarkerAlt></a>
            <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/anand-sivagnanam/"><FaLinkedin></FaLinkedin></a>
            <a className="github" target="_blank" href="https://github.com/An-And-git"><FaGithub></FaGithub></a>
            <a className="insta" target="_blank" href="https://www.instagram.com/AnandJocu/"><FaInstagramSquare></FaInstagramSquare></a>
        </div>
    )
}

export default HomeContact;